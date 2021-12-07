(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-modelos-modelos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/modelos/list-modelos/list-modelos.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/modelos/list-modelos/list-modelos.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input class=\"form-control\" type=\"text\" name=\"filterModelos\" placeholder=\"Buscar Modelos\" [(ngModel)]=\"filterModelos\">\r\n<table class=\"table table-hover\">\r\n  <thead>\r\n    <tr class=\"text-center\">\r\n      <th>Categoria</th>\r\n      <th>Marca</th>\r\n      <th>Modelo</th>\r\n      <th>Accion</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr\r\n      *ngFor=\"let element of dataSource  | paginate: {id:'listar', itemsPerPage: 10, currentPage: pageActual } | marcas:filterModelos\"\r\n      class=\"text-center\">\r\n      <td>{{element.category}}</td>\r\n      <td>{{element.marca}}</td>\r\n      <td>{{element.name}}</td>\r\n\r\n      <td>\r\n        <button class=\"btn\"\r\n          (click)=\"openEditModal(element.id, editModal, element.marca, element.name, element.category)\"><i\r\n            class=\"material-icons\">\r\n            edit</i></button>\r\n        <a class=\"btn \"><i class=\"material-icons\" (click)=\"openDeleteModal(element.id, deleteModal)\">delete</i></a>\r\n\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n<pagination-controls id=\"listar\" (pageChange)=\"pageActual = $event\" responsive=\"true\">\r\n</pagination-controls>\r\n\r\n<ng-template #editModal>\r\n  <div class=\"body\">\r\n    <mat-card>\r\n      <mat-card-title>\r\n        Editar Modelo\r\n      </mat-card-title>\r\n      <mat-card-actions>\r\n        \r\n        <form [formGroup]=\"modeloform\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <div class=\"form-floating mb-3\">\r\n                <select class=\"form-control form-select form-select-lg mb-3\" aria-label=\".form-select-lg example\"\r\n                  formControlName=\"category\" id=\"floatingSelect\">\r\n                  <option [value]=\"category.name\" *ngFor=\"let category of categories\">{{ category.name }}</option>\r\n                </select>\r\n                <label for=\"floatingSelect\" class=\"lblfloat\">Seleccionar Categoria</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <div class=\"form-floating mb-3\">\r\n                <select class=\"form-control form-select form-select-lg mb-3\" aria-label=\".form-select-lg example\"\r\n                  formControlName=\"marca\" id=\"floatingSelect\">\r\n                  <option [value]=\"marca.name\" *ngFor=\"let marca of marcas\">{{ marca.name }}</option>\r\n                </select>\r\n                <label for=\"floatingSelect\" class=\"lblfloat\">Seleccionar marca</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <div class=\"form-floating mb-6\">\r\n                <input type=\"text\" class=\"form-control\" id=\"floatingInput\" placeholder=\"Nombre de la modelo\"\r\n                  formControlName=\"name\">\r\n                <label for=\"floatingInput\">Nombre de la modelo</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button mat-button [disabled]=\"!modeloform.valid\" (click)=\"onGuardar()\">Guardar</button>\r\n        </form>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </div>\r\n</ng-template>\r\n<ng-template #deleteModal>\r\n  <mat-card>\r\n    <mat-card-title>\r\n      Desea continuar?\r\n    </mat-card-title>\r\n    <mat-card-actions align=\"end\">\r\n      <button mat-button (click)=\"onEliminar()\">Eliminar</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/modelos/modelos.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/modelos/modelos.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"row submenu\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <mat-tab-group mat-align-tabs=\"start\">\r\n                    <mat-tab label=\"Listar\">\r\n                        <app-list-modelos></app-list-modelos>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Nuevo\">\r\n                        <app-new-modelos></app-new-modelos>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Otros\">Content 3</mat-tab>\r\n                </mat-tab-group>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/modelos/new-modelos/new-modelos.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/modelos/new-modelos/new-modelos.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n    <div class=\"body-page\">\r\n        <div class=\"title\">\r\n            <h5>Agregar nuevo modelo</h5>\r\n        </div>\r\n        <div class=\"form\">\r\n            <form [formGroup]=\"modeloForm\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-4\">\r\n                        <div class=\"form-floating mb-3\">\r\n                            <select class=\"form-control form-select form-select-lg mb-3\" aria-label=\".form-select-lg example\"\r\n                             formControlName=\"category\" id=\"floatingSelect\">\r\n                             <option [value]=\"category.name\" *ngFor=\"let category of categories\">{{ category.name }}</option>\r\n                            </select>\r\n                            <label for=\"floatingSelect\" class=\"lblfloat\">Seleccionar Categoria</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-4\">\r\n                        <div class=\"form-floating mb-3\">\r\n                            <select class=\"form-control form-select form-select-lg mb-3\" aria-label=\".form-select-lg example\"\r\n                             formControlName=\"marca\" id=\"floatingSelect\">\r\n                             <option [value]=\"marca.name\" *ngFor=\"let marca of marcas\">{{ marca.name }}</option>\r\n                            </select>\r\n                            <label for=\"floatingSelect\" class=\"lblfloat\">Seleccionar marca</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-4\">\r\n                        <div class=\"form-floating mb-3\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"floatingInput\" placeholder=\"Nombre de la modelo\" formControlName=\"name\">\r\n                            <label for=\"floatingInput\">Nombre de la modelo</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"button\">\r\n            <button [disabled]=\"!modeloForm.valid\" (click)=\"onGuardar()\">Guardar</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/modelos/list-modelos/list-modelos-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/modelos/list-modelos/list-modelos-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ListModelosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModelosRoutingModule", function() { return ListModelosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const routes = [];
let ListModelosRoutingModule = class ListModelosRoutingModule {
};
ListModelosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ListModelosRoutingModule);



/***/ }),

/***/ "./src/app/admin/modelos/list-modelos/list-modelos.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/admin/modelos/list-modelos/list-modelos.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n  }\r\n.body{\r\n  justify-content: center;\r\n}\r\n.info{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 60%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbW9kZWxvcy9saXN0LW1vZGVsb3MvbGlzdC1tb2RlbG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7QUFDRjtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9tb2RlbG9zL2xpc3QtbW9kZWxvcy9saXN0LW1vZGVsb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuLmJvZHl7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmluZm97XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/admin/modelos/list-modelos/list-modelos.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/modelos/list-modelos/list-modelos.component.ts ***!
  \**********************************************************************/
/*! exports provided: ListModelosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModelosComponent", function() { return ListModelosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/categorias.service */ "./src/app/services/categorias.service.ts");
/* harmony import */ var src_app_services_marcas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/marcas.service */ "./src/app/services/marcas.service.ts");
/* harmony import */ var src_app_services_modelos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/modelos.service */ "./src/app/services/modelos.service.ts");







let ListModelosComponent = class ListModelosComponent {
    constructor(modelosService, dialog, fb, marcaService, categoriaService) {
        this.modelosService = modelosService;
        this.dialog = dialog;
        this.fb = fb;
        this.marcaService = marcaService;
        this.categoriaService = categoriaService;
        this.displayedColumns = ['category', 'marca', 'modelo', 'actions'];
        this.dataSource = [];
        this.pageActual = 1;
        this.filterModelos = '';
        this.modelosService.modelos.subscribe(resp => {
            this.dataSource = resp;
        });
        this.marcaService.marcas.subscribe(resp => {
            this.marcas = resp;
        });
        this.categoriaService.categories.subscribe(resp => {
            this.categories = resp;
        });
    }
    ngOnInit() {
        this.initForm();
    }
    openEditModal(id, modal, marca, modelo, category) {
        this.idactual = id;
        marca != null ? this.modeloform.get('marca').setValue(marca) : "";
        modelo != null ? this.modeloform.get('name').setValue(modelo) : "";
        category != null ? this.modeloform.get('category').setValue(category) : "";
        this.dialog.open(modal);
    }
    openDeleteModal(id, modal) {
        this.idactual = id;
        this.dialog.open(modal);
    }
    onGuardar() {
        if (this.modeloform.valid) {
            this.modelosService.onSaveModelo(this.modeloform.value, this.idactual);
        }
    }
    onEliminar() {
        this.modelosService.onDeleteModelo(this.idactual);
    }
    initForm() {
        this.modeloform = this.fb.group({
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            marca: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
};
ListModelosComponent.ctorParameters = () => [
    { type: src_app_services_modelos_service__WEBPACK_IMPORTED_MODULE_6__["ModelosService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_marcas_service__WEBPACK_IMPORTED_MODULE_5__["MarcasService"] },
    { type: src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_4__["CategoriasService"] }
];
ListModelosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-modelos',
        template: __webpack_require__(/*! raw-loader!./list-modelos.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/modelos/list-modelos/list-modelos.component.html"),
        styles: [__webpack_require__(/*! ./list-modelos.component.css */ "./src/app/admin/modelos/list-modelos/list-modelos.component.css")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_modelos_service__WEBPACK_IMPORTED_MODULE_6__["ModelosService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_marcas_service__WEBPACK_IMPORTED_MODULE_5__["MarcasService"],
        src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_4__["CategoriasService"]])
], ListModelosComponent);



/***/ }),

/***/ "./src/app/admin/modelos/list-modelos/list-modelos.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/modelos/list-modelos/list-modelos.module.ts ***!
  \*******************************************************************/
/*! exports provided: ListModelosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModelosModule", function() { return ListModelosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _list_modelos_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-modelos-routing.module */ "./src/app/admin/modelos/list-modelos/list-modelos-routing.module.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _list_modelos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-modelos.component */ "./src/app/admin/modelos/list-modelos/list-modelos.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");











let ListModelosModule = class ListModelosModule {
};
ListModelosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_list_modelos_component__WEBPACK_IMPORTED_MODULE_8__["ListModelosComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
            _list_modelos_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListModelosRoutingModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["PipesModule"]
        ],
        exports: [_list_modelos_component__WEBPACK_IMPORTED_MODULE_8__["ListModelosComponent"]]
    })
], ListModelosModule);



/***/ }),

/***/ "./src/app/admin/modelos/modelos-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/modelos/modelos-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ModelosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelosRoutingModule", function() { return ModelosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modelos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modelos.component */ "./src/app/admin/modelos/modelos.component.ts");




const routes = [{ path: "", component: _modelos_component__WEBPACK_IMPORTED_MODULE_3__["ModelosComponent"] }];
let ModelosRoutingModule = class ModelosRoutingModule {
};
ModelosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ModelosRoutingModule);



/***/ }),

/***/ "./src/app/admin/modelos/modelos.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin/modelos/modelos.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21vZGVsb3MvbW9kZWxvcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/modelos/modelos.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/modelos/modelos.component.ts ***!
  \****************************************************/
/*! exports provided: ModelosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelosComponent", function() { return ModelosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ModelosComponent = class ModelosComponent {
    constructor() { }
    ngOnInit() {
    }
};
ModelosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modelos',
        template: __webpack_require__(/*! raw-loader!./modelos.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/modelos/modelos.component.html"),
        styles: [__webpack_require__(/*! ./modelos.component.css */ "./src/app/admin/modelos/modelos.component.css")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ModelosComponent);



/***/ }),

/***/ "./src/app/admin/modelos/modelos.module.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/modelos/modelos.module.ts ***!
  \*************************************************/
/*! exports provided: ModelosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelosModule", function() { return ModelosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _modelos_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modelos-routing.module */ "./src/app/admin/modelos/modelos-routing.module.ts");
/* harmony import */ var _modelos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modelos.component */ "./src/app/admin/modelos/modelos.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _list_modelos_list_modelos_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-modelos/list-modelos.module */ "./src/app/admin/modelos/list-modelos/list-modelos.module.ts");
/* harmony import */ var _new_modelos_new_modelos_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./new-modelos/new-modelos.module */ "./src/app/admin/modelos/new-modelos/new-modelos.module.ts");










let ModelosModule = class ModelosModule {
};
ModelosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_modelos_component__WEBPACK_IMPORTED_MODULE_4__["ModelosComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _modelos_routing_module__WEBPACK_IMPORTED_MODULE_3__["ModelosRoutingModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
            _list_modelos_list_modelos_module__WEBPACK_IMPORTED_MODULE_8__["ListModelosModule"],
            _new_modelos_new_modelos_module__WEBPACK_IMPORTED_MODULE_9__["NewModelosModule"]
        ]
    })
], ModelosModule);



/***/ }),

/***/ "./src/app/admin/modelos/new-modelos/new-modelos-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/modelos/new-modelos/new-modelos-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: NewModelosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewModelosRoutingModule", function() { return NewModelosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _new_modelos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-modelos.component */ "./src/app/admin/modelos/new-modelos/new-modelos.component.ts");




const routes = [{ path: "", component: _new_modelos_component__WEBPACK_IMPORTED_MODULE_3__["NewModelosComponent"] }];
let NewModelosRoutingModule = class NewModelosRoutingModule {
};
NewModelosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], NewModelosRoutingModule);



/***/ }),

/***/ "./src/app/admin/modelos/new-modelos/new-modelos.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/modelos/new-modelos/new-modelos.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 50%;\r\n    margin: 20px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 20px;\r\n}\r\n.body-page{\r\n    justify-content: center;\r\n    width: 80%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.form{\r\n    width: 60%;\r\n    padding: 40px;\r\n    border-radius: 8px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.button{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    margin-right: 12rem;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n.button button{\r\n    width: 150px;\r\n    height: 3rem;\r\n}\r\n.lblfloat{\r\n    -webkit-transform: scale(.85) translateY(-0.8rem) translateX(0.15rem) !important;\r\n            transform: scale(.85) translateY(-0.8rem) translateX(0.15rem) !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbW9kZWxvcy9uZXctbW9kZWxvcy9uZXctbW9kZWxvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnRkFBd0U7WUFBeEUsd0VBQXdFO0FBQzVFIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vbW9kZWxvcy9uZXctbW9kZWxvcy9uZXctbW9kZWxvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5ib2R5LXBhZ2V7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uZm9ybXtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi5idXR0b257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi1yaWdodDogMTJyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufSAgIFxyXG4uYnV0dG9uIGJ1dHRvbntcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogM3JlbTtcclxufVxyXG4ubGJsZmxvYXR7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC44NSkgdHJhbnNsYXRlWSgtMC44cmVtKSB0cmFuc2xhdGVYKDAuMTVyZW0pICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/modelos/new-modelos/new-modelos.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/modelos/new-modelos/new-modelos.component.ts ***!
  \********************************************************************/
/*! exports provided: NewModelosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewModelosComponent", function() { return NewModelosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categorias.service */ "./src/app/services/categorias.service.ts");
/* harmony import */ var src_app_services_marcas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/marcas.service */ "./src/app/services/marcas.service.ts");
/* harmony import */ var src_app_services_modelos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/modelos.service */ "./src/app/services/modelos.service.ts");






let NewModelosComponent = class NewModelosComponent {
    constructor(fb, marcaService, modelosService, categoriaService) {
        this.fb = fb;
        this.marcaService = marcaService;
        this.modelosService = modelosService;
        this.categoriaService = categoriaService;
        this.categoriaService.categories.subscribe(resp => {
            this.categories = resp;
        });
        this.marcaService.marcas.subscribe((resp) => {
            this.marcas = resp;
            console.log(resp);
        });
        this.initForm();
    }
    ngOnInit() {
    }
    initForm() {
        this.modeloForm = this.fb.group({
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            marca: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    onGuardar() {
        if (this.modeloForm.valid) {
            this.modelosService.onSaveModelo(this.modeloForm.value, null);
        }
    }
};
NewModelosComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_marcas_service__WEBPACK_IMPORTED_MODULE_4__["MarcasService"] },
    { type: src_app_services_modelos_service__WEBPACK_IMPORTED_MODULE_5__["ModelosService"] },
    { type: src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_3__["CategoriasService"] }
];
NewModelosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-modelos',
        template: __webpack_require__(/*! raw-loader!./new-modelos.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/modelos/new-modelos/new-modelos.component.html"),
        styles: [__webpack_require__(/*! ./new-modelos.component.css */ "./src/app/admin/modelos/new-modelos/new-modelos.component.css")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_marcas_service__WEBPACK_IMPORTED_MODULE_4__["MarcasService"],
        src_app_services_modelos_service__WEBPACK_IMPORTED_MODULE_5__["ModelosService"],
        src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_3__["CategoriasService"]])
], NewModelosComponent);



/***/ }),

/***/ "./src/app/admin/modelos/new-modelos/new-modelos.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/modelos/new-modelos/new-modelos.module.ts ***!
  \*****************************************************************/
/*! exports provided: NewModelosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewModelosModule", function() { return NewModelosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _new_modelos_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-modelos-routing.module */ "./src/app/admin/modelos/new-modelos/new-modelos-routing.module.ts");
/* harmony import */ var _new_modelos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-modelos.component */ "./src/app/admin/modelos/new-modelos/new-modelos.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






let NewModelosModule = class NewModelosModule {
};
NewModelosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_new_modelos_component__WEBPACK_IMPORTED_MODULE_4__["NewModelosComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _new_modelos_routing_module__WEBPACK_IMPORTED_MODULE_3__["NewModelosRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ],
        exports: [_new_modelos_component__WEBPACK_IMPORTED_MODULE_4__["NewModelosComponent"]]
    })
], NewModelosModule);



/***/ }),

/***/ "./src/app/pipes/marcas.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/marcas.pipe.ts ***!
  \**************************************/
/*! exports provided: MarcasPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarcasPipe", function() { return MarcasPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MarcasPipe = class MarcasPipe {
    transform(value, arg) {
        const resultProduct = [];
        for (const Vehicle of value) {
            if (Vehicle.name != null) {
                if (Vehicle.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
                    //console.log("si");
                    resultProduct.push(Vehicle);
                }
            }
            else {
                if (Vehicle.marca.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
                    //console.log("si");
                    resultProduct.push(Vehicle);
                }
            }
        }
        return resultProduct;
    }
};
MarcasPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'marcas'
    })
], MarcasPipe);



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _marcas_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marcas.pipe */ "./src/app/pipes/marcas.pipe.ts");




let PipesModule = class PipesModule {
};
PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_marcas_pipe__WEBPACK_IMPORTED_MODULE_3__["MarcasPipe"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ], exports: [_marcas_pipe__WEBPACK_IMPORTED_MODULE_3__["MarcasPipe"]]
    })
], PipesModule);



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



/***/ }),

/***/ "./src/app/services/modelos.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/modelos.service.ts ***!
  \*********************************************/
/*! exports provided: ModelosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelosService", function() { return ModelosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");




let ModelosService = class ModelosService {
    constructor(afs) {
        this.afs = afs;
        this.modeloCollection = afs.collection('modelos');
        this.getModelos();
    }
    onDeleteModelo(modeloId) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = this.modeloCollection.doc(modeloId).delete();
                resolve(result);
            }
            catch (error) {
                reject(error.message);
            }
        }));
    }
    onSaveModelo(modelo, modeloId) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const id = modeloId || this.afs.createId();
                const data = Object.assign({ id }, modelo);
                const result = yield this.modeloCollection.doc(id).set(data);
                resolve(result);
            }
            catch (error) {
                reject(error.message);
            }
        }));
    }
    getModelos() {
        console.log('get modelos');
        this.modelos = this.modeloCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(actions => actions.map(a => a.payload.doc.data())));
    }
    getModelosforMarca(marca) {
        return this.afs.collection(('modelos'), ref => ref.where('marca', '==', marca)).valueChanges();
    }
};
ModelosService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
];
ModelosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
], ModelosService);



/***/ })

}]);
//# sourceMappingURL=admin-modelos-modelos-module-es2015.js.map