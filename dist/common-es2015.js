(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

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