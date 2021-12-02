(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["galeria-productos-galeria-productos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/components/modules/productos/galeria-productos/galeria-productos.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/components/modules/productos/galeria-productos/galeria-productos.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card border-0 shadow-sm mb-4\">\r\n    <div class=\"card-body\">\r\n        <div class=\"row \">\r\n            <div class=\"col-lg-12 col-md-12 text-center\">\r\n\r\n                <h1 class=\"my-4\">\r\n                    <font style=\"vertical-align: inherit;\">Recuerde que las imagenes mas optimas son de tamaños de 1024x1024 pixeles</font>\r\n\r\n                </h1>\r\n                <h2 class=\"my-4\">\r\n\r\n\r\n\r\n                    <font style=\"vertical-align: inherit;\">Selecciona imagen (Tamaño maximo 5mb)</font>\r\n\r\n                </h2>\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"row \">\r\n            <div class=\"col-lg-12 col-md-12\">\r\n                <div class=\"form-group \">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row \">\r\n            <div class=\"col-lg-12 col-md-12\">\r\n                <div class=\"form-group \">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row \">\r\n        </div>\r\n        <div class=\"container row\">\r\n\r\n        </div>\r\n\r\n        <div class=\"center-loader\" *ngIf=\"loader; else elseBlock\">\r\n            <strong>Cargando imagen\r\n                    <span class=\"loader__dot\">.</span>\r\n                    <span class=\"loader__dot\">.</span>\r\n                    <span class=\"loader__dot\">.</span></strong>\r\n        </div>\r\n        <ng-template #elseBlock>\r\n            <div class=\"container row\">\r\n                <div class=\"col-md-6\">\r\n                    <input type=\"file\" (change)=\"onFileChanged($event)\" placeholder=\"imagen\">\r\n                </div>\r\n                <div class=\"col-md-6\" *ngIf=\"selectedFile\">\r\n                    <input type=\"button\" (click)=\"cagarImagen()\" value=\"Cargar\">\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n\r\n        <hr />\r\n        <div class=\"container row\">\r\n            <div class=\"col-md-12\">\r\n                <div *ngIf=message>{{message}}</div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n    <!-- <div class=\"container row\" *ngFor=\"let image of images\">\r\n        <div class=\"col-md-12\">\r\n            <div *ngIf=\"image.retrievedImages\">\r\n                <img [src]=\"image.retrievedImages\">\r\n            </div>\r\n        </div>\r\n    </div>-->\r\n    <div class=\"row\">\r\n        <div class=\"col-12 col-md-6 col-lg-4 col-xl-3 \" *ngFor=\"let image of images\">\r\n            <div class=\"card text-center shadow-sm border-0 mb-4\">\r\n                <div class=\"offer bg-warning text-white right\">Imagenes de usuario</div>\r\n                <div class=\"card-img-top\">\r\n                    <div class=\"background\" *ngIf=\"image.retrievedImages\">\r\n                        <img [src]=\"image.retrievedImages\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row my-3\">\r\n                    <div class=\"col text-left\">\r\n                        <!--<h5><button type=\"button\" (click)=\"ordenarProducto(producto,confirmarModal)\" class=\"btn btn-outline-light float-right\" style=\"margin-left: 10px;\">Borrar</button></h5>-->\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/layout/components/modules/productos/galeria-productos/galeria-productos-routing.module.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/components/modules/productos/galeria-productos/galeria-productos-routing.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: GaleriaProductosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriaProductosRoutingModule", function() { return GaleriaProductosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _galeria_productos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./galeria-productos.component */ "./src/app/layout/components/modules/productos/galeria-productos/galeria-productos.component.ts");




var routes = [
    { path: '', component: _galeria_productos_component__WEBPACK_IMPORTED_MODULE_3__["GaleriaProductosComponent"] }
];
var GaleriaProductosRoutingModule = /** @class */ (function () {
    function GaleriaProductosRoutingModule() {
    }
    GaleriaProductosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GaleriaProductosRoutingModule);
    return GaleriaProductosRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/components/modules/productos/galeria-productos/galeria-productos.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/components/modules/productos/galeria-productos/galeria-productos.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL21vZHVsZXMvcHJvZHVjdG9zL2dhbGVyaWEtcHJvZHVjdG9zL2dhbGVyaWEtcHJvZHVjdG9zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/components/modules/productos/galeria-productos/galeria-productos.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/layout/components/modules/productos/galeria-productos/galeria-productos.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: GaleriaProductosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriaProductosComponent", function() { return GaleriaProductosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var GaleriaProductosComponent = /** @class */ (function () {
    function GaleriaProductosComponent() {
        this.retrievedImages = [];
        this.loader = false;
    }
    GaleriaProductosComponent.prototype.ngOnInit = function () {
        this.cargarImagenes();
    };
    GaleriaProductosComponent.prototype.onFileChanged = function (event) {
        //Select File
        console.log("ingreso a seleccion file");
        console.log("loq ue conteien selectefile");
        console.log(this.selectedFile);
        this.selectedFile = event.target.files[0];
        console.log("despues de seleccionar");
        console.log(this.selectedFile);
    };
    GaleriaProductosComponent.prototype.cagarImagen = function () {
        this.loader = true;
        var uploadImageData = new FormData();
        uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
        //this.image.picByte = uploadImageData;
    };
    GaleriaProductosComponent.prototype.getImage = function () {
    };
    GaleriaProductosComponent.prototype.cargarImagenes = function () {
    };
    GaleriaProductosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-galeria-productos',
            template: __webpack_require__(/*! raw-loader!./galeria-productos.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/components/modules/productos/galeria-productos/galeria-productos.component.html"),
            styles: [__webpack_require__(/*! ./galeria-productos.component.css */ "./src/app/layout/components/modules/productos/galeria-productos/galeria-productos.component.css")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], GaleriaProductosComponent);
    return GaleriaProductosComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/modules/productos/galeria-productos/galeria-productos.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/layout/components/modules/productos/galeria-productos/galeria-productos.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: GaleriaProductosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriaProductosModule", function() { return GaleriaProductosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _galeria_productos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./galeria-productos.component */ "./src/app/layout/components/modules/productos/galeria-productos/galeria-productos.component.ts");
/* harmony import */ var _galeria_productos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./galeria-productos-routing.module */ "./src/app/layout/components/modules/productos/galeria-productos/galeria-productos-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








var GaleriaProductosModule = /** @class */ (function () {
    function GaleriaProductosModule() {
    }
    GaleriaProductosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_galeria_productos_component__WEBPACK_IMPORTED_MODULE_4__["GaleriaProductosComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                _galeria_productos_routing_module__WEBPACK_IMPORTED_MODULE_5__["GaleriaProductosRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ]
        })
    ], GaleriaProductosModule);
    return GaleriaProductosModule;
}());



/***/ })

}]);
//# sourceMappingURL=galeria-productos-galeria-productos-module-es5.js.map