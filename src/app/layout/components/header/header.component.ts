import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { CategoriasService } from 'src/app/services/categorias.service';



@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    name: string;
    isEmpresa=true;
    messages:any;

    constructor(private translate: TranslateService, public router: Router,
        private auth: AuthServiceService,
        private categoriaService:CategoriasService) {
        this.router.events.subscribe(val => {});
      
    }

    ngOnInit() {
        this.name = this.auth._userinfo.displayName;
        console.log("this.auth._userinfo.displayName",this.auth._userinfo.displayName);
        console.log(this.categoriaService.getCategories());
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
        this.router.navigate(["login"]);

    }
    modificarMiPerfil(modal){
        
    }
}
