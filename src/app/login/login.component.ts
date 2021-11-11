import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    user:any;
    constructor(public router: Router,
        private auth: AuthServiceService,) {}

    ngOnInit() {
        const marginTops: any = document.querySelector('.footer').clientHeight;
        (document.querySelector('.content') as HTMLElement).style.marginBottom = '-' + marginTops + 'px';

        const headerhegiht: any = document.querySelector('.header').clientHeight;
        const loginheight: any = window.innerHeight - marginTops - 60 - headerhegiht;

        (document.querySelector('.login-row-height') as HTMLElement).style.minHeight = loginheight + 'px';

        const dom: any = document.querySelector('body');
        dom.classList.remove('sidemenu-open');
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
    googleAuth(){
        this.auth.googleAuth();
        this.auth.getUser().subscribe(resp => {
        this.user = resp;
        if (this.user) {
            this.router.navigate(['/inicio']);
        }
    })
    }


}
