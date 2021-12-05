import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmacionComponent } from '../admin/modals/confirmacion/confirmacion.component';
import { routerTransition } from '../router.animations';
import { AuthServiceService } from '../services/auth-service.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    user:any;
    acces: FormGroup;
    constructor(public router: Router,
        private auth: AuthServiceService,
        private fb: FormBuilder,
        private userSv: UserServiceService,
        public dialog: MatDialog) {
            this.initForm();
        }

    ngOnInit() {
        const marginTops: any = document.querySelector('.footer').clientHeight;
        (document.querySelector('.content') as HTMLElement).style.marginBottom = '-' + marginTops + 'px';

        const headerhegiht: any = document.querySelector('.header').clientHeight;
        const loginheight: any = window.innerHeight - marginTops - 60 - headerhegiht;

        (document.querySelector('.login-row-height') as HTMLElement).style.minHeight = loginheight + 'px';

        const dom: any = document.querySelector('body');
        dom.classList.remove('sidemenu-open');
    }

    async onLoggedin() {
        
            this.auth.login(this.acces.get('user').value, this.acces.get('psw').value).then(resp=>{

                this.userSv.validateuserAdmin(this.acces.get('user').value).subscribe(resp => {
                    if (resp[0] != null) {
                        window.sessionStorage.setItem("auth",JSON.stringify(this.user));
                        localStorage.setItem('isLoggedin', 'true');
                        this.router.navigate(['/dashboard']);
                    }else{
                        this.auth.logOut();
                    }
                })
            }).catch(err => {
                
                const dialogref = this.dialog.open(ConfirmacionComponent, {
                    width: '250px',
                    data: {
                        message: err,
                        noresp:  true,
                        cancel: "Reintentar"
                    }
                })
                dialogref.afterClosed().subscribe(resp => {
                    this.acces.reset();
                })
            });  
        
        
    }
    googleAuth(){
        
        this.auth.googleAuth();
        this.auth.getUser().subscribe(resp => {
            this.user = resp;
            window.sessionStorage.setItem("auth",JSON.stringify(this.user));

            console.log("JSON.stringify(this.user)",JSON.stringify(this.user));
            console.log("this.user",this.user);
            if (this.user) {
            localStorage.setItem('isLoggedin', 'true');
            this.router.navigate(['/dashboard']);
        }
    })
    }
    
    initForm(){
        this.acces = this.fb.group({
            user: new FormControl('', [Validators.required]),
            psw: new FormControl('', [Validators.required])
        })
    }

}
