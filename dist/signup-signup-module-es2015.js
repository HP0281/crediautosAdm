(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\" [@routerTransition]>\r\n    <div class=\"wrapper\">\r\n        <div class=\"content shadow-sm position-relative\">\r\n            <header class=\"header\">\r\n                <!-- Fixed navbar -->\r\n                <nav class=\"container-fluid\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col align-self-center\">\r\n                            <a href=\"\" class=\"logo text-white\">\r\n                                <img src=\"assets/images/logoicon.svg\" alt=\"\" class=\"logo-icon\" />\r\n                                <div class=\"logo-text\">\r\n                                    <h5 class=\"fs22 mb-0\">AdminUX <sup class=\"badge badge-danger\">PRO</sup></h5>\r\n                                    <p class=\"text-uppercase fs11\">Admin Dashboard</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col text-right align-self-center\">\r\n                            <a [routerLink]=\"['/login']\" class=\"btn btn-sm btn-primary text-uppercase\">Login</a>\r\n                        </div>\r\n                    </div>\r\n                </nav>\r\n            </header>\r\n            <div class=\"background opac\" style=\"background-image: url('assets/images/happy-faces.jpg');\">\r\n            </div>\r\n\r\n            <!-- Main container starts -->\r\n            <div class=\"container main-container\" id=\"main-container\">\r\n                <div class=\"row login-row-height\">\r\n                    <div class=\"col-12 col-md-6 col-lg-7 d-none d-md-flex\"></div>\r\n                    <div class=\"col-12 col-md-6 col-lg-5 col-xl-4  align-self-center\">\r\n                        <div class=\"card border-0 shadow-lg blur\">\r\n                            <div class=\"card-body py-5\">\r\n                                <h5 class=\"font-weight-light mb-1 text-mute-high\">We are AdminuxPRO,</h5>\r\n                                <h3 class=\"font-weight-normal mb-4\">Sign Up with us</h3>\r\n                                <div class=\"card  mb-2 overflow-hidden\">\r\n                                    <div class=\"card-body p-0\">\r\n                                        <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\r\n                                        <input\r\n                                            type=\"email\"\r\n                                            id=\"inputEmail\"\r\n                                            class=\"form-control rounded-0 border-0\"\r\n                                            placeholder=\"{{ 'Email' | translate }}\"\r\n                                            required=\"\"\r\n                                            autofocus=\"\"\r\n                                        />\r\n                                        <hr class=\"my-0\" />\r\n                                        <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n                                        <input\r\n                                            type=\"password\"\r\n                                            id=\"inputPassword\"\r\n                                            class=\"form-control rounded-0 border-0\"\r\n                                            placeholder=\"{{ 'Password' | translate }}\"\r\n                                            required=\"\"\r\n                                        />\r\n                                        <hr class=\"my-0\" />\r\n                                        <label for=\"inputPasswordconfirm\" class=\"sr-only\">Confirm Password</label>\r\n                                        <input\r\n                                            type=\"password\"\r\n                                            id=\"inputPasswordconfirm\"\r\n                                            class=\"form-control rounded-0 border-0\"\r\n                                            placeholder=\"{{ 'Repeat Password' | translate }}\"\r\n                                            required=\"\"\r\n                                        />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"my-3 row\">\r\n                                    <div class=\"col-12 py-1\">\r\n                                        <div class=\"custom-control custom-checkbox\">\r\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\" checked=\"\" />\r\n                                            <label class=\"custom-control-label\" for=\"customCheck1\">Agree to the terms and condition</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"text-left mb-4\">\r\n                                    <a [routerLink]=\"['/dashboard']\" class=\" btn btn-primary btn-block\"\r\n                                        >Sign Up <i class=\"material-icons md-18\">arrow_forward</i></a\r\n                                    >\r\n                                </div>\r\n\r\n                                <div class=\"\">\r\n                                    <p class=\"text-mute\">\r\n                                        Already have account?<br />\r\n                                        Please <a [routerLink]=\"['/login']\" class=\"template-primary\">Sign In</a> here.\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- Main container ends -->\r\n        </div>\r\n        <footer class=\"footer d-block\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 col-md text-center text-md-left align-self-center\">\r\n                        <p>All rights reserved by <a href=\"\">Maxartkiller</a></p>\r\n                    </div>\r\n                    <div class=\"col-12 col-md-auto text-center text-md-right\">\r\n                        <ul class=\"nav justify-content-center justify-md-content-end\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link active\" href=\"#\">Terms of use</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\">Privacy Policy</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"contactus.html\">Contact us</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </footer>\r\n    </div>\r\n</div>\r\n"

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


/***/ }),

/***/ "./src/app/signup/signup-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SignupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupRoutingModule", function() { return SignupRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");




const routes = [
    {
        path: '', component: _signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
    }
];
let SignupRoutingModule = class SignupRoutingModule {
};
SignupRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SignupRoutingModule);



/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".google {\n  display: flex;\n  justify-content: center;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0M6XFxUcmFiYWpvXFxjcmVkaWF1dG9zQWRtL3NyY1xcYXBwXFxzaWdudXBcXHNpZ251cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ29vZ2xle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufSIsIi5nb29nbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");



let SignupComponent = class SignupComponent {
    constructor() { }
    ngOnInit() {
        const marginTops = document.querySelector('.footer').clientHeight;
        document.querySelector('.content').style.marginBottom = '-' + marginTops + 'px';
        const headerhegiht = document.querySelector('.header').clientHeight;
        const loginheight = window.innerHeight - marginTops - 60 - headerhegiht;
        document.querySelector('.login-row-height').style.minHeight = loginheight + 'px';
        const dom = document.querySelector('body');
        dom.classList.remove('sidemenu-open');
    }
};
SignupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
        styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SignupComponent);



/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/signup/signup-routing.module.ts");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");






let SignupModule = class SignupModule {
};
SignupModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_4__["SignupRoutingModule"]
        ],
        declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]]
    })
], SignupModule);



/***/ })

}]);
//# sourceMappingURL=signup-signup-module-es2015.js.map