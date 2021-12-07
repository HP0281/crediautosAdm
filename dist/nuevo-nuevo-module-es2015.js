(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nuevo-nuevo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/components/modules/usuario/nuevo/nuevo.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/components/modules/usuario/nuevo/nuevo.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid main\">\r\n    <div class=\"formulario\">\r\n        <mat-card>\r\n            <mat-card-title>Completa los datos del usuario a crear</mat-card-title>\r\n            <br>\r\n            <div class=\"example-container\">\r\n                <form  [formGroup]=\"registroForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\" col-xs-12 col-sm-12 col-md-6\">\r\n                            <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                                <mat-label>Nombre</mat-label>\r\n                                <input matInput type=\"text\"  id=\"nombre\" formControlName=\"name\"\r\n                                required>\r\n                                <mat-error *ngIf=\"this.registroForm.valid\">Nombre Requerido</mat-error>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\" col-xs-12 col-sm-12 col-md-6\">\r\n                            <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                                <mat-label>Apellidos</mat-label>\r\n                                <input matInput type=\"text\"  id=\"apellidos\" formControlName=\"lastname\" required>\r\n                                <mat-error *ngIf=\"this.registroForm.valid\">Apellidos Requeridos</mat-error>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\" col-xs-12 col-sm-12 col-md-6\">\r\n                            <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                                <mat-label>Telefono</mat-label>\r\n                            <span matPrefix>+57 &nbsp;</span>\r\n                            <input type=\"number\" matInput placeholder=\"555-555-1234\" id=\"telefono\" formControlName=\"phone\" required>\r\n                            <mat-icon matSuffix>mode_edit</mat-icon>\r\n                                <mat-error *ngIf=\"this.registroForm.valid\">Telefono Requeridos</mat-error>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\" col-xs-12 col-sm-12 col-md-6\">\r\n                            <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                                <mat-label>Rol</mat-label>\r\n                            <input type=\"text\" matInput placeholder=\"Agente\" autocapitalize=\"true\" id=\"rol\" formControlName=\"rol\" required>\r\n                            <mat-icon matSuffix>mode_edit</mat-icon>\r\n                                <mat-error *ngIf=\"this.registroForm.valid\">Rol Requerido</mat-error>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n                            <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                                <mat-label>Email</mat-label>\r\n                                <input type=\"email\" matInput id=\"email\" formControlName=\"email\"\r\n                                       placeholder=\"Ex. pat@example.com\" required>\r\n                                <mat-error *ngIf=\"this.registroForm.value && !this.registroForm.hasError('required')\">\r\n                                    Por favor, introduce un correo electrónico válido\r\n                                </mat-error>\r\n                                <mat-error *ngIf=\"this.registroForm.valid\">\r\n                                  Email is <strong>required</strong>\r\n                                </mat-error>\r\n                              </mat-form-field>\r\n                        </div>         \r\n                        <div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n                            <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n                                <mat-label>Contraseña</mat-label>\r\n                                <input matInput [type]=\"hide ? 'password' : 'text'\" id=\"clave\" formControlName=\"psw\">\r\n                                <button mat-icon-button matSuffix (click)=\"hide = !hide\" >\r\n                                    <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                                </button>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <mat-card-actions>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n        <br><br>\r\n        <button mat-raised-button color=\"warn\" [disabled]=\"!registroForm.valid\"\r\n            (click)=\"onRegistrar(registroForm.get('email').value, registroForm.get('psw').value )\">Continuar</button>\r\n    </div>\r\n</div>"

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

module.exports = ".formulario{\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 60%;\r\n}\r\n.formulario {\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n}\r\n.form{\r\n  margin-top: 30px;\r\n  padding: 20px 30px;\r\n  background-color: white;\r\n  border-radius: 10px;\r\n  border: 1px medium slategray;\r\n  box-shadow: 0 1px 3px rgb(0 0 0 / 20%);\r\n}\r\n.form input{\r\n  border-top: none;\r\n  border-left: none;\r\n  border-right: none;\r\n}\r\n.main{\r\n  background-color: #f7f7f7;\r\n}\r\n.header{\r\n  padding-top: 40px;\r\n}\r\n.form-floating{\r\n  margin-top: 10px;\r\n}\r\n.form .form-check{\r\n  color: #999;\r\n}\r\n.example-container .mat-form-field + .mat-form-field {\r\nmargin-left: 8px;\r\n}\r\n.example-right-align {\r\ntext-align: right;\r\n}\r\ninput.example-right-align::-webkit-outer-spin-button,\r\ninput.example-right-align::-webkit-inner-spin-button {\r\ndisplay: none;\r\n}\r\ninput.example-right-align {\r\n-moz-appearance: textfield;\r\n}\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n.example-section {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n.mat-raised-button{\r\n  background-color: #e51e1d;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvbW9kdWxlcy91c3VhcmlvL251ZXZvL251ZXZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBRUE7O0FBRUEsYUFBYTtBQUNiO0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY29tcG9uZW50cy9tb2R1bGVzL3VzdWFyaW8vbnVldm8vbnVldm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtdWxhcmlve1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogNjAlO1xyXG59XHJcbi5mb3JtdWxhcmlvIHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuLmZvcm17XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IDFweCBtZWRpdW0gc2xhdGVncmF5O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2IoMCAwIDAgLyAyMCUpO1xyXG59XHJcbi5mb3JtIGlucHV0e1xyXG4gIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG59XHJcbi5tYWlue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbn1cclxuLmhlYWRlcntcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG4uZm9ybS1mbG9hdGluZ3tcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5mb3JtIC5mb3JtLWNoZWNre1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcbi5leGFtcGxlLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xyXG5tYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1yaWdodC1hbGlnbiB7XHJcbnRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbiB7XHJcbi1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5leGFtcGxlLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4ubWF0LXJhaXNlZC1idXR0b257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1MWUxZDtcclxufSJdfQ== */"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_admin_modals_confirmacion_confirmacion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin/modals/confirmacion/confirmacion.component */ "./src/app/admin/modals/confirmacion/confirmacion.component.ts");
/* harmony import */ var src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth-service.service */ "./src/app/services/auth-service.service.ts");
/* harmony import */ var src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user-service.service */ "./src/app/services/user-service.service.ts");







let NuevoComponent = class NuevoComponent {
    constructor(fb, userservice, authservice, dialog) {
        this.fb = fb;
        this.userservice = userservice;
        this.authservice = authservice;
        this.dialog = dialog;
        this.hide = false;
        this.labelPosition = 'after';
        this.initform();
    }
    ngOnInit() {
    }
    initform() {
        this.registroForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
            psw: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            rol: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    onRegistrar(email, pass) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.authservice.registrar(email, pass);
                this.onGuardar();
                this.registroForm.reset();
            }
            catch (error) {
                //alert(error.message);
                const dialogref = this.dialog.open(src_app_admin_modals_confirmacion_confirmacion_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmacionComponent"], {
                    width: '250px',
                    data: {
                        message: error.message,
                        cancel: "Ok",
                        noresp: true
                    }
                });
                dialogref.afterClosed().subscribe(resp => {
                });
            }
        });
    }
    onGuardar() {
        if (this.registroForm.valid) {
            const user = this.registroForm.value;
            console.log(user);
            const userid = null;
            this.userservice.onSaveUserAdmin(this.registroForm.value);
        }
    }
    getErrorMessage() {
        if (this.registroForm.get('nombre').hasError('required')) {
            return 'You must enter a value';
        }
        return this.registroForm.get('nombre').hasError('nombre') ? 'Not a valid nombre' : '';
    }
};
NuevoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_6__["UserServiceService"] },
    { type: src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthServiceService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
NuevoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nuevo',
        template: __webpack_require__(/*! raw-loader!./nuevo.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/components/modules/usuario/nuevo/nuevo.component.html"),
        styles: [__webpack_require__(/*! ./nuevo.component.css */ "./src/app/layout/components/modules/usuario/nuevo/nuevo.component.css")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_6__["UserServiceService"],
        src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthServiceService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
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
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var src_app_admin_modals_confirmacion_confirmacion_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/admin/modals/confirmacion/confirmacion.module */ "./src/app/admin/modals/confirmacion/confirmacion.module.ts");












let NuevoModule = class NuevoModule {
};
NuevoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_nuevo_component__WEBPACK_IMPORTED_MODULE_4__["NuevoComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _nuevo_routing_module__WEBPACK_IMPORTED_MODULE_5__["NuevoRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            src_app_admin_modals_confirmacion_confirmacion_module__WEBPACK_IMPORTED_MODULE_11__["ConfirmacionModule"]
        ]
    })
], NuevoModule);



/***/ })

}]);
//# sourceMappingURL=nuevo-nuevo-module-es2015.js.map