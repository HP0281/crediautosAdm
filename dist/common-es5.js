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
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var VehiclesService = /** @class */ (function () {
    function VehiclesService(afs) {
        this.afs = afs;
        this.vehicleCollection = afs.collection('vehicles');
        this.getVehicles();
    }
    VehiclesService.prototype.onDeleteVehicles = function (vehicleid) {
        var _this = this;
        return new Promise(function (resolve, reject) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var result, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.vehicleCollection.doc(vehicleid).delete()];
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
    VehiclesService.prototype.onSaveVehicle = function (vehicle, vechicleId) {
        var _this = this;
        return new Promise(function (resolve, reject) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var id, data, result, error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = vechicleId || this.afs.createId();
                        data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ id: id }, vehicle);
                        return [4 /*yield*/, this.vehicleCollection.doc(id).set(data)];
                    case 1:
                        result = _a.sent();
                        resolve(result);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        reject(error_2.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    VehiclesService.prototype.getVehicles = function () {
        this.vehicles = this.vehicleCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) { return actions.map(function (a) { return a.payload.doc.data(); }); }));
    };
    VehiclesService.prototype.getVehiclesByIdVendor = function (id) {
        return this.afs.collection(('vehicles'), function (ref) { return ref.where('vendedor', '==', id); }).valueChanges();
    };
    VehiclesService.prototype.getVehiclesById = function (id) {
        return this.afs.collection(('vehicles'), function (ref) { return ref.where('id', '==', id); }).valueChanges();
    };
    VehiclesService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    VehiclesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], VehiclesService);
    return VehiclesService;
}());



/***/ })

}]);
//# sourceMappingURL=common-es5.js.map