(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-vehiculos-vehiculos-module~admin-versiones-versiones-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/versiones/list-versiones/list-versiones.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/versiones/list-versiones/list-versiones.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"dataSource| paginate: {id:'listar', itemsPerPage: 4, currentPage: pageActual }\" class=\"mat-elevation-z8\">\r\n\r\n  <ng-container matColumnDef=\"category\">\r\n    <th mat-header-cell *matHeaderCellDef> Categoria </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.category}} </td>\r\n  </ng-container>\r\n\r\n    <ng-container matColumnDef=\"marca\">\r\n      <th mat-header-cell *matHeaderCellDef> Marca </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.marca}} </td>\r\n    </ng-container>\r\n  \r\n    <ng-container matColumnDef=\"modelo\">\r\n      <th mat-header-cell *matHeaderCellDef> Modelo </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.modelo}} </td>\r\n    </ng-container>\r\n  \r\n    <ng-container matColumnDef=\"version\">\r\n        <th mat-header-cell *matHeaderCellDef> Version </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n      </ng-container>\r\n\r\n    <ng-container matColumnDef=\"actions\">\r\n      <th mat-header-cell *matHeaderCellDef>  </th>\r\n      <td mat-cell *matCellDef=\"let element\"><button mat-button (click)=\"openEditModal(element.id, editModal, element.marca, element.modelo, element.name)\">Editar</button> <button mat-button (click)=\"openDeleteModal(element.id, deleteModal)\">Eliminar</button></td>\r\n    </ng-container>\r\n  \r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n  <pagination-controls id=\"listar\" (pageChange)=\"pageActual = $event\" responsive=\"true\">\r\n  </pagination-controls>\r\n  \r\n  <ng-template #editModal>\r\n    <div class=\"body\">\r\n        <mat-card>\r\n            <mat-card-title>\r\n                Editar Version\r\n            </mat-card-title>\r\n            <mat-card-actions>\r\n              <div class=\"form\">\r\n                <form [formGroup]=\"versionForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <div class=\"form-floating mb-3\">\r\n                                <select class=\"form-control form-select form-select-lg mb-3\" aria-label=\".form-select-lg example\"\r\n                                 formControlName=\"category\" id=\"floatingSelect\" style=\"padding-top: 1.525rem;\">\r\n                                 <option [value]=\"category.name\" *ngFor=\"let category of categories\">{{ category.name }}</option>\r\n                                </select>\r\n                                <label for=\"floatingSelect\" class=\"lblfloat\">Seleccionar categoria</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <div class=\"form-floating mb-3\">\r\n                                <select class=\"form-control form-select form-select-lg mb-3\" aria-label=\".form-select-lg example\"\r\n                                 formControlName=\"marca\" id=\"floatingSelect\" style=\"padding-top: 1.525rem;\">\r\n                                 <option [value]=\"marca.name\" *ngFor=\"let marca of marcas\">{{ marca.name }}</option>\r\n                                </select>\r\n                                <label for=\"floatingSelect\" class=\"lblfloat\">Seleccionar marca</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <div class=\"form-floating mb-3\">\r\n                                <select class=\"form-control form-select form-select-lg mb-3\" aria-label=\".form-select-lg example\"\r\n                                 formControlName=\"modelo\" id=\"floatingSelect\" style=\"padding-top: 1.525rem;\">\r\n                                 <option [value]=\"modelo.name\" *ngFor=\"let modelo of modelos\">{{ modelo.name }}</option>\r\n                                </select>\r\n                                <label for=\"floatingSelect\" class=\"lblfloat\">Seleccionar modelo</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <div class=\"form-floating mb-3\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"floatingInput\" placeholder=\"Nombre de la version\" formControlName=\"name\">\r\n                                <label for=\"floatingInput\">Nombre de la version</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n                  <button mat-button [disabled]=\"!versionForm.valid\" (click)=\"onGuardar()\">Guardar</button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template #deleteModal>\r\n    <mat-card>\r\n        <mat-card-title>\r\n            Desea continuar?\r\n        </mat-card-title>\r\n        <mat-card-actions align=\"end\">\r\n            <button mat-button (click)=\"onEliminar()\">Eliminar</button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n  </ng-template>"

/***/ }),

/***/ "./src/app/admin/versiones/list-versiones/list-versiones.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/versiones/list-versiones/list-versiones.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdmVyc2lvbmVzL2xpc3QtdmVyc2lvbmVzL2xpc3QtdmVyc2lvbmVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi92ZXJzaW9uZXMvbGlzdC12ZXJzaW9uZXMvbGlzdC12ZXJzaW9uZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/admin/versiones/list-versiones/list-versiones.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/versiones/list-versiones/list-versiones.component.ts ***!
  \****************************************************************************/
/*! exports provided: ListVersionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListVersionesComponent", function() { return ListVersionesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/categorias.service */ "./src/app/services/categorias.service.ts");
/* harmony import */ var src_app_services_marcas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/marcas.service */ "./src/app/services/marcas.service.ts");
/* harmony import */ var src_app_services_modelos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/modelos.service */ "./src/app/services/modelos.service.ts");
/* harmony import */ var src_app_services_versiones_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/versiones.service */ "./src/app/services/versiones.service.ts");








let ListVersionesComponent = class ListVersionesComponent {
    constructor(versionService, fb, dialog, marcasSv, categoriaSv, modelosSv) {
        this.versionService = versionService;
        this.fb = fb;
        this.dialog = dialog;
        this.marcasSv = marcasSv;
        this.categoriaSv = categoriaSv;
        this.modelosSv = modelosSv;
        this.pageActual = 1;
        this.displayedColumns = ['category', 'marca', 'modelo', 'version', 'actions'];
        this.versionService.versiones.subscribe(resp => {
            this.dataSource = resp;
        });
        this.marcasSv.marcas.subscribe(resp => {
            this.marcas = resp;
        });
        this.categoriaSv.categories.subscribe(resp => {
            this.categories = resp;
        });
        this.modelosSv.modelos.subscribe(resp => {
            this.modelos = resp;
        });
    }
    ngOnInit() {
        this.initForm();
    }
    openEditModal(id, modal, marca, modelo, version, categoria) {
        this.idactual = id;
        marca != null ? this.versionForm.get('marca').setValue(marca) : "";
        modelo != null ? this.versionForm.get('modelo').setValue(modelo) : "";
        version != null ? this.versionForm.get('name').setValue(version) : "";
        categoria != null ? this.versionForm.get('category').setValue(categoria) : "";
        this.dialog.open(modal);
    }
    openDeleteModal(id, modal) {
        this.idactual = id;
        this.dialog.open(modal);
    }
    initForm() {
        this.versionForm = this.fb.group({
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            marca: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            modelo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    onGuardar() {
        if (this.versionForm.valid) {
            this.versionService.onSaveVersion(this.versionForm.value, this.idactual);
        }
    }
    onEliminar() {
        this.versionService.onDeleteVersion(this.idactual);
    }
};
ListVersionesComponent.ctorParameters = () => [
    { type: src_app_services_versiones_service__WEBPACK_IMPORTED_MODULE_7__["VersionesService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: src_app_services_marcas_service__WEBPACK_IMPORTED_MODULE_5__["MarcasService"] },
    { type: src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_4__["CategoriasService"] },
    { type: src_app_services_modelos_service__WEBPACK_IMPORTED_MODULE_6__["ModelosService"] }
];
ListVersionesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-versiones',
        template: __webpack_require__(/*! raw-loader!./list-versiones.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/versiones/list-versiones/list-versiones.component.html"),
        styles: [__webpack_require__(/*! ./list-versiones.component.css */ "./src/app/admin/versiones/list-versiones/list-versiones.component.css")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_versiones_service__WEBPACK_IMPORTED_MODULE_7__["VersionesService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
        src_app_services_marcas_service__WEBPACK_IMPORTED_MODULE_5__["MarcasService"],
        src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_4__["CategoriasService"],
        src_app_services_modelos_service__WEBPACK_IMPORTED_MODULE_6__["ModelosService"]])
], ListVersionesComponent);



/***/ }),

/***/ "./src/app/services/versiones.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/versiones.service.ts ***!
  \***********************************************/
/*! exports provided: VersionesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionesService", function() { return VersionesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");




let VersionesService = class VersionesService {
    constructor(afs) {
        this.afs = afs;
        this.versionCollection = afs.collection('versiones');
        this.getVersiones();
    }
    onDeleteVersion(versionId) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = this.versionCollection.doc(versionId).delete();
                resolve(result);
            }
            catch (error) {
                reject(error.message);
            }
        }));
    }
    onSaveVersion(version, versionId) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const id = versionId || this.afs.createId();
                const data = Object.assign({ id }, version);
                const result = yield this.versionCollection.doc(id).set(data);
                resolve(result);
            }
            catch (error) {
                reject(error.message);
            }
        }));
    }
    getVersiones() {
        console.log('get marcas');
        this.versiones = this.versionCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(actions => actions.map(a => a.payload.doc.data())));
    }
    getVersionesforMarcaModelo(marca, modelo) {
        return this.afs.collection(('versiones'), ref => ref.where('marca', '==', marca).where('modelo', '==', modelo)).valueChanges();
    }
};
VersionesService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
];
VersionesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
], VersionesService);



/***/ })

}]);
//# sourceMappingURL=default~admin-vehiculos-vehiculos-module~admin-versiones-versiones-module-es2015.js.map