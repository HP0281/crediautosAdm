(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["access-denied-access-denied-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/access-denied/access-denied.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/access-denied/access-denied.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"content shadow-sm position-relative\">\r\n        <header class=\"header\">\r\n            <!-- Fixed navbar -->\r\n            <nav class=\"container-fluid\">\r\n                <div class=\"row\">\r\n                    <div class=\"col align-self-center\">\r\n                        <a href=\"\" class=\"logo text-white\">\r\n                            <img src=\"assets/images/logoicon.svg\" alt=\"\" class=\"logo-icon\" />\r\n                            <div class=\"logo-text\">\r\n                                <h5 class=\"fs22 mb-0\">AdminUX <sup class=\"badge badge-danger\">PRO</sup></h5>\r\n                                <p class=\"text-uppercase fs11\">Admin Dashboard</p>\r\n                            </div>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col text-right align-self-center\">\r\n                        <a [routerLink]=\"['/login']\" class=\"btn btn-sm btn-primary text-uppercase\">Login</a>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n        </header>\r\n\r\n        <!-- Main container starts -->\r\n        <div class=\"container main-container\" id=\"main-container\">\r\n            <div class=\"row login-row-height\">\r\n                <div class=\"col-12 col-md-8 col-lg-6 align-self-center mx-auto text-center\">\r\n                  <h1 class=\"display-2 font-weight-bold\">Oops...</h1>\r\n                    <h3>You do not have access to this page</h3>\r\n                    <p class=\"text-template-primary-light\">\r\n                        Please contact administator<br>or Login to your account in order to access this page\r\n                    </p>                    \r\n                    <br />\r\n                    <a [routerLink]=\"['/dashboard']\" class=\"mt-2 btn btn-outline-primary btn-rounded\">Go back to dashboard</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- Main container ends -->\r\n    </div>\r\n    <footer class=\"footer\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-md text-center text-md-left align-self-center\">\r\n                    <p>All rights reserved by <a href=\"\">Maxartkiller</a></p>\r\n                </div>\r\n                <div class=\"col-12 col-md-auto text-center text-md-right\">\r\n                    <ul class=\"nav justify-content-center justify-md-content-end\">\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link active\" href=\"javascript:void(0)\">Terms of use</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" href=\"javascript:void(0)\">Privacy Policy</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" href=\"javascript:void(0)\">Contact us</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </footer>\r\n</div>\r\n<!-- wrapper ends -->\r\n"

/***/ }),

/***/ "./src/app/access-denied/access-denied-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/access-denied/access-denied-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AccessDeniedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessDeniedRoutingModule", function() { return AccessDeniedRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _access_denied_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./access-denied.component */ "./src/app/access-denied/access-denied.component.ts");




var routes = [
    {
        path: '', component: _access_denied_component__WEBPACK_IMPORTED_MODULE_3__["AccessDeniedComponent"]
    }
];
var AccessDeniedRoutingModule = /** @class */ (function () {
    function AccessDeniedRoutingModule() {
    }
    AccessDeniedRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AccessDeniedRoutingModule);
    return AccessDeniedRoutingModule;
}());



/***/ }),

/***/ "./src/app/access-denied/access-denied.component.scss":
/*!************************************************************!*\
  !*** ./src/app/access-denied/access-denied.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY2Vzcy1kZW5pZWQvYWNjZXNzLWRlbmllZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/access-denied/access-denied.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/access-denied/access-denied.component.ts ***!
  \**********************************************************/
/*! exports provided: AccessDeniedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessDeniedComponent", function() { return AccessDeniedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var AccessDeniedComponent = /** @class */ (function () {
    function AccessDeniedComponent() {
    }
    AccessDeniedComponent.prototype.ngOnInit = function () {
        var marginTops = document.querySelector('.footer').clientHeight;
        document.querySelector('.content').style.marginBottom = '-' + marginTops + 'px';
        var headerhegiht = document.querySelector('.header').clientHeight;
        var loginheight = window.innerHeight - marginTops - 60 - headerhegiht;
        document.querySelector('.login-row-height').style.minHeight = loginheight + 'px';
        var dom = document.querySelector('body');
        dom.classList.remove('sidemenu-open');
    };
    AccessDeniedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-access-denied',
            template: __webpack_require__(/*! raw-loader!./access-denied.component.html */ "./node_modules/raw-loader/index.js!./src/app/access-denied/access-denied.component.html"),
            styles: [__webpack_require__(/*! ./access-denied.component.scss */ "./src/app/access-denied/access-denied.component.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AccessDeniedComponent);
    return AccessDeniedComponent;
}());



/***/ }),

/***/ "./src/app/access-denied/access-denied.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/access-denied/access-denied.module.ts ***!
  \*******************************************************/
/*! exports provided: AccessDeniedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessDeniedModule", function() { return AccessDeniedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _access_denied_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./access-denied-routing.module */ "./src/app/access-denied/access-denied-routing.module.ts");
/* harmony import */ var _access_denied_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./access-denied.component */ "./src/app/access-denied/access-denied.component.ts");





var AccessDeniedModule = /** @class */ (function () {
    function AccessDeniedModule() {
    }
    AccessDeniedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _access_denied_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccessDeniedRoutingModule"]
            ],
            declarations: [_access_denied_component__WEBPACK_IMPORTED_MODULE_4__["AccessDeniedComponent"]]
        })
    ], AccessDeniedModule);
    return AccessDeniedModule;
}());



/***/ })

}]);
//# sourceMappingURL=access-denied-access-denied-module-es5.js.map