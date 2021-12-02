(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["server-error-server-error-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/server-error/server-error.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/server-error/server-error.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"content shadow-sm position-relative\">\r\n        <header class=\"header\">\r\n            <!-- Fixed navbar -->\r\n            <nav class=\"container-fluid\">\r\n                <div class=\"row\">\r\n                    <div class=\"col align-self-center\">\r\n                        <a href=\"\" class=\"logo text-white\">\r\n                            <img src=\"assets/images/logoicon.svg\" alt=\"\" class=\"logo-icon\" />\r\n                            <div class=\"logo-text\">\r\n                                <h5 class=\"fs22 mb-0\">AdminUX <sup class=\"badge badge-danger\">PRO</sup></h5>\r\n                                <p class=\"text-uppercase fs11\">Admin Dashboard</p>\r\n                            </div>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col text-right align-self-center\">\r\n                        <a [routerLink]=\"['/login']\" class=\"btn btn-sm btn-primary text-uppercase\">Login</a>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n        </header>\r\n\r\n        <!-- Main container starts -->\r\n        <div class=\"container main-container\" id=\"main-container\">\r\n            <div class=\"row login-row-height\">\r\n                <div class=\"col-12 col-md-11 col-lg-10 align-self-center mx-auto\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 col-md-4 col-lg-5 text-center align-self-center\">\r\n                            <img src=\"assets/images/under-construction.png\" alt=\"\" class=\"vm mw-100\" />\r\n                        </div>\r\n                        <div class=\"col-12 col-md-8 col-lg-7 align-self-center pl-md-5\">\r\n                            <h1>This page is under construction</h1>\r\n                            <p class=\"text-template-primary-light\">\r\n                                Information or page you are looking for is might be under construction or its being updated and under\r\n                                maintanance. Try after sometime or check connection properly.<br /><br />\r\n                                If your are looking for somthing else try our search to find our most related information you are looking\r\n                                for:\r\n                            </p>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-10 col-md-8 col-ld-7\">\r\n                                    <div class=\"input-group my-2\">\r\n                                        <input type=\"search\" class=\"form-control\" placeholder=\"Search\" />\r\n                                        <div class=\"input-group-append\">\r\n                                            <button class=\"btn btn-primary\" type=\"button\">Search</button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <br>\r\n                            <a [routerLink]=\"['/dashboard']\" class=\"mt-2 btn btn-outline-primary btn-rounded\">Go back to dashboard</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- Main container ends -->\r\n    </div>\r\n    <footer class=\"footer\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-md text-center text-md-left align-self-center\">\r\n                    <p>All rights reserved by <a href=\"\">Maxartkiller</a></p>\r\n                </div>\r\n                <div class=\"col-12 col-md-auto text-center text-md-right\">\r\n                    <ul class=\"nav justify-content-center justify-md-content-end\">\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link active\" href=\"javascript:void(0)\">Terms of use</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" href=\"javascript:void(0)\">Privacy Policy</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" href=\"javascript:void(0)\">Contact us</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </footer>\r\n</div>\r\n<!-- wrapper ends -->\r\n"

/***/ }),

/***/ "./src/app/server-error/server-error-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/server-error/server-error-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ServerErrorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorRoutingModule", function() { return ServerErrorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _server_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server-error.component */ "./src/app/server-error/server-error.component.ts");




var routes = [
    {
        path: '', component: _server_error_component__WEBPACK_IMPORTED_MODULE_3__["ServerErrorComponent"]
    }
];
var ServerErrorRoutingModule = /** @class */ (function () {
    function ServerErrorRoutingModule() {
    }
    ServerErrorRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ServerErrorRoutingModule);
    return ServerErrorRoutingModule;
}());



/***/ }),

/***/ "./src/app/server-error/server-error.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/server-error/server-error.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZlci1lcnJvci9zZXJ2ZXItZXJyb3IuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/server-error/server-error.component.ts":
/*!********************************************************!*\
  !*** ./src/app/server-error/server-error.component.ts ***!
  \********************************************************/
/*! exports provided: ServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function() { return ServerErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var ServerErrorComponent = /** @class */ (function () {
    function ServerErrorComponent() {
    }
    ServerErrorComponent.prototype.ngOnInit = function () {
        var marginTops = document.querySelector('.footer').clientHeight;
        document.querySelector('.content').style.marginBottom = '-' + marginTops + 'px';
        var headerhegiht = document.querySelector('.header').clientHeight;
        var loginheight = window.innerHeight - marginTops - 60 - headerhegiht;
        document.querySelector('.login-row-height').style.minHeight = loginheight + 'px';
        var dom = document.querySelector('body');
        dom.classList.remove('sidemenu-open');
    };
    ServerErrorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-server-error',
            template: __webpack_require__(/*! raw-loader!./server-error.component.html */ "./node_modules/raw-loader/index.js!./src/app/server-error/server-error.component.html"),
            styles: [__webpack_require__(/*! ./server-error.component.scss */ "./src/app/server-error/server-error.component.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ServerErrorComponent);
    return ServerErrorComponent;
}());



/***/ }),

/***/ "./src/app/server-error/server-error.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/server-error/server-error.module.ts ***!
  \*****************************************************/
/*! exports provided: ServerErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorModule", function() { return ServerErrorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _server_error_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server-error-routing.module */ "./src/app/server-error/server-error-routing.module.ts");
/* harmony import */ var _server_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./server-error.component */ "./src/app/server-error/server-error.component.ts");





var ServerErrorModule = /** @class */ (function () {
    function ServerErrorModule() {
    }
    ServerErrorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _server_error_routing_module__WEBPACK_IMPORTED_MODULE_3__["ServerErrorRoutingModule"]
            ],
            declarations: [_server_error_component__WEBPACK_IMPORTED_MODULE_4__["ServerErrorComponent"]]
        })
    ], ServerErrorModule);
    return ServerErrorModule;
}());



/***/ })

}]);
//# sourceMappingURL=server-error-server-error-module-es5.js.map