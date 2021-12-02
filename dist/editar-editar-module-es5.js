(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editar-editar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/components/modules/usuario/editar/editar.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/components/modules/usuario/editar/editar.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center-loader\" *ngIf=\"loader\">\r\n    <strong>Cargando usuario\r\n        <span class=\"loader__dot\">.</span>\r\n        <span class=\"loader__dot\">.</span>\r\n        <span class=\"loader__dot\">.</span></strong>\r\n</div>\r\n<div class=\"container col-md-6\" *ngIf=\"!loader\">\r\n    <div class=\"card-header\">\r\n        <h3>Usuario</h3>\r\n\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <form action=\"\">\r\n            <label for=\"\">Selecciona un rol de usuario</label>\r\n            <select class=\"form-control\" name=\"idProductIdIngreso\" [(ngModel)]=\"opcionSeleccionado\" name=\"opcionSeleccionado\" (change)=\"capturar()\">\r\n                <option selected=\"true\">{{usuario.rol.rolNombre}}</option>\r\n                <option *ngFor=\"let rol of roles\">\r\n                    {{rol.rolNombre}}\r\n                </option>\r\n            </select>\r\n            <div *ngIf=\"empresa; then thenBlock else elseBlock\">\r\n\r\n            </div>\r\n            <ng-template #elseBlock></ng-template>\r\n            <ng-template #thenBlock>\r\n                <label for=\"\">Selecciona una empresa de usuario</label>\r\n                <select class=\"form-control\" name=\"empresaSeleccionada\" [(ngModel)]=\"empresaSeleccionada\" name=\"empresaSeleccionada\" (change)=\"capturarEmpresa()\">\r\n\r\n                    <option *ngFor=\"let empresa of empresas\" style=\"margin-block: 10px\">\r\n                        {{empresa.razonSocial}}\r\n                    </option>\r\n                </select>\r\n            </ng-template>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"\">nombre</label>\r\n                <input type=\"text\" class=\"form-control\" (input)=\"validadorNombre($event)\" [(ngModel)]=\"usuario.nombreUsuario\" name=\"nombre\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"\">email</label>\r\n                <input type=\"email\" class=\"form-control\" [(ngModel)]=\"usuario.email\" name=\"email\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" style=\"width: 100%;\" (click)=\"consignar(changePasswordModal)\">\r\n                    Cambiar la contraseña</button>\r\n            </div>\r\n            <button class=\"btn btn-primary float-left mr-3\" style=\"width: 30%;\" (click)=\"volver()\">Volver</button>\r\n            <button (click)=\"actualizarUsuario(usuario)\" style=\"width: 64%;\" class=\"btn btn-danger\">Actualizar</button>\r\n\r\n\r\n\r\n\r\n        </form>\r\n        <div *ngIf=\"failActualizado\" style=\" width: 100%;\" class=\"float-left\">\r\n            <p class=\"p-3 bg-danger text-center text-white rounded\" style=\"margin-top: 10px\">Error: {{msjErr}}</p>\r\n        </div>\r\n        <div *ngIf=\"actualizado\" style=\" width: 100%;\" class=\"float-left\">\r\n            <p class=\"p-3 bg-info text-center text-white rounded\" style=\"margin-top: 10px\">OK: {{msjOK}}</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n<ng-template #changePasswordModal>\r\n    <div class=\"card-body\">\r\n        <h3>Cambiar password </h3>\r\n        <div class=\"card mb-2 overflow-hidden\">\r\n            <div class=\"card-body p-0\">\r\n                <label class=\"sr-only\">ingresar password</label>\r\n                <input *ngIf=\"!isAdministrador\" type=\"number\" class=\"form-control rounded-0 border-0 text-center\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"ingresar password\" required=\"\">\r\n                <label class=\"sr-only\">ingresar nueva password</label>\r\n                <input type=\"text\" class=\"form-control rounded-0 border-0 text-center\" [(ngModel)]=\"passwordNueva\" name=\"passwordNueva\" placeholder=\"password Nueva\" required=\"\">\r\n                <label class=\"sr-only\">confirmar nueva password</label>\r\n                <input type=\"text\" class=\"form-control rounded-0 border-0 text-center\" [(ngModel)]=\"confirmacionPassword\" name=\"confirmacionPassword\" placeholder=\"confirmar password\" required=\"\">\r\n            </div>\r\n        </div>\r\n        <div class=\"\">\r\n            <a class=\" btn btn-primary btn-block\" (click)=\"confirmarPassw()\">Confirmar <i class=\"material-icons md-18\">arrow_forward</i></a>\r\n        </div>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/layout/components/modules/usuario/editar/editar-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/components/modules/usuario/editar/editar-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: EditarRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarRoutingModule", function() { return EditarRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _editar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editar.component */ "./src/app/layout/components/modules/usuario/editar/editar.component.ts");




var routes = [
    { path: '', component: _editar_component__WEBPACK_IMPORTED_MODULE_3__["EditarComponent"] }
    // { path: 'listar', loadChildren: () => import('./listar/listar.module').then(m => m.ListarModule)},
];
var EditarRoutingModule = /** @class */ (function () {
    function EditarRoutingModule() {
    }
    EditarRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EditarRoutingModule);
    return EditarRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/components/modules/usuario/editar/editar.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/components/modules/usuario/editar/editar.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center-loader {\r\n    font-size: large;\r\n    position: absolute;\r\n    z-index: 1000;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n    50% {\r\n        color: transparent\r\n    }\r\n}\r\n\r\n@keyframes blink {\r\n    50% {\r\n        color: transparent\r\n    }\r\n}\r\n\r\n.loader__dot {\r\n    -webkit-animation: 1s blink infinite;\r\n            animation: 1s blink infinite;\r\n    font-size: x-large;\r\n}\r\n\r\n.loader__dot:nth-child(2) {\r\n    -webkit-animation-delay: 250ms;\r\n            animation-delay: 250ms;\r\n    font-size: x-large;\r\n}\r\n\r\n.loader__dot:nth-child(3) {\r\n    -webkit-animation-delay: 500ms;\r\n            animation-delay: 500ms;\r\n    font-size: x-large;\r\n}\r\n\r\n.min {\r\n    min-width: -webkit-min-content;\r\n    min-width: -moz-min-content;\r\n    min-width: min-content;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvbW9kdWxlcy91c3VhcmlvL2VkaXRhci9lZGl0YXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFFBQVE7SUFDUixTQUFTO0lBRVQsd0NBQWdDO1lBQWhDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJO1FBQ0k7SUFDSjtBQUNKOztBQUpBO0lBQ0k7UUFDSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSw4QkFBc0I7SUFBdEIsMkJBQXNCO0lBQXRCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL21vZHVsZXMvdXN1YXJpby9lZGl0YXIvZWRpdGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyLWxvYWRlciB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmxpbmsge1xyXG4gICAgNTAlIHtcclxuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnRcclxuICAgIH1cclxufVxyXG5cclxuLmxvYWRlcl9fZG90IHtcclxuICAgIGFuaW1hdGlvbjogMXMgYmxpbmsgaW5maW5pdGU7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbn1cclxuXHJcbi5sb2FkZXJfX2RvdDpudGgtY2hpbGQoMikge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAyNTBtcztcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5cclxuLmxvYWRlcl9fZG90Om50aC1jaGlsZCgzKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDUwMG1zO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcbi5taW4ge1xyXG4gICAgbWluLXdpZHRoOiBtaW4tY29udGVudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/components/modules/usuario/editar/editar.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/layout/components/modules/usuario/editar/editar.component.ts ***!
  \******************************************************************************/
/*! exports provided: EditarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarComponent", function() { return EditarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var EditarComponent = /** @class */ (function () {
    function EditarComponent() {
        this.actualizado = false;
        this.failActualizado = false;
        this.msjErr = '';
        this.msjOK = '';
        this.verSeleccion = '';
        this.opcionSeleccionado = '0';
        this.info = {};
        this.loader = true;
        this.empresa = false;
        this.empresaSeleccionada = '0';
        this.password = '';
        this.passwordNueva = '';
        this.confirmacionPassword = '';
        this.isDomiciliario = false;
        this.isRecepcionista = false;
        this.isAdministrador = false;
        this.isUsuarioFinal = false;
        this.isEmpresa = false;
    }
    EditarComponent.prototype.ngOnInit = function () {
        this.editar();
        //  this.cargarRoles();
        this.cargarEmpresas();
        this.asignarPermisos();
        // alert("id de rol del usuario es:"+this.idRolUsuario);
    };
    EditarComponent.prototype.cargarEmpresas = function () {
    };
    EditarComponent.prototype.consignar = function (modal) {
        // this.usuario = usuario;
    };
    EditarComponent.prototype.editar = function () {
        var id = localStorage.getItem("id_usuario");
        // console.log("el usuario es"+usu)
    };
    EditarComponent.prototype.cargarRoles = function () {
        //console.log(this.tipoProductos);
    };
    EditarComponent.prototype.validadorNombre = function (event) {
        var pattern = /^[a-zA-Z ]*$/;
        //let inputChar = String.fromCharCode(event.charCode)
        if (!pattern.test(event.target.value)) {
            event.target.value = event.target.value.replace(/[^a-zA-Z ]/g, "");
            this.failActualizado = true;
            this.msjErr = "solo se permiten letras en el nombre";
            // invalid character, prevent input
        }
        else {
            this.failActualizado = false;
        }
    };
    EditarComponent.prototype.actualizarUsuario = function (usuario) {
    };
    EditarComponent.prototype.capturar = function () {
        this.verSeleccion = this.opcionSeleccionado;
        if (this.opcionSeleccionado == "EMPRESA") {
            this.empresa = true;
        }
        else
            this.empresa = false;
    };
    EditarComponent.prototype.capturarEmpresa = function () {
    };
    EditarComponent.prototype.volver = function () {
        window.history.back();
    };
    EditarComponent.prototype.getEmpresa = function () {
    };
    EditarComponent.prototype.getIdRol = function () {
    };
    EditarComponent.prototype.confirmarPassw = function () {
    };
    EditarComponent.prototype.asignarPermisos = function () {
    };
    EditarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editar',
            template: __webpack_require__(/*! raw-loader!./editar.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/components/modules/usuario/editar/editar.component.html"),
            styles: [__webpack_require__(/*! ./editar.component.css */ "./src/app/layout/components/modules/usuario/editar/editar.component.css")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], EditarComponent);
    return EditarComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/modules/usuario/editar/editar.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/components/modules/usuario/editar/editar.module.ts ***!
  \***************************************************************************/
/*! exports provided: EditarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarModule", function() { return EditarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _editar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editar.component */ "./src/app/layout/components/modules/usuario/editar/editar.component.ts");
/* harmony import */ var _editar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editar-routing.module */ "./src/app/layout/components/modules/usuario/editar/editar-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







var EditarModule = /** @class */ (function () {
    function EditarModule() {
    }
    EditarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_editar_component__WEBPACK_IMPORTED_MODULE_4__["EditarComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                _editar_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditarRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ]
        })
    ], EditarModule);
    return EditarModule;
}());



/***/ })

}]);
//# sourceMappingURL=editar-editar-module-es5.js.map