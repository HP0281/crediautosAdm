(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-client-list-client-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/components/modules/clientes/list-client/list-client.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/components/modules/clientes/list-client/list-client.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container table-responsive\" >\n    <button style=\"margin-bottom: 10px; margin-left: 0px;\" class=\"btn btn-warning text-white\">\n        <i class=\"material-icons text-white\">restore_page\n        </i> Refrescar Tabla\n    </button>\n\n    <div class=\"card min\">\n        <div class=\"card-header\">\n            <h3>LISTADO DE CLIENTES</h3>\n\n        </div>\n        <input class=\"form-control\" type=\"text\" name=\"filterProducto\" placeholder=\"Buscar Cliente\">\n        <div class=\"card-body\">\n            <table class=\"table table-hover\">\n                <thead>\n                    <tr class=\"text-center\">\n                        <th>Nombre</th>\n                        <th>cedula</th>\n                        <th>telefono</th>\n                        <th>vehiculos</th>\n                        <th>Placa</th>\n                        <th>fecha soat</th>\n                        <th>fecha tecnomecanica</th>\n                        <th>accion</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr class=\"text-center\">\n                        <td>vehicled</td>\n                        <td>vehiclearca</td>\n                        <td>vehicleodelo</td>\n                        <td><a class=\"btn \"><i class=\"material-icons\">visibility</i></a></td>\n                        <td>vehiclelaca</td>\n                        <td>dsad</td>\n                        <td>sds</td>\n                        <td>\n                            <a class=\"btn \"><i class=\"material-icons\">\n                                edit</i></a>\n                            <a class=\"btn \"><i class=\"material-icons\">person_add</i></a>\n                            <a class=\"btn \"><i class=\"material-icons\">delete</i></a>\n\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <!-- <div *ngIf=\"failEliminado\" class=\"float-left\">\n            <p class=\"p-3 bg-danger text-white rounded\">Error: msjErr</p>\n        </div>\n        <div *ngIf=\"eliminado\" class=\"float-left\">\n            <p class=\"p-3 bg-success text-white rounded\">OK: msjOK</p>\n        </div>\n        <div *ngIf=\"failActualizado\" class=\"float-left\">\n            <p class=\"p-3 bg-danger text-white rounded\" style=\"margin: 10px\">Error: msjErr</p>\n        </div>\n        <div *ngIf=\"actualizado\" class=\"float-left\">\n            <p class=\"p-3 bg-success text-white rounded\" style=\"margin: 10px\">OK: msjOK</p>\n        </div>-->\n    </div>\n    \n</div>"

/***/ }),

/***/ "./src/app/layout/components/modules/clientes/list-client/list-client-routing.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/components/modules/clientes/list-client/list-client-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: ListClientRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListClientRoutingModule", function() { return ListClientRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_client_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-client.component */ "./src/app/layout/components/modules/clientes/list-client/list-client.component.ts");




const routes = [
    { path: '', component: _list_client_component__WEBPACK_IMPORTED_MODULE_3__["ListClientComponent"] }
];
let ListClientRoutingModule = class ListClientRoutingModule {
};
ListClientRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ListClientRoutingModule);



/***/ }),

/***/ "./src/app/layout/components/modules/clientes/list-client/list-client.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/components/modules/clientes/list-client/list-client.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.center-loader {\r\n    font-size: large;\r\n    position: absolute;\r\n    z-index: 1000;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n    50% {\r\n        color: transparent\r\n    }\r\n}\r\n\r\n@keyframes blink {\r\n    50% {\r\n        color: transparent\r\n    }\r\n}\r\n\r\n.loader__dot {\r\n    -webkit-animation: 1s blink infinite;\r\n            animation: 1s blink infinite;\r\n    font-size: x-large;\r\n}\r\n\r\n.loader__dot:nth-child(2) {\r\n    -webkit-animation-delay: 250ms;\r\n            animation-delay: 250ms;\r\n    font-size: x-large;\r\n}\r\n\r\n.loader__dot:nth-child(3) {\r\n    -webkit-animation-delay: 500ms;\r\n            animation-delay: 500ms;\r\n    font-size: x-large;\r\n}\r\n\r\n.min { \r\n    min-width: -webkit-min-content; \r\n    min-width: -moz-min-content; \r\n    min-width: min-content;\r\n}\r\n\r\n.modal-backdrop {\r\n    background-color: #0000ff;\r\n}\r\n\r\n.modal-white .modal-backdrop {\r\n    background-color: #d8d8d8;\r\n}\r\n\r\n.centrado {\r\n    text-align: center;\r\n    position: relative;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n}\r\n\r\n.material-icons {\r\n    color: #e51e1d;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvbW9kdWxlcy9jbGllbnRlcy9saXN0LWNsaWVudC9saXN0LWNsaWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFFBQVE7SUFDUixTQUFTO0lBRVQsd0NBQWdDO1lBQWhDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJO1FBQ0k7SUFDSjtBQUNKOztBQUpBO0lBQ0k7UUFDSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw4QkFBc0I7SUFBdEIsMkJBQXNCO0lBQXRCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsUUFBUTtJQUVSLG1DQUFtQztJQUNuQywyQkFBMkI7QUFDL0I7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvbW9kdWxlcy9jbGllbnRlcy9saXN0LWNsaWVudC9saXN0LWNsaWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jZW50ZXItbG9hZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBibGluayB7XHJcbiAgICA1MCUge1xyXG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudFxyXG4gICAgfVxyXG59XHJcblxyXG4ubG9hZGVyX19kb3Qge1xyXG4gICAgYW5pbWF0aW9uOiAxcyBibGluayBpbmZpbml0ZTtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5cclxuLmxvYWRlcl9fZG90Om50aC1jaGlsZCgyKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDI1MG1zO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG4ubG9hZGVyX19kb3Q6bnRoLWNoaWxkKDMpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogNTAwbXM7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbn1cclxuXHJcbi5taW4geyBcclxuICAgIG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5tb2RhbC1iYWNrZHJvcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMGZmO1xyXG59XHJcblxyXG4ubW9kYWwtd2hpdGUgLm1vZGFsLWJhY2tkcm9wIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XHJcbn1cclxuXHJcbi5jZW50cmFkbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG4ubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgY29sb3I6ICNlNTFlMWQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/components/modules/clientes/list-client/list-client.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/components/modules/clientes/list-client/list-client.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ListClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListClientComponent", function() { return ListClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ListClientComponent = class ListClientComponent {
    constructor() { }
    ngOnInit() {
    }
};
ListClientComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-client',
        template: __webpack_require__(/*! raw-loader!./list-client.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/components/modules/clientes/list-client/list-client.component.html"),
        styles: [__webpack_require__(/*! ./list-client.component.css */ "./src/app/layout/components/modules/clientes/list-client/list-client.component.css")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ListClientComponent);



/***/ }),

/***/ "./src/app/layout/components/modules/clientes/list-client/list-client.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/components/modules/clientes/list-client/list-client.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ListClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListClientModule", function() { return ListClientModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _list_client_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-client-routing.module */ "./src/app/layout/components/modules/clientes/list-client/list-client-routing.module.ts");
/* harmony import */ var _list_client_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-client.component */ "./src/app/layout/components/modules/clientes/list-client/list-client.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");









let ListClientModule = class ListClientModule {
};
ListClientModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_list_client_component__WEBPACK_IMPORTED_MODULE_4__["ListClientComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _list_client_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListClientRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"]
        ], exports: [_list_client_component__WEBPACK_IMPORTED_MODULE_4__["ListClientComponent"]]
    })
], ListClientModule);



/***/ })

}]);
//# sourceMappingURL=list-client-list-client-module-es2015.js.map