import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    name: string;
    constructor(private translate: TranslateService, public router: Router,
        private auth: AuthServiceService) {
        this.router.events.subscribe(val => {});
        this.name = this.auth._userinfo.displayName;
    }

    ngOnInit() {
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        event.stopPropagation();
        dom.classList.toggle('sidemenu-open');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
    logOut(){
        this.auth.logOut();
    }
}
