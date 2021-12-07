(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-modules-productos-productos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/components/modules/productos/productos.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/components/modules/productos/productos.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"row submenu\">\r\n        <div class=\"container-fluid\" id=\"submenu-container\">\r\n            <div class=\"row\">\r\n                <!-- Submenu section starts -->\r\n                <nav class=\"navbar col-12 \">\r\n\r\n                    <nav class={{isShow}}>\r\n                        <ul>\r\n                            <li><a class=\"btn dropdown-toggle btn-sm btn-primary\">Menu</a>\r\n                                <ul class=\"dropdown-menu\">\r\n                                    <li class=\"dropdown-item\"><a (click)=\"listar()\">\r\n                                        Listar productos\r\n                                    </a></li>\r\n                                    <li class=\"dropdown-item\"><a (click)=\"nuevoProducto()\">Ingresar Producto </a></li>\r\n                                    <li class=\"dropdown-item\"><a (click)=\"galeriaImagenes()\">\r\n                                        Galeria de Imagenes\r\n                                    </a></li>\r\n                                    <li class=\"dropdown-item\"><a (click)=\"promociones()\">\r\n                                        Promociones\r\n                                    </a></li>\r\n                                </ul>\r\n                            </li>\r\n                        </ul>\r\n                    </nav>\r\n\r\n                    <!--div class={{isShow}}>\r\n                        <button (click)=\"show()\" class=\"btn dropdown-toggle btn-sm btn-primary active\" type=\"button\">\r\n                          Tablero\r\n                      </button>\r\n                        <div class=\"dropdown-menu show\">\r\n                            <a class=\"dropdown-item\" (click)=\"listar()\">\r\n                                <font style=\"vertical-align: inherit;\">\r\n                                    <font style=\"vertical-align: inherit;\">Listar productos</font>\r\n                                </font>\r\n                            </a>\r\n                            <a class=\"dropdown-item\" (click)=\"nuevoProducto()\">\r\n                                <font style=\"vertical-align: inherit;\">\r\n                                    <font style=\"vertical-align: inherit;\">Ingresar Producto </font>\r\n                                </font>\r\n                            </a>\r\n\r\n                            <a class=\"dropdown-item\" (click)=\"galeriaImagenes()\">\r\n                                <font style=\"vertical-align: inherit;\">\r\n                                    <font style=\"vertical-align: inherit;\">Galeria de Imagenes</font>\r\n                                </font>\r\n                            </a>\r\n                        </div>\r\n                    </div-->\r\n                    <ul class=\"nav nav-pills mr-auto d-none d-sm-flex\">\r\n                        <li class=\"nav-item d-block d-sm-block d-md-none\" (click)=\"listar()\">\r\n                            <a class=\"nav-link active\">\r\n                                <font style=\"vertical-align: inherit;\">\r\n                                    <font style=\"vertical-align: inherit;\">Menu </font>\r\n                                </font>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" (click)=\"listar()\">\r\n                                <font style=\"vertical-align: inherit;\">\r\n                                    <font style=\"vertical-align: inherit;\">Listar productos</font>\r\n                                </font>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" (click)=\"nuevoProducto()\">\r\n                                <font style=\"vertical-align: inherit;\">\r\n                                    <font style=\"vertical-align: inherit;\">Ingresar Producto</font>\r\n                                </font>\r\n                            </a>\r\n\r\n                        </li>\r\n\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" (click)=\"galeriaImagenes()\">\r\n                                <font style=\"vertical-align: inherit;\">\r\n                                    <font style=\"vertical-align: inherit;\">Galeria imagenes </font>\r\n                                </font>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" (click)=\"promociones()\">\r\n                                <font style=\"vertical-align: inherit;\">\r\n                                    <font style=\"vertical-align: inherit;\">Promociones </font>\r\n                                </font>\r\n                            </a>\r\n                        </li>\r\n\r\n                    </ul>\r\n\r\n\r\n\r\n                </nav>\r\n                <!-- Submenu section ends -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<hr>\r\n<router-outlet></router-outlet>\r\n<hr>"

/***/ }),

/***/ "./src/app/layout/components/modules/productos/productos-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/components/modules/productos/productos-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosRoutingModule", function() { return ProductosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _productos_productos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../productos/productos.component */ "./src/app/layout/components/modules/productos/productos.component.ts");




var routes = [
    { path: '', component: _productos_productos_component__WEBPACK_IMPORTED_MODULE_3__["ProductosComponent"], children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            // { path: 'listar', loadChildren: () => import('./listar/listar.module').then(m => m.ListarModule)},
            { path: 'nuevo-producto', loadChildren: function () { return Promise.all(/*! import() | nuevo-producto-nuevo-producto-module */[__webpack_require__.e("default~admin-categorias-categorias-module~admin-marcas-marcas-module~admin-modelos-modelos-module~a~3a068de9"), __webpack_require__.e("default~admin-vehiculos-new-vehicles-new-vehicles-module~admin-vehiculos-vehiculos-module~nuevo-prod~5d990ed1"), __webpack_require__.e("common"), __webpack_require__.e("nuevo-producto-nuevo-producto-module")]).then(__webpack_require__.bind(null, /*! ./nuevo-producto/nuevo-producto.module */ "./src/app/layout/components/modules/productos/nuevo-producto/nuevo-producto.module.ts")).then(function (m) { return m.NuevoProductoModule; }); } },
            { path: 'listar-productos', loadChildren: function () { return Promise.all(/*! import() | listar-productos-listar-productos-module */[__webpack_require__.e("default~admin-marcas-marcas-module~admin-modelos-modelos-module~admin-vehiculos-vehiculos-module~adm~3b92aaa7"), __webpack_require__.e("common"), __webpack_require__.e("listar-productos-listar-productos-module")]).then(__webpack_require__.bind(null, /*! ./listar-productos/listar-productos.module */ "./src/app/layout/components/modules/productos/listar-productos/listar-productos.module.ts")).then(function (m) { return m.ListarProductosModule; }); } },
            { path: 'galeria-productos', loadChildren: function () { return __webpack_require__.e(/*! import() | galeria-productos-galeria-productos-module */ "galeria-productos-galeria-productos-module").then(__webpack_require__.bind(null, /*! ./galeria-productos/galeria-productos.module */ "./src/app/layout/components/modules/productos/galeria-productos/galeria-productos.module.ts")).then(function (m) { return m.GaleriaProductosModule; }); } },
            { path: 'promociones', loadChildren: function () { return __webpack_require__.e(/*! import() | promociones-promociones-promociones-module */ "promociones-promociones-promociones-module").then(__webpack_require__.bind(null, /*! ./promociones/promociones/promociones.module */ "./src/app/layout/components/modules/productos/promociones/promociones/promociones.module.ts")).then(function (m) { return m.PromocionesModule; }); } },
            { path: 'editar-producto', loadChildren: function () { return Promise.all(/*! import() | productos-nuevo-producto-nuevo-producto-module */[__webpack_require__.e("default~admin-categorias-categorias-module~admin-marcas-marcas-module~admin-modelos-modelos-module~a~3a068de9"), __webpack_require__.e("default~admin-vehiculos-new-vehicles-new-vehicles-module~admin-vehiculos-vehiculos-module~nuevo-prod~5d990ed1"), __webpack_require__.e("common"), __webpack_require__.e("nuevo-producto-nuevo-producto-module")]).then(__webpack_require__.bind(null, /*! ../productos/nuevo-producto/nuevo-producto.module */ "./src/app/layout/components/modules/productos/nuevo-producto/nuevo-producto.module.ts")).then(function (m) { return m.NuevoProductoModule; }); } },
            { path: '**', redirectTo: 'dasboard', pathMatch: 'full' }
        ]
    }
];
var ProductosRoutingModule = /** @class */ (function () {
    function ProductosRoutingModule() {
    }
    ProductosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProductosRoutingModule);
    return ProductosRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/components/modules/productos/productos.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/components/modules/productos/productos.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav a{\r\n    text-decoration:none;\r\n    font-size:14px;\r\n    z-index: 5;\r\n    vertical-align: inherit;\r\n    }\r\n          \r\nnav li{\r\n    display:inline-block;\r\n    text-align:left;\r\n    position:relative;\r\n    z-index: 5;\r\n}\r\n          \r\nnav li>ul{\r\n    display:none;\r\n    }\r\n          \r\nnav li:hover>ul{\r\n    display:block;\r\n    position:absolute;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvbW9kdWxlcy9wcm9kdWN0b3MvcHJvZHVjdG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLFVBQVU7SUFDVix1QkFBdUI7SUFDdkI7O0FBRUo7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1o7O0FBRUo7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCOztBQUVyQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL21vZHVsZXMvcHJvZHVjdG9zL3Byb2R1Y3Rvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xyXG4gICAgfVxyXG4gICAgICAgICAgXHJcbm5hdiBsaXtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA1O1xyXG59XHJcbiAgICAgICAgICBcclxubmF2IGxpPnVse1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG5cclxubmF2IGxpOmhvdmVyPnVse1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/components/modules/productos/productos.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/components/modules/productos/productos.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProductosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosComponent", function() { return ProductosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



var ProductosComponent = /** @class */ (function () {
    function ProductosComponent(router) {
        this.router = router;
        this.isDomiciliario = false;
        this.isRecepcionista = false;
        this.isAdministrador = false;
        this.isUsuarioFinal = false;
        this.isEmpresa = false;
        this.isShow = "dropdown mr-auto d-flex d-sm-none";
    }
    ProductosComponent.prototype.ngOnInit = function () {
        this.asignarPermisos();
    };
    ProductosComponent.prototype.nuevoProducto = function () {
        this.router.navigate(["productos/nuevo-producto"]);
    };
    ProductosComponent.prototype.nuevaCategoria = function () {
        this.router.navigate(["productos/categoria-producto"]);
    };
    ProductosComponent.prototype.listar = function () {
        this.router.navigate(["productos/listar-productos"]);
    };
    ProductosComponent.prototype.galeriaImagenes = function () {
        this.router.navigate(["productos/galeria-productos"]);
    };
    ProductosComponent.prototype.promociones = function () {
        this.router.navigate(["productos/promociones"]);
    };
    ProductosComponent.prototype.asignarPermisos = function () {
    };
    ProductosComponent.prototype.show = function () {
        console.log("ingreso de show");
        if (this.isShow == "dropdown mr-auto d-flex d-sm-none show") {
            this.isShow = "dropdown mr-auto d-flex d-sm-none";
        }
        else
            this.isShow = "dropdown mr-auto d-flex d-sm-none show";
    };
    ProductosComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ProductosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productos',
            template: __webpack_require__(/*! raw-loader!./productos.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/components/modules/productos/productos.component.html"),
            styles: [__webpack_require__(/*! ./productos.component.css */ "./src/app/layout/components/modules/productos/productos.component.css")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductosComponent);
    return ProductosComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/modules/productos/productos.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/components/modules/productos/productos.module.ts ***!
  \*************************************************************************/
/*! exports provided: ProductosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosModule", function() { return ProductosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _productos_productos_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../productos/productos-routing.module */ "./src/app/layout/components/modules/productos/productos-routing.module.ts");
/* harmony import */ var _productos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productos.component */ "./src/app/layout/components/modules/productos/productos.component.ts");






//import { GaleriaProductosComponent } from './galeria-productos/galeria-productos.component';
//import { CategoriaComponent } from './categoria/categoria.component';
//import { ListarProductosComponent } from './listar-productos/listar-productos.component';
//import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';
var ProductosModule = /** @class */ (function () {
    function ProductosModule() {
    }
    ProductosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_productos_component__WEBPACK_IMPORTED_MODULE_5__["ProductosComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                _productos_productos_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProductosRoutingModule"]
            ]
        })
    ], ProductosModule);
    return ProductosModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-modules-productos-productos-module-es5.js.map