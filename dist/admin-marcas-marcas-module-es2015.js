(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-marcas-marcas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/marcas/list-marcas/list-marcas.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/marcas/list-marcas/list-marcas.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"info\">\r\n            <mat-card *ngFor=\"let marca of marcas | paginate: {id:'listar', itemsPerPage: 4, currentPage: pageActual }\">\r\n                <mat-card-title>{{ marca.name }}</mat-card-title>\r\n                <mat-card-description>{{ marca.category }}</mat-card-description>\r\n                <mat-card-actions align=\"end\">\r\n                    <button mat-button (click)=\"onEditar(marca.id, editmodal, marca.name, marca.category )\">Editar</button>\r\n                    <button mat-button (click)=\"openDeleteModal(deleteModal, marca.id, marca.name)\" >Eliminar</button>\r\n                </mat-card-actions>\r\n            </mat-card>\r\n            <pagination-controls id=\"listar\" (pageChange)=\"pageActual = $event\" responsive=\"true\">\r\n            </pagination-controls>\r\n        </div>\r\n    </div>\r\n</div>\r\n<ng-template #editmodal>\r\n    <mat-card>\r\n        <mat-card-title>\r\n            Editar Categoria\r\n        </mat-card-title>\r\n        <mat-card-actions >\r\n            <form action=\"\" [formGroup]=\"marcaForm\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-6\">\r\n                        <div class=\"form-floating mb-3\">\r\n                          <select class=\"form-control form-select form-select-lg mb-3\" aria-label=\".form-select-lg example\"\r\n                             formControlName=\"category\" id=\"floatingSelect\">\r\n                             <option [value]=\"category.name\" *ngFor=\"let category of categories\">{{ category.name }}</option>\r\n                            </select>\r\n                            <label for=\"floatingSelect\" class=\"lblfloat\">Seleccionar categoria</label>\r\n                          </div>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        \r\n                    <input type=\"text\" class=\"form-control\" id=\"floatingInput\" placeholder=\"Nombre de la categoria\" formControlName=\"name\">\r\n\r\n                    </div>\r\n                </div>\r\n            </form>\r\n           \r\n            <button mat-button [disabled]=\"!marcaForm.valid\" (click)=\"onGuardar(marcaeditid, confirModal)\">Guardar</button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</ng-template>\r\n<ng-template #deleteModal>\r\n    <mat-card *ngIf=\"!isloading && !icon\">\r\n        <mat-card-title>\r\n            Eliminar Categoria\r\n        </mat-card-title>\r\n        <mat-card-subtitle>\r\n            Esta a punto de eliminar la siguiente Marca: \r\n        </mat-card-subtitle>\r\n        <mat-card-content>\r\n            {{ deletemarca }}\r\n        </mat-card-content>\r\n        <mat-card-actions align=\"end\">\r\n            <button mat-button (click)=\"onEliminar(marcaDeleteid)\">Eliminar</button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n    <mat-spinner *ngIf=\"isloading\"></mat-spinner>\r\n    <mat-icon *ngIf=\"icon\">check_circle</mat-icon>\r\n</ng-template>\r\n<ng-template #confirModal>\r\n    <mat-card>\r\n        <mat-card-title>Registro Modificado</mat-card-title>\r\n    </mat-card>\r\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/marcas/marcas.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/marcas/marcas.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"row submenu\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <mat-tab-group mat-align-tabs=\"start\">\r\n                    <mat-tab label=\"Listar\">\r\n                        <app-list-marcas></app-list-marcas>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Nuevo\">\r\n                        <app-new-marcas></app-new-marcas>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Otros\">Content 3</mat-tab>\r\n                </mat-tab-group>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/marcas/new-marcas/new-marcas.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/marcas/new-marcas/new-marcas.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n    <div class=\"body-page\">\r\n        <div class=\"title\">\r\n            <h5>Agregar nueva Marca</h5>\r\n        </div>\r\n        <div class=\"form\">\r\n            <form [formGroup]=\"marcaForm\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-6\">\r\n                        <div class=\"form-floating mb-3\">\r\n                          <select class=\"form-control form-select form-select-lg mb-3\" aria-label=\".form-select-lg example\"\r\n                             formControlName=\"category\" id=\"floatingSelect\">\r\n                             <option [value]=\"category.name\" *ngFor=\"let category of categories\">{{ category.name }}</option>\r\n                            </select>\r\n                            <label for=\"floatingSelect\" class=\"lblfloat\">Seleccionar categoria</label>\r\n                          </div>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <div class=\"form-floating mb-3\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"floatingInput\" placeholder=\"Nombre de la categoria\" formControlName=\"name\">\r\n                            <label for=\"floatingInput\">Nombre de la Marca</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"button\">\r\n            <button [disabled]=\"!marcaForm.valid\" (click)=\"onGuardar(confirModal)\">Guardar</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<ng-template #confirModal>\r\n    <mat-card>\r\n        <mat-card-title>Registro Creado</mat-card-title>\r\n    </mat-card>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/admin/marcas/list-marcas/list-marcas-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/marcas/list-marcas/list-marcas-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ListMarcasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMarcasRoutingModule", function() { return ListMarcasRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const routes = [];
let ListMarcasRoutingModule = class ListMarcasRoutingModule {
};
ListMarcasRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ListMarcasRoutingModule);



/***/ }),

/***/ "./src/app/admin/marcas/list-marcas/list-marcas.component.css":
/*!********************************************************************!*\
  !*** ./src/app/admin/marcas/list-marcas/list-marcas.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    width: 60%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n/* estilos modal */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbWFyY2FzL2xpc3QtbWFyY2FzL2xpc3QtbWFyY2FzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBLGtCQUFrQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21hcmNhcy9saXN0LW1hcmNhcy9saXN0LW1hcmNhcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm97XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi8qIGVzdGlsb3MgbW9kYWwgKi9cclxuIl19 */"

/***/ }),

/***/ "./src/app/admin/marcas/list-marcas/list-marcas.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/marcas/list-marcas/list-marcas.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListMarcasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMarcasComponent", function() { return ListMarcasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/categorias.service */ "./src/app/services/categorias.service.ts");
/* harmony import */ var src_app_services_marcas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/marcas.service */ "./src/app/services/marcas.service.ts");






let ListMarcasComponent = class ListMarcasComponent {
    constructor(marcaService, dialog, fb, categoriaService) {
        this.marcaService = marcaService;
        this.dialog = dialog;
        this.fb = fb;
        this.categoriaService = categoriaService;
        this.isloading = false;
        this.icon = false;
        this.pageActual = 1;
        this.marcaService.marcas.subscribe(resp => {
            this.marcas = resp;
        });
        this.categoriaService.categories.subscribe(resp => {
            this.categories = resp;
        });
    }
    ngOnInit() {
    }
    onEditar(id, editmodal, marca, categoria) {
        this.marcaeditid = id;
        this.initForm();
        marca != null ? this.marcaForm.get('name').setValue(marca) : "";
        categoria != null ? this.marcaForm.get('category').setValue(categoria) : "";
        this.dialog.open(editmodal);
    }
    openDeleteModal(deleteModal, marcaId, marca) {
        this.deletemarca = marca;
        this.marcaDeleteid = marcaId;
        this.dialog.open(deleteModal);
    }
    initForm() {
        this.marcaForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    onGuardar(marcaId, modal) {
        this.dialog.open(modal);
        this.marcaService.onSaveMarca(this.marcaForm.value, marcaId);
    }
    onEliminar(id) {
        this.isloading = true;
        this.icon = false;
        this.marcaService.onDeleteMarca(id).then(resp => {
            this.isloading = false;
            this.icon = true;
        });
    }
};
ListMarcasComponent.ctorParameters = () => [
    { type: src_app_services_marcas_service__WEBPACK_IMPORTED_MODULE_5__["MarcasService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_4__["CategoriasService"] }
];
ListMarcasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-marcas',
        template: __webpack_require__(/*! raw-loader!./list-marcas.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/marcas/list-marcas/list-marcas.component.html"),
        styles: [__webpack_require__(/*! ./list-marcas.component.css */ "./src/app/admin/marcas/list-marcas/list-marcas.component.css")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_marcas_service__WEBPACK_IMPORTED_MODULE_5__["MarcasService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_4__["CategoriasService"]])
], ListMarcasComponent);



/***/ }),

/***/ "./src/app/admin/marcas/list-marcas/list-marcas.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/marcas/list-marcas/list-marcas.module.ts ***!
  \****************************************************************/
/*! exports provided: ListMarcasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMarcasModule", function() { return ListMarcasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _list_marcas_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-marcas-routing.module */ "./src/app/admin/marcas/list-marcas/list-marcas-routing.module.ts");
/* harmony import */ var _list_marcas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-marcas.component */ "./src/app/admin/marcas/list-marcas/list-marcas.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");













let ListMarcasModule = class ListMarcasModule {
};
ListMarcasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_list_marcas_component__WEBPACK_IMPORTED_MODULE_4__["ListMarcasComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _list_marcas_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListMarcasRoutingModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"]
        ],
        exports: [_list_marcas_component__WEBPACK_IMPORTED_MODULE_4__["ListMarcasComponent"]]
    })
], ListMarcasModule);



/***/ }),

/***/ "./src/app/admin/marcas/marcas-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/marcas/marcas-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MarcasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarcasRoutingModule", function() { return MarcasRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _marcas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marcas.component */ "./src/app/admin/marcas/marcas.component.ts");




const routes = [{ path: "", component: _marcas_component__WEBPACK_IMPORTED_MODULE_3__["MarcasComponent"] }];
let MarcasRoutingModule = class MarcasRoutingModule {
};
MarcasRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MarcasRoutingModule);



/***/ }),

/***/ "./src/app/admin/marcas/marcas.component.css":
/*!***************************************************!*\
  !*** ./src/app/admin/marcas/marcas.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21hcmNhcy9tYXJjYXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/marcas/marcas.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/marcas/marcas.component.ts ***!
  \**************************************************/
/*! exports provided: MarcasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarcasComponent", function() { return MarcasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MarcasComponent = class MarcasComponent {
    constructor() { }
    ngOnInit() {
    }
};
MarcasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-marcas',
        template: __webpack_require__(/*! raw-loader!./marcas.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/marcas/marcas.component.html"),
        styles: [__webpack_require__(/*! ./marcas.component.css */ "./src/app/admin/marcas/marcas.component.css")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], MarcasComponent);



/***/ }),

/***/ "./src/app/admin/marcas/marcas.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/marcas/marcas.module.ts ***!
  \***********************************************/
/*! exports provided: MarcasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarcasModule", function() { return MarcasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _marcas_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marcas-routing.module */ "./src/app/admin/marcas/marcas-routing.module.ts");
/* harmony import */ var _marcas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./marcas.component */ "./src/app/admin/marcas/marcas.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _list_marcas_list_marcas_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-marcas/list-marcas.module */ "./src/app/admin/marcas/list-marcas/list-marcas.module.ts");
/* harmony import */ var _new_marcas_new_marcas_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./new-marcas/new-marcas.module */ "./src/app/admin/marcas/new-marcas/new-marcas.module.ts");










let MarcasModule = class MarcasModule {
};
MarcasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_marcas_component__WEBPACK_IMPORTED_MODULE_4__["MarcasComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _marcas_routing_module__WEBPACK_IMPORTED_MODULE_3__["MarcasRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _list_marcas_list_marcas_module__WEBPACK_IMPORTED_MODULE_8__["ListMarcasModule"],
            _new_marcas_new_marcas_module__WEBPACK_IMPORTED_MODULE_9__["NewMarcasModule"]
        ]
    })
], MarcasModule);



/***/ }),

/***/ "./src/app/admin/marcas/new-marcas/new-marcas-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/marcas/new-marcas/new-marcas-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: NewMarcasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMarcasRoutingModule", function() { return NewMarcasRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const routes = [];
let NewMarcasRoutingModule = class NewMarcasRoutingModule {
};
NewMarcasRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], NewMarcasRoutingModule);



/***/ }),

/***/ "./src/app/admin/marcas/new-marcas/new-marcas.component.css":
/*!******************************************************************!*\
  !*** ./src/app/admin/marcas/new-marcas/new-marcas.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 50%;\r\n    margin: 20px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 20px;\r\n}\r\n.body{\r\n}\r\n.body-page{\r\n    justify-content: center;\r\n    width: 80%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.form{\r\n    width: 60%;\r\n    padding: 40px;\r\n    border-radius: 8px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.button{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    margin-right: 12rem;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n.button button{\r\n    width: 150px;\r\n    height: 3rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbWFyY2FzL25ldy1tYXJjYXMvbmV3LW1hcmNhcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21hcmNhcy9uZXctbWFyY2FzL25ldy1tYXJjYXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG4uYm9keXtcclxufVxyXG4uYm9keS1wYWdle1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLmZvcm17XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uYnV0dG9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn0gICBcclxuLmJ1dHRvbiBidXR0b257XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/marcas/new-marcas/new-marcas.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/marcas/new-marcas/new-marcas.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewMarcasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMarcasComponent", function() { return NewMarcasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/categorias.service */ "./src/app/services/categorias.service.ts");
/* harmony import */ var src_app_services_marcas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/marcas.service */ "./src/app/services/marcas.service.ts");






let NewMarcasComponent = class NewMarcasComponent {
    constructor(marcaService, fb, categoriaService, dialog) {
        this.marcaService = marcaService;
        this.fb = fb;
        this.categoriaService = categoriaService;
        this.dialog = dialog;
        this.categoriaService.categories.subscribe(resp => {
            this.categories = resp;
        });
        this.initForm();
    }
    ngOnInit() {
    }
    onGuardar(modal) {
        if (this.marcaForm.valid) {
            this.marcaService.onSaveMarca(this.marcaForm.value, null);
            this.dialog.open(modal);
            this.marcaForm.reset();
        }
    }
    initForm() {
        this.marcaForm = this.fb.group({
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
};
NewMarcasComponent.ctorParameters = () => [
    { type: src_app_services_marcas_service__WEBPACK_IMPORTED_MODULE_5__["MarcasService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_4__["CategoriasService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
NewMarcasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-marcas',
        template: __webpack_require__(/*! raw-loader!./new-marcas.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/marcas/new-marcas/new-marcas.component.html"),
        styles: [__webpack_require__(/*! ./new-marcas.component.css */ "./src/app/admin/marcas/new-marcas/new-marcas.component.css")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_marcas_service__WEBPACK_IMPORTED_MODULE_5__["MarcasService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_4__["CategoriasService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
], NewMarcasComponent);



/***/ }),

/***/ "./src/app/admin/marcas/new-marcas/new-marcas.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/marcas/new-marcas/new-marcas.module.ts ***!
  \**************************************************************/
/*! exports provided: NewMarcasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMarcasModule", function() { return NewMarcasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _new_marcas_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-marcas-routing.module */ "./src/app/admin/marcas/new-marcas/new-marcas-routing.module.ts");
/* harmony import */ var _new_marcas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-marcas.component */ "./src/app/admin/marcas/new-marcas/new-marcas.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






let NewMarcasModule = class NewMarcasModule {
};
NewMarcasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_new_marcas_component__WEBPACK_IMPORTED_MODULE_4__["NewMarcasComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _new_marcas_routing_module__WEBPACK_IMPORTED_MODULE_3__["NewMarcasRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ],
        exports: [_new_marcas_component__WEBPACK_IMPORTED_MODULE_4__["NewMarcasComponent"]]
    })
], NewMarcasModule);



/***/ }),

/***/ "./src/app/services/marcas.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/marcas.service.ts ***!
  \********************************************/
/*! exports provided: MarcasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarcasService", function() { return MarcasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");




let MarcasService = class MarcasService {
    constructor(afs) {
        this.afs = afs;
        this.marcaCollection = afs.collection('marcas');
        this.getMarcas();
    }
    onDeleteMarca(categoryId) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = this.marcaCollection.doc(categoryId).delete();
                resolve(result);
            }
            catch (error) {
                reject(error.message);
            }
        }));
    }
    onSaveMarca(marca, marcaId) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const id = marcaId || this.afs.createId();
                const data = Object.assign({ id }, marca);
                const result = yield this.marcaCollection.doc(id).set(data);
                resolve(result);
            }
            catch (error) {
                reject(error.message);
            }
        }));
    }
    getMarcas() {
        console.log('get marcas');
        this.marcas = this.marcaCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(actions => actions.map(a => a.payload.doc.data())));
    }
};
MarcasService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
];
MarcasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
], MarcasService);



/***/ })

}]);
//# sourceMappingURL=admin-marcas-marcas-module-es2015.js.map