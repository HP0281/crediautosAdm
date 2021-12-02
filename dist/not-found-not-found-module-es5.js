(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["not-found-not-found-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/not-found/not-found.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"content shadow-sm position-relative\">\r\n        <header class=\"header\">\r\n            <!-- Fixed navbar -->\r\n            <nav class=\"container-fluid\">\r\n                <div class=\"row\">\r\n                    <div class=\"col align-self-center\">\r\n                        <a href=\"\" class=\"logo text-white\">\r\n                            <img src=\"assets/images/logoicon.svg\" alt=\"\" class=\"logo-icon\">\r\n                            <div class=\"logo-text\">\r\n                                <h5 class=\"fs22 mb-0\">AdminUX <sup class=\"badge badge-danger\">PRO</sup></h5>\r\n                                <p class=\"text-uppercase fs11\">Admin Dashboard</p>\r\n                            </div>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col text-right align-self-center\">\r\n                        <a [routerLink]=\"['/signup']\" class=\"btn btn-sm btn-primary text-uppercase\">Register</a>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n        </header>\r\n        <div class=\"background opac\" style=\"background-image: url('assets/images/404.jpg');\">\r\n        </div>\r\n\r\n        <!-- Main container starts -->\r\n        <div class=\"container main-container\" id=\"main-container\">\r\n            <div class=\"row login-row-height\">\r\n                <div class=\"col-8 col-md-6 col-lg-5 col-xl-4 mx-auto align-self-center text-center\">\r\n                    <h1 class=\"display-0 mb-0\">404</h1>\r\n                    <h1 class=\"font-weight-light mt-0\">Page not found!</h1>\r\n                    <p>There might be some issue with Typing or URL</p>\r\n                    <br>\r\n                    <a [routerLink]=\"['/dashboard']\" class=\"btn btn-outline-light\">Go back to Dashboard</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- Main container ends -->\r\n    </div>\r\n    <footer class=\"footer\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-md text-center text-md-left align-self-center\">\r\n                    <p>All rights reserved by <a href=\"\">Maxartkiller</a></p>\r\n                </div>\r\n                <div class=\"col-12 col-md-auto text-center text-md-right\">\r\n                    <ul class=\"nav justify-content-center justify-md-content-end\">\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link active\" href=\"javascript:void(0)\">Terms of use</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" href=\"javascript:void(0)\">Privacy Policy</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" href=\"javascript:void(0)\">Contact us</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </footer>\r\n\r\n</div>\r\n<!-- wrapper ends -->"

/***/ }),

/***/ "./src/app/not-found/not-found-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/not-found/not-found-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: NotFoundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundRoutingModule", function() { return NotFoundRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found.component */ "./src/app/not-found/not-found.component.ts");




var routes = [
    {
        path: '', component: _not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
    }
];
var NotFoundRoutingModule = /** @class */ (function () {
    function NotFoundRoutingModule() {
    }
    NotFoundRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], NotFoundRoutingModule);
    return NotFoundRoutingModule;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        var marginTops = document.querySelector('.footer').clientHeight;
        document.querySelector('.content').style.marginBottom = '-' + marginTops + 'px';
        var headerhegiht = document.querySelector('.header').clientHeight;
        var loginheight = window.innerHeight - marginTops - 60 - headerhegiht;
        document.querySelector('.login-row-height').style.minHeight = loginheight + 'px';
        var dom = document.querySelector('body');
        dom.classList.remove('sidemenu-open');
    };
    NotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.module.ts":
/*!***********************************************!*\
  !*** ./src/app/not-found/not-found.module.ts ***!
  \***********************************************/
/*! exports provided: NotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundModule", function() { return NotFoundModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _not_found_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found-routing.module */ "./src/app/not-found/not-found-routing.module.ts");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found.component */ "./src/app/not-found/not-found.component.ts");





var NotFoundModule = /** @class */ (function () {
    function NotFoundModule() {
    }
    NotFoundModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _not_found_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotFoundRoutingModule"]
            ],
            declarations: [_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]]
        })
    ], NotFoundModule);
    return NotFoundModule;
}());



/***/ })

}]);
//# sourceMappingURL=not-found-not-found-module-es5.js.map