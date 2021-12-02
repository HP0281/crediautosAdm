(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nuevo-nuevo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/components/modules/usuario/nuevo/nuevo.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/components/modules/usuario/nuevo/nuevo.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-6\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header\">\r\n            <h3>Usuario</h3>\r\n\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <form action=\"\" #f=\"ngForm\" novalidate>\r\n                <div>\r\n                    <label for=\"\">Selecciona un rol de usuario</label>\r\n                    <div class=\"center-loader\" *ngIf=\"loader\">\r\n                        <strong>Cargando roles\r\n                            <span class=\"loader__dot\">.</span>\r\n                            <span class=\"loader__dot\">.</span>\r\n                            <span class=\"loader__dot\">.</span></strong>\r\n                    </div>\r\n\r\n                    <select *ngIf=\"!loader\" class=\"form-control\"  (change)=\"capturar()\">\r\n                        <option value=\"0\">Selecciona un Rol</option>\r\n                        <option  style=\"margin-block: 10px\">\r\n                            asd\r\n                        </option>\r\n                    </select>\r\n                    <div *ngIf=\"empresa; then thenBlock else elseBlock\">\r\n\r\n                    </div>\r\n                    <ng-template ></ng-template>\r\n                    <ng-template >\r\n                        <label for=\"\">Selecciona una empresa de usuario</label>\r\n                        <select class=\"form-control\" name=\"empresaSeleccionada\" (change)=\"capturarEmpresa()\">\r\n\r\n                            <option  style=\"margin-block: 10px\">\r\n                                asd\r\n                            </option>\r\n                        </select>\r\n                    </ng-template>\r\n\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"\">Nombre</label>\r\n                    <input type=\"text\" class=\"form-control\" (input)=\"validadorNombre($event)\"  name=\"nombre\" required>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"\">email</label>\r\n                    <input type=\"email\" class=\"form-control\"  name=\"email\" required>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"\">Contraseña</label>\r\n                    <input type=\"password\" class=\"form-control\" name=\"password\" required>\r\n                </div>\r\n\r\n                <button class=\"btn btn-danger\" [disabled]=\"!f.valid\">Guardar</button>\r\n\r\n            </form>\r\n            <div *ngIf=\"failCreado\" class=\"float-left\">\r\n                <p class=\"p-3 bg-danger text-white rounded\" style=\"margin: 10px\">Error: {{msjErr}}</p>\r\n            </div>\r\n            <div *ngIf=\"creado\" class=\"float-left\">\r\n                <p class=\"p-3 bg-success text-white rounded\" style=\"margin: 10px\">OK: {{msjOK}}</p>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/components/modules/usuario/nuevo/nuevo-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/components/modules/usuario/nuevo/nuevo-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: NuevoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoRoutingModule", function() { return NuevoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nuevo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nuevo.component */ "./src/app/layout/components/modules/usuario/nuevo/nuevo.component.ts");




const routes = [
    { path: '', component: _nuevo_component__WEBPACK_IMPORTED_MODULE_3__["NuevoComponent"] }
];
let NuevoRoutingModule = class NuevoRoutingModule {
};
NuevoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], NuevoRoutingModule);



/***/ }),

/***/ "./src/app/layout/components/modules/usuario/nuevo/nuevo.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/components/modules/usuario/nuevo/nuevo.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center-loader {\r\n    font-size: large;\r\n    position: absolute;\r\n    z-index: 1000;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n    50% {\r\n        color: transparent\r\n    }\r\n}\r\n\r\n@keyframes blink {\r\n    50% {\r\n        color: transparent\r\n    }\r\n}\r\n\r\n.loader__dot {\r\n    -webkit-animation: 1s blink infinite;\r\n            animation: 1s blink infinite;\r\n    font-size: x-large;\r\n}\r\n\r\n.loader__dot:nth-child(2) {\r\n    -webkit-animation-delay: 250ms;\r\n            animation-delay: 250ms;\r\n    font-size: x-large;\r\n}\r\n\r\n.loader__dot:nth-child(3) {\r\n    -webkit-animation-delay: 500ms;\r\n            animation-delay: 500ms;\r\n    font-size: x-large;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvbW9kdWxlcy91c3VhcmlvL251ZXZvL251ZXZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixRQUFRO0lBQ1IsU0FBUztJQUVULHdDQUFnQztZQUFoQyxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSTtRQUNJO0lBQ0o7QUFDSjs7QUFKQTtJQUNJO1FBQ0k7SUFDSjtBQUNKOztBQUVBO0lBQ0ksb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvbW9kdWxlcy91c3VhcmlvL251ZXZvL251ZXZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyLWxvYWRlciB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmxpbmsge1xyXG4gICAgNTAlIHtcclxuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnRcclxuICAgIH1cclxufVxyXG5cclxuLmxvYWRlcl9fZG90IHtcclxuICAgIGFuaW1hdGlvbjogMXMgYmxpbmsgaW5maW5pdGU7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbn1cclxuXHJcbi5sb2FkZXJfX2RvdDpudGgtY2hpbGQoMikge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAyNTBtcztcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5cclxuLmxvYWRlcl9fZG90Om50aC1jaGlsZCgzKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDUwMG1zO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/layout/components/modules/usuario/nuevo/nuevo.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/components/modules/usuario/nuevo/nuevo.component.ts ***!
  \****************************************************************************/
/*! exports provided: NuevoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoComponent", function() { return NuevoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let NuevoComponent = class NuevoComponent {
    constructor(router) {
        this.router = router;
        this.opcionSeleccionado = '0';
        this.empresaSeleccionada = '0';
        this.verSeleccion = '';
        this.empresa = false;
        this.loader = true;
        this.msjErr = '';
        this.msjOK = '';
        this.creado = false;
        this.failCreado = false;
    }
    ngOnInit() {
        this.cargarRoles();
        this.cargarEmpresas();
    }
    cargarEmpresas() {
    }
    cargarRoles() {
    }
    esEmailValido(email) {
        let mailValido = false;
        'use strict';
        var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(EMAIL_REGEX)) {
            mailValido = true;
        }
        return mailValido;
    }
    capturar() {
        this.verSeleccion = this.opcionSeleccionado;
        if (this.opcionSeleccionado == "EMPRESA") {
            this.empresa = true;
        }
        else
            this.empresa = false;
    }
    capturarEmpresa() {
    }
    guardarUsuario() {
    }
    validadorNombre(event) {
        const pattern = /^[a-zA-Z ]*$/;
        //let inputChar = String.fromCharCode(event.charCode)
        if (!pattern.test(event.target.value)) {
            event.target.value = event.target.value.replace(/[^a-zA-Z ]/g, "");
            this.failCreado = true;
            this.msjErr = "solo se permiten letras en el nombre";
            // invalid character, prevent input
        }
        else {
            this.failCreado = false;
        }
    }
    getEmpresa() {
    }
    guardarCaja() {
    }
    getidSesion() {
    }
    getIdRol() {
    }
};
NuevoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NuevoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nuevo',
        template: __webpack_require__(/*! raw-loader!./nuevo.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/components/modules/usuario/nuevo/nuevo.component.html"),
        styles: [__webpack_require__(/*! ./nuevo.component.css */ "./src/app/layout/components/modules/usuario/nuevo/nuevo.component.css")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], NuevoComponent);



/***/ }),

/***/ "./src/app/layout/components/modules/usuario/nuevo/nuevo.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/components/modules/usuario/nuevo/nuevo.module.ts ***!
  \*************************************************************************/
/*! exports provided: NuevoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoModule", function() { return NuevoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _nuevo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nuevo.component */ "./src/app/layout/components/modules/usuario/nuevo/nuevo.component.ts");
/* harmony import */ var _nuevo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nuevo-routing.module */ "./src/app/layout/components/modules/usuario/nuevo/nuevo-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







let NuevoModule = class NuevoModule {
};
NuevoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_nuevo_component__WEBPACK_IMPORTED_MODULE_4__["NuevoComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _nuevo_routing_module__WEBPACK_IMPORTED_MODULE_5__["NuevoRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ]
    })
], NuevoModule);



/***/ })

}]);
//# sourceMappingURL=nuevo-nuevo-module-es2015.js.map