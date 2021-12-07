(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-vehiculos-vehiculos-module~admin-versiones-versiones-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/versiones/list-versiones/list-versiones.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/versiones/list-versiones/list-versiones.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input class=\"form-control\" type=\"text\" name=\"filterVersiones\" placeholder=\"Buscar Versiones\" [(ngModel)]=\"filterVersiones\">\r\n<table class=\"table table-hover\">\r\n  <thead>\r\n    <tr class=\"text-center\">\r\n      <th>Categoria</th>\r\n      <th>Marca</th>\r\n      <th>Modelo</th>\r\n      <th>Version</th>\r\n      <th>Accion</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr\r\n      *ngFor=\"let element of dataSource  | paginate: {id:'listar', itemsPerPage: 10, currentPage: pageActual } | marcas:filterVersiones\"\r\n      class=\"text-center\">\r\n      <td>{{element.category}}</td>\r\n      <td>{{element.marca}}</td>\r\n      <td>{{element.modelo}}</td>\r\n      <td>{{element.name}}</td>\r\n\r\n      <td>\r\n        <button class=\"btn\"\r\n          (click)=\"openEditModal(element.id, editModal, element.marca, element.modelo, element.name)\"><i\r\n            class=\"material-icons\">\r\n            edit</i></button>\r\n        <a class=\"btn \"><i class=\"material-icons\" (click)=\"openDeleteModal(element.id, deleteModal)\">delete</i></a>\r\n\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n  <pagination-controls id=\"listar\" (pageChange)=\"pageActual = $event\" responsive=\"true\">\r\n  </pagination-controls>\r\n  \r\n  <ng-template #editModal>\r\n    <div class=\"body\">\r\n        <mat-card>\r\n            <mat-card-title>\r\n                Editar Version\r\n            </mat-card-title>\r\n            <mat-card-actions>\r\n              <div class=\"form\">\r\n                <form [formGroup]=\"versionForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <div class=\"form-floating mb-3\">\r\n                                <select class=\"form-control form-select form-select-lg mb-3\" aria-label=\".form-select-lg example\"\r\n                                 formControlName=\"category\" id=\"floatingSelect\" style=\"padding-top: 1.525rem;\">\r\n                                 <option [value]=\"category.name\" *ngFor=\"let category of categories\">{{ category.name }}</option>\r\n                                </select>\r\n                                <label for=\"floatingSelect\" class=\"lblfloat\">Seleccionar categoria</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <div class=\"form-floating mb-3\">\r\n                                <select class=\"form-control form-select form-select-lg mb-3\" aria-label=\".form-select-lg example\"\r\n                                 formControlName=\"marca\" id=\"floatingSelect\" style=\"padding-top: 1.525rem;\">\r\n                                 <option [value]=\"marca.name\" *ngFor=\"let marca of marcas\">{{ marca.name }}</option>\r\n                                </select>\r\n                                <label for=\"floatingSelect\" class=\"lblfloat\">Seleccionar marca</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <div class=\"form-floating mb-3\">\r\n                                <select class=\"form-control form-select form-select-lg mb-3\" aria-label=\".form-select-lg example\"\r\n                                 formControlName=\"modelo\" id=\"floatingSelect\" style=\"padding-top: 1.525rem;\">\r\n                                 <option [value]=\"modelo.name\" *ngFor=\"let modelo of modelos\">{{ modelo.name }}</option>\r\n                                </select>\r\n                                <label for=\"floatingSelect\" class=\"lblfloat\">Seleccionar modelo</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <div class=\"form-floating mb-3\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"floatingInput\" placeholder=\"Nombre de la version\" formControlName=\"name\">\r\n                                <label for=\"floatingInput\">Nombre de la version</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n                  <button mat-button [disabled]=\"!versionForm.valid\" (click)=\"onGuardar()\">Guardar</button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template #deleteModal>\r\n    <mat-card>\r\n        <mat-card-title>\r\n            Desea continuar?\r\n        </mat-card-title>\r\n        <mat-card-actions align=\"end\">\r\n            <button mat-button (click)=\"onEliminar()\">Eliminar</button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n  </ng-template>"

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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/categorias.service */ "./src/app/services/categorias.service.ts");
/* harmony import */ var src_app_services_marcas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/marcas.service */ "./src/app/services/marcas.service.ts");
/* harmony import */ var src_app_services_modelos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/modelos.service */ "./src/app/services/modelos.service.ts");
/* harmony import */ var src_app_services_versiones_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/versiones.service */ "./src/app/services/versiones.service.ts");








var ListVersionesComponent = /** @class */ (function () {
    function ListVersionesComponent(versionService, fb, dialog, marcasSv, categoriaSv, modelosSv) {
        var _this = this;
        this.versionService = versionService;
        this.fb = fb;
        this.dialog = dialog;
        this.marcasSv = marcasSv;
        this.categoriaSv = categoriaSv;
        this.modelosSv = modelosSv;
        this.pageActual = 1;
        this.displayedColumns = ['category', 'marca', 'modelo', 'version', 'actions'];
        this.filterVersiones = '';
        this.versionService.versiones.subscribe(function (resp) {
            _this.dataSource = resp;
        });
        this.marcasSv.marcas.subscribe(function (resp) {
            _this.marcas = resp;
        });
        this.categoriaSv.categories.subscribe(function (resp) {
            _this.categories = resp;
        });
        this.modelosSv.modelos.subscribe(function (resp) {
            _this.modelos = resp;
        });
    }
    ListVersionesComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    ListVersionesComponent.prototype.openEditModal = function (id, modal, marca, modelo, version, categoria) {
        this.idactual = id;
        marca != null ? this.versionForm.get('marca').setValue(marca) : "";
        modelo != null ? this.versionForm.get('modelo').setValue(modelo) : "";
        version != null ? this.versionForm.get('name').setValue(version) : "";
        categoria != null ? this.versionForm.get('category').setValue(categoria) : "";
        this.dialog.open(modal);
    };
    ListVersionesComponent.prototype.openDeleteModal = function (id, modal) {
        this.idactual = id;
        this.dialog.open(modal);
    };
    ListVersionesComponent.prototype.initForm = function () {
        this.versionForm = this.fb.group({
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            marca: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            modelo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    ListVersionesComponent.prototype.onGuardar = function () {
        if (this.versionForm.valid) {
            this.versionService.onSaveVersion(this.versionForm.value, this.idactual);
        }
    };
    ListVersionesComponent.prototype.onEliminar = function () {
        this.versionService.onDeleteVersion(this.idactual);
    };
    ListVersionesComponent.ctorParameters = function () { return [
        { type: src_app_services_versiones_service__WEBPACK_IMPORTED_MODULE_7__["VersionesService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
        { type: src_app_services_marcas_service__WEBPACK_IMPORTED_MODULE_5__["MarcasService"] },
        { type: src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_4__["CategoriasService"] },
        { type: src_app_services_modelos_service__WEBPACK_IMPORTED_MODULE_6__["ModelosService"] }
    ]; };
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
    return ListVersionesComponent;
}());



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


var MarcasPipe = /** @class */ (function () {
    function MarcasPipe() {
    }
    MarcasPipe.prototype.transform = function (value, arg) {
        var resultProduct = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var Vehicle = value_1[_i];
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
    };
    MarcasPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'marcas'
        })
    ], MarcasPipe);
    return MarcasPipe;
}());



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




var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_marcas_pipe__WEBPACK_IMPORTED_MODULE_3__["MarcasPipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ], exports: [_marcas_pipe__WEBPACK_IMPORTED_MODULE_3__["MarcasPipe"]]
        })
    ], PipesModule);
    return PipesModule;
}());



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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/index.js");




var MarcasService = /** @class */ (function () {
    function MarcasService(afs) {
        this.afs = afs;
        this.marcaCollection = afs.collection('marcas');
        this.getMarcas();
    }
    MarcasService.prototype.onDeleteMarca = function (categoryId) {
        var _this = this;
        return new Promise(function (resolve, reject) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                try {
                    result = this.marcaCollection.doc(categoryId).delete();
                    resolve(result);
                }
                catch (error) {
                    reject(error.message);
                }
                return [2 /*return*/];
            });
        }); });
    };
    MarcasService.prototype.onSaveMarca = function (marca, marcaId) {
        var _this = this;
        return new Promise(function (resolve, reject) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var id, data, result, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = marcaId || this.afs.createId();
                        data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ id: id }, marca);
                        return [4 /*yield*/, this.marcaCollection.doc(id).set(data)];
                    case 1:
                        result = _a.sent();
                        resolve(result);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        reject(error_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    MarcasService.prototype.getMarcas = function () {
        console.log('get marcas');
        this.marcas = this.marcaCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) { return a.payload.doc.data(); }); }));
    };
    MarcasService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
    ]; };
    MarcasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], MarcasService);
    return MarcasService;
}());



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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/index.js");




var ModelosService = /** @class */ (function () {
    function ModelosService(afs) {
        this.afs = afs;
        this.modeloCollection = afs.collection('modelos');
        this.getModelos();
    }
    ModelosService.prototype.onDeleteModelo = function (modeloId) {
        var _this = this;
        return new Promise(function (resolve, reject) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                try {
                    result = this.modeloCollection.doc(modeloId).delete();
                    resolve(result);
                }
                catch (error) {
                    reject(error.message);
                }
                return [2 /*return*/];
            });
        }); });
    };
    ModelosService.prototype.onSaveModelo = function (modelo, modeloId) {
        var _this = this;
        return new Promise(function (resolve, reject) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var id, data, result, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = modeloId || this.afs.createId();
                        data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ id: id }, modelo);
                        return [4 /*yield*/, this.modeloCollection.doc(id).set(data)];
                    case 1:
                        result = _a.sent();
                        resolve(result);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        reject(error_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    ModelosService.prototype.getModelos = function () {
        console.log('get modelos');
        this.modelos = this.modeloCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) { return a.payload.doc.data(); }); }));
    };
    ModelosService.prototype.getModelosforMarca = function (marca) {
        return this.afs.collection(('modelos'), function (ref) { return ref.where('marca', '==', marca); }).valueChanges();
    };
    ModelosService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
    ]; };
    ModelosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], ModelosService);
    return ModelosService;
}());



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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/index.js");




var VersionesService = /** @class */ (function () {
    function VersionesService(afs) {
        this.afs = afs;
        this.versionCollection = afs.collection('versiones');
        this.getVersiones();
    }
    VersionesService.prototype.onDeleteVersion = function (versionId) {
        var _this = this;
        return new Promise(function (resolve, reject) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                try {
                    result = this.versionCollection.doc(versionId).delete();
                    resolve(result);
                }
                catch (error) {
                    reject(error.message);
                }
                return [2 /*return*/];
            });
        }); });
    };
    VersionesService.prototype.onSaveVersion = function (version, versionId) {
        var _this = this;
        return new Promise(function (resolve, reject) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var id, data, result, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = versionId || this.afs.createId();
                        data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ id: id }, version);
                        return [4 /*yield*/, this.versionCollection.doc(id).set(data)];
                    case 1:
                        result = _a.sent();
                        resolve(result);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        reject(error_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    VersionesService.prototype.getVersiones = function () {
        console.log('get marcas');
        this.versiones = this.versionCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) { return a.payload.doc.data(); }); }));
    };
    VersionesService.prototype.getVersionesforMarcaModelo = function (marca, modelo) {
        return this.afs.collection(('versiones'), function (ref) { return ref.where('marca', '==', marca).where('modelo', '==', modelo); }).valueChanges();
    };
    VersionesService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
    ]; };
    VersionesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], VersionesService);
    return VersionesService;
}());



/***/ })

}]);
//# sourceMappingURL=default~admin-vehiculos-vehiculos-module~admin-versiones-versiones-module-es5.js.map