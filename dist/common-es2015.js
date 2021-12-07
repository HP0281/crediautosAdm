(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/modals/confirmacion/confirmacion.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/modals/confirmacion/confirmacion.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h6>{{message}}</h6>\r\n    <div class=\"actions\">\r\n        <button mat-button (click)=\"noClick()\">{{ cancel }}</button>\r\n        <button mat-button (click)=\"onContinue()\" *ngIf=\"!noresp\">{{ acept }}</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/modals/confirmacion/confirmacion-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/modals/confirmacion/confirmacion-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ConfirmacionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmacionRoutingModule", function() { return ConfirmacionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _confirmacion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmacion.component */ "./src/app/admin/modals/confirmacion/confirmacion.component.ts");




const routes = [{
        path: "", component: _confirmacion_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmacionComponent"]
    }];
let ConfirmacionRoutingModule = class ConfirmacionRoutingModule {
};
ConfirmacionRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ConfirmacionRoutingModule);



/***/ }),

/***/ "./src/app/admin/modals/confirmacion/confirmacion.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/admin/modals/confirmacion/confirmacion.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".actions{\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 25px 0;\r\n    justify-content: end;\r\n}\r\n.h6{\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbW9kYWxzL2NvbmZpcm1hY2lvbi9jb25maXJtYWNpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vbW9kYWxzL2NvbmZpcm1hY2lvbi9jb25maXJtYWNpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpb25ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxufVxyXG4uaDZ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/modals/confirmacion/confirmacion.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/modals/confirmacion/confirmacion.component.ts ***!
  \*********************************************************************/
/*! exports provided: ConfirmacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmacionComponent", function() { return ConfirmacionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");



let ConfirmacionComponent = class ConfirmacionComponent {
    constructor(dialogref, data) {
        this.dialogref = dialogref;
        this.data = data;
        this.noresp = false;
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.message) {
            this.message = this.data.message;
        }
        else {
            this.message = "Esta seguro de continuar?";
        }
        if ((_b = this.data) === null || _b === void 0 ? void 0 : _b.cancel) {
            this.cancel = this.data.cancel;
        }
        else {
            this.cancel = "Cancelar";
        }
        if ((_c = this.data) === null || _c === void 0 ? void 0 : _c.acept) {
            this.acept = this.data.acept;
        }
        else {
            this.acept = "Continuar";
        }
        if ((_d = this.data) === null || _d === void 0 ? void 0 : _d.noresp) {
            console.log(this.noresp + 'noresp');
            this.noresp = this.data.noresp;
        }
    }
    noClick() {
        this.dialogref.close();
    }
    onContinue() {
        this.dialogref.close(true);
    }
};
ConfirmacionComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ConfirmacionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirmacion',
        template: __webpack_require__(/*! raw-loader!./confirmacion.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/modals/confirmacion/confirmacion.component.html"),
        styles: [__webpack_require__(/*! ./confirmacion.component.css */ "./src/app/admin/modals/confirmacion/confirmacion.component.css")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], ConfirmacionComponent);



/***/ }),

/***/ "./src/app/admin/modals/confirmacion/confirmacion.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/modals/confirmacion/confirmacion.module.ts ***!
  \******************************************************************/
/*! exports provided: ConfirmacionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmacionModule", function() { return ConfirmacionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _confirmacion_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmacion-routing.module */ "./src/app/admin/modals/confirmacion/confirmacion-routing.module.ts");
/* harmony import */ var _confirmacion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./confirmacion.component */ "./src/app/admin/modals/confirmacion/confirmacion.component.ts");
/* harmony import */ var src_app_shared_material_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/material/material/material.module */ "./src/app/shared/material/material/material.module.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");







let ConfirmacionModule = class ConfirmacionModule {
};
ConfirmacionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_confirmacion_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmacionComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _confirmacion_routing_module__WEBPACK_IMPORTED_MODULE_3__["ConfirmacionRoutingModule"],
            src_app_shared_material_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]
        ],
        exports: [_confirmacion_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmacionComponent"]]
    })
], ConfirmacionModule);



/***/ }),

/***/ "./src/app/services/vehicles.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/vehicles.service.ts ***!
  \**********************************************/
/*! exports provided: VehiclesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesService", function() { return VehiclesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let VehiclesService = class VehiclesService {
    constructor(afs) {
        this.afs = afs;
        this.vehicleCollection = afs.collection('vehicles');
        this.getVehicles();
    }
    onDeleteVehicles(vehicleid) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = yield this.vehicleCollection.doc(vehicleid).delete();
                resolve(result);
            }
            catch (error) {
                reject(error.message);
            }
        }));
    }
    onSaveVehicle(vehicle, vechicleId) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const id = vechicleId || this.afs.createId();
                const data = Object.assign({ id }, vehicle);
                const result = yield this.vehicleCollection.doc(id).set(data);
                resolve(result);
            }
            catch (error) {
                reject(error.message);
            }
        }));
    }
    getVehicles() {
        this.vehicles = this.vehicleCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => actions.map(a => a.payload.doc.data())));
    }
    getVehiclesByIdVendor(id) {
        return this.afs.collection(('vehicles'), ref => ref.where('vendedor', '==', id)).valueChanges();
    }
    getVehiclesById(id) {
        return this.afs.collection(('vehicles'), ref => ref.where('id', '==', id)).valueChanges();
    }
};
VehiclesService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
VehiclesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
], VehiclesService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map