(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["promociones-promociones-promociones-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/components/modules/productos/promociones/promociones/promociones.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/components/modules/productos/promociones/promociones/promociones.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center-loader\" *ngIf=\"loader\">\r\n    <strong>Cargando\r\n        <span class=\"loader__dot\">.</span>\r\n        <span class=\"loader__dot\">.</span>\r\n        <span class=\"loader__dot\">.</span></strong>\r\n</div>\r\n\r\n<div class=\"container table-responsive\" *ngIf=\"!loader\">\r\n    <button style=\"margin-bottom: 10px; margin-left: 0px;\" class=\"btn btn-warning text-white\" (click)=\"ngOnInit()\">\r\n        <i class=\"material-icons text-white\">restore_page\r\n        </i> Refrescar Tabla\r\n    </button>\r\n\r\n    <div class=\"card min\">\r\n        <div class=\"card-header\">\r\n            <h3>LISTADO DE PRODUCTOS</h3>\r\n\r\n        </div>\r\n        <input class=\"form-control\" type=\"text\" name=\"filterProducto\" placeholder=\"buscar producto\">\r\n        <div class=\"card-body\">\r\n            <table class=\"table table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Nombre</th>\r\n                        <th>Descripcion</th>\r\n                        <th>Producto</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let promocion of promociones\" class=\"text-center\">\r\n                        <td>{{promocion.nombrePromocion}}</td>\r\n                        <td>{{promocion.descripcion}}</td>\r\n                        <td>{{promocion.producto.nombreProducto}}</td>\r\n                        <td>\r\n                            <button (click)=\"modificarPromocion(promocion,ModalModificar)\" style=\"margin: 10px\" class=\"btn btn-primary\">Modificar</button>\r\n\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n        </div>\r\n        <!-- <div *ngIf=\"failEliminado\" class=\"float-left\">\r\n            <p class=\"p-3 bg-danger text-white rounded\">Error: {{msjErr}}</p>\r\n        </div>\r\n        <div *ngIf=\"eliminado\" class=\"float-left\">\r\n            <p class=\"p-3 bg-success text-white rounded\">OK: {{msjOK}}</p>\r\n        </div>\r\n        <div *ngIf=\"failActualizado\" class=\"float-left\">\r\n            <p class=\"p-3 bg-danger text-white rounded\" style=\"margin: 10px\">Error: {{msjErr}}</p>\r\n        </div>\r\n        <div *ngIf=\"actualizado\" class=\"float-left\">\r\n            <p class=\"p-3 bg-success text-white rounded\" style=\"margin: 10px\">OK: {{msjOK}}</p>\r\n        </div>-->\r\n    </div>\r\n</div>\r\n\r\n<ng-template #ModalModificar>\r\n    <div class=\"container col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <h3>Promociones</h3>\r\n\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <form action=\"\" #f=\"ngForm\" novalidate>\r\n                    <div>\r\n                    </div>\r\n                    <div class=\"form-group \">\r\n                        <label for=\" \">Nombre Promocion</label>\r\n                        <input type=\"text \" class=\"form-control \" [(ngModel)]=\"promocion.nombrePromocion \" name=\"nombre \" required>\r\n                    </div>\r\n                    <div class=\"form-group \">\r\n                        <label for=\" \">Descripcion</label>\r\n                        <input type=\"text \" class=\"form-control \" [(ngModel)]=\"promocion.descripcion \" name=\"descripcion \" required>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"center-loader\" *ngIf=\"loader\">\r\n                        <strong>Cargando productos\r\n                            <span class=\"loader__dot\">.</span>\r\n                            <span class=\"loader__dot\">.</span>\r\n                            <span class=\"loader__dot\">.</span></strong>\r\n                    </div>\r\n                    <br>\r\n                    <select *ngIf=\"!loader\" class=\"form-control\" name=\"empresaSeleccionada\" [(ngModel)]=\"productoSeleccionado\" (change)=\"capturarProducto()\">\r\n                        <option value=\"0\">Selecciona un producto</option>\r\n                        <option *ngFor=\"let producto of productos\" style=\"margin-block: 10px\">\r\n                            {{producto.nombreProducto}}\r\n                        </option>\r\n                    </select>\r\n                    <h5>imagen por defecto</h5>\r\n                    <input type=\"checkbox\" [(ngModel)]=\"imgDefecto\" (change)=\"checkBoxDefecto() \" name=\"imgDefecto \" />\r\n                    <div class=\"form-group \">\r\n                        <!-- <br>\r\n                  <input type=\"file \" class=\"btn btn-dark \" (change)=\"onFileChanged($event) \">-->\r\n                        <hr>\r\n                        <div *ngIf=\"!imageCargada; else elseBlock3 \">\r\n                            <button *ngIf=\"isButtonImage \" class=\"btn btn-success \" (click)=\"seleccionarImagen(cargarImagen) \">Seleccionar imagen</button>\r\n                        </div>\r\n                        <ng-template #elseBlock3>\r\n                            <div class=\"card-img-top \">\r\n                                <div class=\"background \" *ngIf=\"imageCargada.retrievedImages \">\r\n                                    <img [src]=\"imageCargada.retrievedImages \">\r\n\r\n                                </div>\r\n                            </div>\r\n                            <br>\r\n                            <button class=\"btn btn-success \" (click)=\"seleccionarImagen(cargarImagen) \">Cambiar imagen</button>\r\n                        </ng-template>\r\n                        <hr>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group \">\r\n                        <div class=\"form-group \">\r\n                            <div class=\"col-md-12 \">\r\n                                <div *ngIf=message>{{message}}</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"container row \">\r\n                        <div class=\"col-md-12 \">\r\n                            <div *ngIf=retrievedImage>\r\n                                <img [src]=\"retrievedImage \">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <button class=\"btn btn-danger \" (click)=\"guardarPromocion() \" [disabled]=\"!f.valid \">Guardar</button>\r\n\r\n                </form>\r\n                <div *ngIf=\"failCreado \" class=\"float-left \">\r\n                    <p class=\"p-3 bg-danger text-white rounded \" style=\"margin: 10px \">Error: {{msjErr}}</p>\r\n                </div>\r\n                <div *ngIf=\"creado \" class=\"float-left \">\r\n                    <p class=\"p-3 bg-success text-white rounded \" style=\"margin: 10px \">OK: {{msjOK}}</p>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <ng-template #cargarImagen>\r\n        <div class=\"card-body \">\r\n            <h3>Selecciona una imagen de la galeria</h3>\r\n            <div class=\"center-loader \" *ngIf=\"loader; else elseBlock \">\r\n                <strong>Cargando imagenes\r\n                  <span class=\"loader__dot \">.</span>\r\n                  <span class=\"loader__dot \">.</span>\r\n                  <span class=\"loader__dot \">.</span></strong>\r\n            </div>\r\n            <ng-template #elseBlock>\r\n                <div class=\"row \">\r\n                    <div class=\"col-6 \" *ngFor=\"let image of images \">\r\n                        <div class=\"card text-center shadow-sm border-0 mb-4 \">\r\n                            <div class=\"offer bg-warning text-white right \">Imagenes de usuario</div>\r\n                            <div class=\"card-img-top \">\r\n                                <div class=\"background \" *ngIf=\"image.retrievedImages \">\r\n                                    <img [src]=\"image.retrievedImages \">\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"card-body \">\r\n                                <h6 class=\"template-primary \">Nombre imagen: {{image.name}}</h6>\r\n                                <div class=\"row my-3 \">\r\n                                    <div class=\"col text-left \">\r\n                                        <h5 class=\"font-weight-light mb-0 \"> </h5>\r\n                                    </div>\r\n\r\n                                </div>\r\n\r\n                                <div class=\"row my-3 \">\r\n                                    <div class=\"col text-left \">\r\n                                        <h5><button type=\"button \" (click)=\"selecionImagen(image) \" class=\"btn btn-success float-right \" style=\"margin-left: 10px; \">Seleccionar</button></h5>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n        </div>\r\n    </ng-template>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/layout/components/modules/productos/promociones/promociones/promociones-routing.module.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/components/modules/productos/promociones/promociones/promociones-routing.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PromocionesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromocionesRoutingModule", function() { return PromocionesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _promociones_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./promociones.component */ "./src/app/layout/components/modules/productos/promociones/promociones/promociones.component.ts");




const routes = [
    { path: '', component: _promociones_component__WEBPACK_IMPORTED_MODULE_3__["PromocionesComponent"] }
];
let PromocionesRoutingModule = class PromocionesRoutingModule {
};
PromocionesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PromocionesRoutingModule);



/***/ }),

/***/ "./src/app/layout/components/modules/productos/promociones/promociones/promociones.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/components/modules/productos/promociones/promociones/promociones.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.center-loader {\r\n    font-size: large;\r\n    position: absolute;\r\n    z-index: 1000;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n    50% {\r\n        color: transparent\r\n    }\r\n}\r\n\r\n@keyframes blink {\r\n    50% {\r\n        color: transparent\r\n    }\r\n}\r\n\r\n.loader__dot {\r\n    -webkit-animation: 1s blink infinite;\r\n            animation: 1s blink infinite;\r\n    font-size: x-large;\r\n}\r\n\r\n.loader__dot:nth-child(2) {\r\n    -webkit-animation-delay: 250ms;\r\n            animation-delay: 250ms;\r\n    font-size: x-large;\r\n}\r\n\r\n.loader__dot:nth-child(3) {\r\n    -webkit-animation-delay: 500ms;\r\n            animation-delay: 500ms;\r\n    font-size: x-large;\r\n}\r\n\r\n.min {\r\n    min-width: -webkit-min-content;\r\n    min-width: -moz-min-content;\r\n    min-width: min-content;\r\n}\r\n\r\n.modal-backdrop {\r\n    background-color: #0000ff;\r\n}\r\n\r\n.modal-white .modal-backdrop {\r\n    background-color: #d8d8d8;\r\n}\r\n\r\n.centrado {\r\n    text-align: center;\r\n    position: relative;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvbW9kdWxlcy9wcm9kdWN0b3MvcHJvbW9jaW9uZXMvcHJvbW9jaW9uZXMvcHJvbW9jaW9uZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixRQUFRO0lBQ1IsU0FBUztJQUVULHdDQUFnQztZQUFoQyxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSTtRQUNJO0lBQ0o7QUFDSjs7QUFKQTtJQUNJO1FBQ0k7SUFDSjtBQUNKOztBQUVBO0lBQ0ksb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksOEJBQXNCO0lBQXRCLDJCQUFzQjtJQUF0QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFFUixtQ0FBbUM7SUFDbkMsMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvbW9kdWxlcy9wcm9kdWN0b3MvcHJvbW9jaW9uZXMvcHJvbW9jaW9uZXMvcHJvbW9jaW9uZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNlbnRlci1sb2FkZXIge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcclxuICAgIDUwJSB7XHJcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sb2FkZXJfX2RvdCB7XHJcbiAgICBhbmltYXRpb246IDFzIGJsaW5rIGluZmluaXRlO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG4ubG9hZGVyX19kb3Q6bnRoLWNoaWxkKDIpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMjUwbXM7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbn1cclxuXHJcbi5sb2FkZXJfX2RvdDpudGgtY2hpbGQoMykge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiA1MDBtcztcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5cclxuLm1pbiB7XHJcbiAgICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xyXG59XHJcblxyXG4ubW9kYWwtYmFja2Ryb3Age1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDBmZjtcclxufVxyXG5cclxuLm1vZGFsLXdoaXRlIC5tb2RhbC1iYWNrZHJvcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkOGQ4O1xyXG59XHJcblxyXG4uY2VudHJhZG8ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/components/modules/productos/promociones/promociones/promociones.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/layout/components/modules/productos/promociones/promociones/promociones.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: PromocionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromocionesComponent", function() { return PromocionesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PromocionesComponent = class PromocionesComponent {
    constructor() {
        this.loader = true;
        this.imgDefecto = false;
        this.isButtonImage = true;
        this.failCreado = false;
        this.creado = false;
        this.msjErr = "";
        this.msjOK = "";
        this.idImagen = 1;
    }
    ngOnInit() {
    }
    checkBoxDefecto() {
        //this.imgDefecto=!this.imgDefecto;
        console.log("cambio de checkbox");
        console.log(this.imgDefecto);
        this.isButtonImage = !this.isButtonImage;
    }
    capturarProducto() {
    }
    modificarPromocion(promocion, modal) {
    }
    seleccionarImagen(modal) {
    }
    guardarPromocion() {
    }
    cargarImagenes() {
    }
    selecionImagen(imagen) {
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ModalModificar', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], PromocionesComponent.prototype, "ModalModificar", void 0);
PromocionesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-promociones',
        template: __webpack_require__(/*! raw-loader!./promociones.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/components/modules/productos/promociones/promociones/promociones.component.html"),
        styles: [__webpack_require__(/*! ./promociones.component.css */ "./src/app/layout/components/modules/productos/promociones/promociones/promociones.component.css")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PromocionesComponent);



/***/ }),

/***/ "./src/app/layout/components/modules/productos/promociones/promociones/promociones.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/layout/components/modules/productos/promociones/promociones/promociones.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: PromocionesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromocionesModule", function() { return PromocionesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _promociones_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./promociones.component */ "./src/app/layout/components/modules/productos/promociones/promociones/promociones.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _promociones_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./promociones-routing.module */ "./src/app/layout/components/modules/productos/promociones/promociones/promociones-routing.module.ts");








let PromocionesModule = class PromocionesModule {
};
PromocionesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_promociones_component__WEBPACK_IMPORTED_MODULE_3__["PromocionesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _promociones_routing_module__WEBPACK_IMPORTED_MODULE_7__["PromocionesRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ]
    })
], PromocionesModule);



/***/ })

}]);
//# sourceMappingURL=promociones-promociones-promociones-module-es2015.js.map