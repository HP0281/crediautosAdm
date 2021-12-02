(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\" [@routerTransition]>\r\n    <div class=\"wrapper\">\r\n        <div class=\"content shadow-sm position-relative\">\r\n            <header class=\"header\">\r\n                <!-- Fixed navbar -->\r\n                <nav class=\"container-fluid\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col align-self-center\">\r\n                            <a href=\"\" class=\"logo text-white\">\r\n                                <img src=\"assets/images/logocrediuatos.svg\" alt=\"\" class=\"logo-icon\" />\r\n                                <div class=\"logo-text\">\r\n                                    <h5 class=\"fs22 mb-0\">Crediautos.co</h5>\r\n                                    <p class=\"text-uppercase fs11\">Panel de administración</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col text-right align-self-center\">\r\n                            <a [routerLink]=\"['/signup']\" class=\"btn btn-sm btn-primary text-uppercase\">Register</a>\r\n                        </div>\r\n                    </div>\r\n                </nav>\r\n            </header>\r\n            <div class=\"background opac blur\" style=\"background-image:url('assets/images/logocrediuatos.svg')\">\r\n            </div>\r\n\r\n            <!-- Main container starts -->\r\n            <div class=\"container main-container\" id=\"main-container\">\r\n                <div class=\"row login-row-height\">\r\n                    <div class=\"col-12 col-md-6 col-lg-7 d-none d-md-flex\"></div>\r\n                    <div class=\"col-12 col-md-6 col-lg-5 col-xl-4  align-self-center\">\r\n                        <div class=\"card border-0 shadow-lg blur\">\r\n                            <div class=\"card-body py-5\">\r\n                                <h5 class=\"font-weight-light mb-1 text-mute-high\">Welcome,</h5>\r\n                                <h3 class=\"font-weight-normal mb-4\">Please Sign In</h3>\r\n                                <div class=\"card  mb-2 overflow-hidden\">\r\n                                    <div class=\"card-body p-0\">\r\n                                        <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\r\n                                        <input\r\n                                            type=\"email\"\r\n                                            id=\"inputEmail\"\r\n                                            class=\"form-control rounded-0 border-0\"\r\n                                            placeholder=\"{{ 'Email' | translate }}\"\r\n                                            required=\"\"\r\n                                            autofocus=\"\"\r\n                                        />\r\n                                        <hr class=\"my-0\" />\r\n                                        <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n                                        <input\r\n                                            type=\"password\"\r\n                                            id=\"inputPassword\"\r\n                                            class=\"form-control rounded-0 border-0\"\r\n                                            placeholder=\"{{ 'Password' | translate }}\"\r\n                                            required=\"\"\r\n                                        />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"my-3 row\">\r\n                                    <div class=\"col-12 col-md py-1\">\r\n                                        <div class=\"custom-control custom-checkbox\">\r\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\" checked=\"\" />\r\n                                            <label class=\"custom-control-label\" for=\"customCheck1\">Remember Me</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-12 col-md py-1 text-left text-md-right\">\r\n                                        <a href=\"resetpassword.html\" class=\"template-primary\">Forgot Password?</a>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"mb-4\">\r\n                                    <a [routerLink]=\"['/dashboard']\" (click)=\"onLoggedin()\" class=\" btn btn-primary btn-block\"\r\n                                    >Sign In <i class=\"material-icons md-18\">arrow_forward</i></a\r\n                                    >\r\n                                    <div class=\"col text-right align-self-center google\" >\r\n                                        <img src=\"data:image/png;base64,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\"\r\n                                                    alt=\"\" (click)=\"googleAuth()\" style=\"height: 35px; width: 35px; \">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"\">\r\n                                    <p class=\"text-mute\">\r\n                                        Do not have account yet?<br />\r\n                                        Please <a [routerLink]=\"['/signup']\" class=\"text-template-primary-light\">Sign up</a> here.\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- Main container ends -->\r\n        </div>\r\n        <footer class=\"footer d-block\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 col-md text-center text-md-left align-self-center\">\r\n                        <p>All rights reserved by <a href=\"\">Maxartkiller</a></p>\r\n                    </div>\r\n                    <div class=\"col-12 col-md-auto text-center text-md-right\">\r\n                        <ul class=\"nav justify-content-center justify-md-content-end\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link active\" href=\"javascript:void(0)\">Terms of use</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"javascript:void(0)\">Privacy Policy</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"javascript:void(0)\">Contact us</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </footer>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");




const routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }
];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoginRoutingModule);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".google {\n  display: flex;\n  justify-content: center;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFRyYWJham9cXGNyZWRpYXV0b3NBZG0vc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nb29nbGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59IiwiLmdvb2dsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth-service.service */ "./src/app/services/auth-service.service.ts");





let LoginComponent = class LoginComponent {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    ngOnInit() {
        const marginTops = document.querySelector('.footer').clientHeight;
        document.querySelector('.content').style.marginBottom = '-' + marginTops + 'px';
        const headerhegiht = document.querySelector('.header').clientHeight;
        const loginheight = window.innerHeight - marginTops - 60 - headerhegiht;
        document.querySelector('.login-row-height').style.minHeight = loginheight + 'px';
        const dom = document.querySelector('body');
        dom.classList.remove('sidemenu-open');
    }
    onLoggedin() {
    }
    googleAuth() {
        this.auth.googleAuth();
        this.auth.getUser().subscribe(resp => {
            this.user = resp;
            window.sessionStorage.setItem("auth", JSON.stringify(this.user));
            console.log("JSON.stringify(this.user)", JSON.stringify(this.user));
            console.log("this.user", this.user);
            if (this.user) {
                localStorage.setItem('isLoggedin', 'true');
                this.router.navigate(['/dashboard']);
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_3__["routerTransition"])()],
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");






let LoginModule = class LoginModule {
};
LoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"]
        ],
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]]
    })
], LoginModule);



/***/ }),

/***/ "./src/app/router.animations.ts":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: routerTransition, noTransition, slideToRight, slideToLeft, slideToBottom, slideToTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noTransition", function() { return noTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToRight", function() { return slideToRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToLeft", function() { return slideToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToBottom", function() { return slideToBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToTop", function() { return slideToTop; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

function routerTransition() {
    return noTransition();
}
function noTransition() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', []);
}
function slideToRight() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}


/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map