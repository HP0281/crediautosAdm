(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-versiones-versiones-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/versiones/new-versiones/new-versiones.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/versiones/new-versiones/new-versiones.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n    <div class=\"body-page\">\r\n        <div class=\"title\">\r\n            <h5>Agregar nueva version</h5>\r\n        </div>\r\n        <div class=\"form\">\r\n            <form [formGroup]=\"versionForm\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-6\">\r\n                        <div class=\"form-floating mb-3\">\r\n                            <select class=\"form-control form-select form-select-lg mb-3\" aria-label=\".form-select-lg example\"\r\n                             formControlName=\"category\" id=\"floatingSelect\" style=\"padding-top: 1.525rem;\">\r\n                             <option [value]=\"category.name\" *ngFor=\"let category of categories\">{{ category.name }}</option>\r\n                            </select>\r\n                            <label for=\"floatingSelect\" class=\"lblfloat\">Seleccionar categoria</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <div class=\"form-floating mb-3\">\r\n                            <select class=\"form-control form-select form-select-lg mb-3\" aria-label=\".form-select-lg example\"\r\n                             formControlName=\"marca\" id=\"floatingSelect\" style=\"padding-top: 1.525rem;\">\r\n                             <option [value]=\"marca.name\" *ngFor=\"let marca of marcas\">{{ marca.name }}</option>\r\n                            </select>\r\n                            <label for=\"floatingSelect\" class=\"lblfloat\">Seleccionar marca</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-6\">\r\n                        <div class=\"form-floating mb-3\">\r\n                            <select class=\"form-control form-select form-select-lg mb-3\" aria-label=\".form-select-lg example\"\r\n                             formControlName=\"modelo\" id=\"floatingSelect\" style=\"padding-top: 1.525rem;\">\r\n                             <option [value]=\"modelo.name\" *ngFor=\"let modelo of modelos\">{{ modelo.name }}</option>\r\n                            </select>\r\n                            <label for=\"floatingSelect\" class=\"lblfloat\">Seleccionar modelo</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <div class=\"form-floating mb-3\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"floatingInput\" placeholder=\"Nombre de la version\" formControlName=\"name\">\r\n                            <label for=\"floatingInput\">Nombre de la version</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"button\">\r\n            <button [disabled]=\"!versionForm.valid\" (click)=\"onGuardar()\">Guardar</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/versiones/versiones.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/versiones/versiones.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"row submenu\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <mat-tab-group mat-align-tabs=\"start\">\r\n                    <mat-tab label=\"Listar\">\r\n                        <app-list-versiones></app-list-versiones>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Nuevo\">\r\n                        <app-new-versiones></app-new-versiones>\r\n                    </mat-tab>\r\n                </mat-tab-group>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/versiones/list-versiones/list-versiones-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/versiones/list-versiones/list-versiones-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ListVersionesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListVersionesRoutingModule", function() { return ListVersionesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_versiones_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-versiones.component */ "./src/app/admin/versiones/list-versiones/list-versiones.component.ts");




const routes = [{ path: "", component: _list_versiones_component__WEBPACK_IMPORTED_MODULE_3__["ListVersionesComponent"] }];
let ListVersionesRoutingModule = class ListVersionesRoutingModule {
};
ListVersionesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ListVersionesRoutingModule);



/***/ }),

/***/ "./src/app/admin/versiones/list-versiones/list-versiones.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/versiones/list-versiones/list-versiones.module.ts ***!
  \*************************************************************************/
/*! exports provided: ListVersionesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListVersionesModule", function() { return ListVersionesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _list_versiones_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-versiones-routing.module */ "./src/app/admin/versiones/list-versiones/list-versiones-routing.module.ts");
/* harmony import */ var _list_versiones_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-versiones.component */ "./src/app/admin/versiones/list-versiones/list-versiones.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");










let ListVersionesModule = class ListVersionesModule {
};
ListVersionesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_list_versiones_component__WEBPACK_IMPORTED_MODULE_4__["ListVersionesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _list_versiones_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListVersionesRoutingModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ],
        exports: [_list_versiones_component__WEBPACK_IMPORTED_MODULE_4__["ListVersionesComponent"]]
    })
], ListVersionesModule);



/***/ }),

/***/ "./src/app/admin/versiones/new-versiones/new-versiones-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/versiones/new-versiones/new-versiones-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: NewVersionesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewVersionesRoutingModule", function() { return NewVersionesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _new_versiones_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-versiones.component */ "./src/app/admin/versiones/new-versiones/new-versiones.component.ts");




const routes = [{
        path: "", component: _new_versiones_component__WEBPACK_IMPORTED_MODULE_3__["NewVersionesComponent"]
    }];
let NewVersionesRoutingModule = class NewVersionesRoutingModule {
};
NewVersionesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], NewVersionesRoutingModule);



/***/ }),

/***/ "./src/app/admin/versiones/new-versiones/new-versiones.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/admin/versiones/new-versiones/new-versiones.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 50%;\r\n    margin: 20px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 20px;\r\n}\r\n.body-page{\r\n    justify-content: center;\r\n    width: 80%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.form{\r\n    width: 60%;\r\n    padding: 40px;\r\n    border-radius: 8px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.button{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    margin-right: 12rem;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n.button button{\r\n    width: 150px;\r\n    height: 3rem;\r\n}\r\n.lblfloat{\r\n    -webkit-transform: scale(.85) translateY(-0.8rem) translateX(0.15rem) !important;\r\n            transform: scale(.85) translateY(-0.8rem) translateX(0.15rem) !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdmVyc2lvbmVzL25ldy12ZXJzaW9uZXMvbmV3LXZlcnNpb25lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnRkFBd0U7WUFBeEUsd0VBQXdFO0FBQzVFIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vdmVyc2lvbmVzL25ldy12ZXJzaW9uZXMvbmV3LXZlcnNpb25lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5ib2R5LXBhZ2V7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uZm9ybXtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi5idXR0b257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi1yaWdodDogMTJyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufSAgIFxyXG4uYnV0dG9uIGJ1dHRvbntcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogM3JlbTtcclxufVxyXG4ubGJsZmxvYXR7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC44NSkgdHJhbnNsYXRlWSgtMC44cmVtKSB0cmFuc2xhdGVYKDAuMTVyZW0pICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/versiones/new-versiones/new-versiones.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/versiones/new-versiones/new-versiones.component.ts ***!
  \**************************************************************************/
/*! exports provided: NewVersionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewVersionesComponent", function() { return NewVersionesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categorias.service */ "./src/app/services/categorias.service.ts");
/* harmony import */ var src_app_services_marcas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/marcas.service */ "./src/app/services/marcas.service.ts");
/* harmony import */ var src_app_services_modelos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/modelos.service */ "./src/app/services/modelos.service.ts");
/* harmony import */ var src_app_services_versiones_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/versiones.service */ "./src/app/services/versiones.service.ts");







let NewVersionesComponent = class NewVersionesComponent {
    constructor(fb, marcaService, modeloService, versionService, categoriService) {
        this.fb = fb;
        this.marcaService = marcaService;
        this.modeloService = modeloService;
        this.versionService = versionService;
        this.categoriService = categoriService;
        this.marcaService.marcas.subscribe((resp) => {
            this.marcas = resp;
        });
        this.modeloService.modelos.subscribe((resp) => {
            this.modelos = resp;
        });
        this.categoriService.categories.subscribe((resp) => {
            this.categories = resp;
        });
        this.initForm();
    }
    ngOnInit() {
    }
    initForm() {
        this.versionForm = this.fb.group({
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            marca: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            modelo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    onGuardar() {
        if (this.versionForm.valid) {
            this.versionService.onSaveVersion(this.versionForm.value, null);
        }
    }
};
NewVersionesComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_marcas_service__WEBPACK_IMPORTED_MODULE_4__["MarcasService"] },
    { type: src_app_services_modelos_service__WEBPACK_IMPORTED_MODULE_5__["ModelosService"] },
    { type: src_app_services_versiones_service__WEBPACK_IMPORTED_MODULE_6__["VersionesService"] },
    { type: src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_3__["CategoriasService"] }
];
NewVersionesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-versiones',
        template: __webpack_require__(/*! raw-loader!./new-versiones.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/versiones/new-versiones/new-versiones.component.html"),
        styles: [__webpack_require__(/*! ./new-versiones.component.css */ "./src/app/admin/versiones/new-versiones/new-versiones.component.css")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_marcas_service__WEBPACK_IMPORTED_MODULE_4__["MarcasService"],
        src_app_services_modelos_service__WEBPACK_IMPORTED_MODULE_5__["ModelosService"], src_app_services_versiones_service__WEBPACK_IMPORTED_MODULE_6__["VersionesService"],
        src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_3__["CategoriasService"]])
], NewVersionesComponent);



/***/ }),

/***/ "./src/app/admin/versiones/new-versiones/new-versiones.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/versiones/new-versiones/new-versiones.module.ts ***!
  \***********************************************************************/
/*! exports provided: NewVersionesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewVersionesModule", function() { return NewVersionesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _new_versiones_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-versiones-routing.module */ "./src/app/admin/versiones/new-versiones/new-versiones-routing.module.ts");
/* harmony import */ var _new_versiones_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-versiones.component */ "./src/app/admin/versiones/new-versiones/new-versiones.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






let NewVersionesModule = class NewVersionesModule {
};
NewVersionesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_new_versiones_component__WEBPACK_IMPORTED_MODULE_4__["NewVersionesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _new_versiones_routing_module__WEBPACK_IMPORTED_MODULE_3__["NewVersionesRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ],
        exports: [_new_versiones_component__WEBPACK_IMPORTED_MODULE_4__["NewVersionesComponent"]]
    })
], NewVersionesModule);



/***/ }),

/***/ "./src/app/admin/versiones/versiones-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/versiones/versiones-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: VersionesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionesRoutingModule", function() { return VersionesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _versiones_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./versiones.component */ "./src/app/admin/versiones/versiones.component.ts");




const routes = [{ path: "", component: _versiones_component__WEBPACK_IMPORTED_MODULE_3__["VersionesComponent"] }];
let VersionesRoutingModule = class VersionesRoutingModule {
};
VersionesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], VersionesRoutingModule);



/***/ }),

/***/ "./src/app/admin/versiones/versiones.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin/versiones/versiones.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3ZlcnNpb25lcy92ZXJzaW9uZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/versiones/versiones.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/versiones/versiones.component.ts ***!
  \********************************************************/
/*! exports provided: VersionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionesComponent", function() { return VersionesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let VersionesComponent = class VersionesComponent {
    constructor() { }
    ngOnInit() {
    }
};
VersionesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-versiones',
        template: __webpack_require__(/*! raw-loader!./versiones.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/versiones/versiones.component.html"),
        styles: [__webpack_require__(/*! ./versiones.component.css */ "./src/app/admin/versiones/versiones.component.css")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], VersionesComponent);



/***/ }),

/***/ "./src/app/admin/versiones/versiones.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/versiones/versiones.module.ts ***!
  \*****************************************************/
/*! exports provided: VersionesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionesModule", function() { return VersionesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _versiones_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./versiones-routing.module */ "./src/app/admin/versiones/versiones-routing.module.ts");
/* harmony import */ var _versiones_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./versiones.component */ "./src/app/admin/versiones/versiones.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _list_versiones_list_versiones_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-versiones/list-versiones.module */ "./src/app/admin/versiones/list-versiones/list-versiones.module.ts");
/* harmony import */ var _new_versiones_new_versiones_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-versiones/new-versiones.module */ "./src/app/admin/versiones/new-versiones/new-versiones.module.ts");








let VersionesModule = class VersionesModule {
};
VersionesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_versiones_component__WEBPACK_IMPORTED_MODULE_4__["VersionesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _versiones_routing_module__WEBPACK_IMPORTED_MODULE_3__["VersionesRoutingModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            _list_versiones_list_versiones_module__WEBPACK_IMPORTED_MODULE_6__["ListVersionesModule"],
            _new_versiones_new_versiones_module__WEBPACK_IMPORTED_MODULE_7__["NewVersionesModule"]
        ]
    })
], VersionesModule);



/***/ })

}]);
//# sourceMappingURL=admin-versiones-versiones-module-es2015.js.map