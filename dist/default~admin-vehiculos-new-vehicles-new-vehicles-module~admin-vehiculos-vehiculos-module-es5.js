(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-vehiculos-new-vehicles-new-vehicles-module~admin-vehiculos-vehiculos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/vehiculos/new-vehicles/new-vehicles.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/vehiculos/new-vehicles/new-vehicles.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n    <div class=\"body-page\">\r\n        <div class=\"title\">\r\n            <h5>Agregar informacion de un vehiculo</h5>\r\n        </div>\r\n        <div class=\"form\">\r\n            <form [formGroup]=\"vehicleForm\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-6\">\r\n                        <div class=\"form-floating mb-3\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"floatingInput\" placeholder=\"Marca\" formControlName=\"marca\">\r\n                            <label for=\"floatingInput\">Marca</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <div class=\"form-floating mb-3\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"floatingInput\" placeholder=\"Modelo\" formControlName=\"modelo\">\r\n                            <label for=\"floatingInput\">Modelo</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-6\">\r\n                        <div class=\"form-floating mb-3\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"floatingInput\" placeholder=\"Version\" formControlName=\"version\">\r\n                            <label for=\"floatingInput\">Version</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <div class=\"form-floating mb-3\">\r\n                            <input type=\"number\" class=\"form-control\" id=\"floatingInput\" placeholder=\"Año de lanzamiento\" formControlName=\"year\">\r\n                            <label for=\"floatingInput\">Año</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-6\">\r\n                        <div class=\"form-floating mb-3\">\r\n                            <select class=\"form-control form-select form-select-lg mb-3\" aria-label=\".form-select-lg example\"\r\n                             formControlName=\"categoria\" id=\"floatingSelect\">\r\n                                <option [value]=\"category.name\" *ngFor=\"let category of categorias\">{{ category.name }}</option>\r\n                              </select>\r\n                              <label for=\"floatingSelect\">Seleccionar categoria</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <div class=\"form-floating mb-3\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"floatingInput\" placeholder=\"Tipo de carroceria\" formControlName=\"carroceria\">\r\n                            <label for=\"floatingInput\">Tipo de carroceria</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-6\">\r\n                        <div class=\"form-floating mb-3\">\r\n                            <input type=\"number\" class=\"form-control\" id=\"floatingInput\" placeholder=\"Numero de puertas\" formControlName=\"puertas\">\r\n                            <label for=\"floatingInput\">Numero de puertas</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <div class=\"form-floating mb-3\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"floatingInput\" placeholder=\"Tipo de direccion\" formControlName=\"direccion\">\r\n                            <label for=\"floatingInput\">Tipo de direccion</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-6\">\r\n                        <div class=\"form-floating mb-3\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"floatingInput\" placeholder=\"Tipo de trasmision\" formControlName=\"trasmision\">\r\n                            <label for=\"floatingInput\">Tipo de trasmision</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <div class=\"form-floating mb-3\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"floatingInput\" placeholder=\"Tipo de traccion\" formControlName=\"traccion\">\r\n                            <label for=\"floatingInput\">Tipo de traccion</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-6\">\r\n                        <div class=\"form-floating mb-3\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"floatingInput\" placeholder=\"Tipo de combustible\" formControlName=\"combustible\">\r\n                            <label for=\"floatingInput\">Tipo de Combustible</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"info\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 info-title\">\r\n                    <mat-expansion-panel>\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title>\r\n                                Equipamiento\r\n                            </mat-panel-title>\r\n                        </mat-expansion-panel-header>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-6 prueba\">\r\n                                <div>\r\n                                    <label for=\"dueñosi\">GPS</label>\r\n                                </div>\r\n                                <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                    <input type=\"radio\" class=\"btn-check\" name=\"gps\" id=\"gpssi\" autocomplete=\"off\"\r\n                                        (click)=\"asignarvalue('gps',true)\">\r\n                                    <label class=\"btn btn-outline-primary\" for=\"gpssi\">Si</label>\r\n                \r\n                                    <input type=\"radio\" class=\"btn-check\" name=\"gps\" id=\"gpsno\" autocomplete=\"off\"\r\n                                        (click)=\"asignarvalue('gps',false)\">\r\n                                    <label class=\"btn btn-outline-primary\" for=\"gpsno\">No</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-6 prueba\">\r\n                                <div>\r\n                                    <label for=\"dueñosi\">Asiento trasero abatible</label>\r\n                                </div>\r\n                                <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                    <input type=\"radio\" class=\"btn-check\" name=\"ata\" id=\"atasi\" autocomplete=\"off\"\r\n                                        (click)=\"asignarvalue('asientotabatible',true)\">\r\n                                    <label class=\"btn btn-outline-primary\" for=\"atasi\">Si</label>\r\n                \r\n                                    <input type=\"radio\" class=\"btn-check\" name=\"ata\" id=\"atano\" autocomplete=\"off\"\r\n                                        (click)=\"asignarvalue('asientotabatible',false)\">\r\n                                    <label class=\"btn btn-outline-primary\" for=\"atano\">No</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-6 prueba\">\r\n                                    <div>\r\n                                        <label for=\"dueñosi\">Techo corredizo</label>\r\n                                    </div>\r\n                                    <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                        <input type=\"radio\" class=\"btn-check\" name=\"techocor\" id=\"techosi\"\r\n                                            autocomplete=\"off\" (click)=\"asignarvalue('techocorredizo',true)\">\r\n                                        <label class=\"btn btn-outline-primary\" for=\"techosi\">Si</label>\r\n                \r\n                                        <input type=\"radio\" class=\"btn-check\" name=\"techocor\" id=\"techono\"\r\n                                            autocomplete=\"off\" (click)=\"asignarvalue('techocorredizo',false)\">\r\n                                        <label class=\"btn btn-outline-primary\" for=\"techono\">No</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-6 prueba\">\r\n                                    <div>\r\n                                        <label for=\"dueñosi\">Climatizador</label>\r\n                                    </div>\r\n                                    <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                        <input type=\"radio\" class=\"btn-check\" name=\"climatizador\" id=\"climasi\"\r\n                                            autocomplete=\"off\" (click)=\"asignarvalue('climatizador',true)\">\r\n                                        <label class=\"btn btn-outline-primary\" for=\"climasi\">Si</label>\r\n                \r\n                                        <input type=\"radio\" class=\"btn-check\" name=\"climatizador\" id=\"climano\"\r\n                                            autocomplete=\"off\" (click)=\"asignarvalue('climatizador',false)\">\r\n                                        <label class=\"btn btn-outline-primary\" for=\"climano\">No</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-6 prueba\">\r\n                                    <div>\r\n                                        <label for=\"dueñosi\">Porta equipaje en techo</label>\r\n                                    </div>\r\n                                    <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                        <input type=\"radio\" class=\"btn-check\" name=\"equipajet\" id=\"portatsi\"\r\n                                            autocomplete=\"off\" (click)=\"asignarvalue('portaequipajet',true)\">\r\n                                        <label class=\"btn btn-outline-primary\" for=\"portatsi\">Si</label>\r\n                \r\n                                        <input type=\"radio\" class=\"btn-check\" name=\"equipajet\" id=\"portateno\"\r\n                                            autocomplete=\"off\" (click)=\"asignarvalue('portaequipajet',false)\">\r\n                                        <label class=\"btn btn-outline-primary\" for=\"portateno\">No</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-6 prueba\">\r\n                                    <div>\r\n                                        <label for=\"dueñosi\">Camara de reverso</label>\r\n                                    </div>\r\n                                    <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                        <input type=\"radio\" class=\"btn-check\" name=\"camreverso\" id=\"camararsi\"\r\n                                            autocomplete=\"off\" (click)=\"asignarvalue('camarareversa',true)\">\r\n                                        <label class=\"btn btn-outline-primary\" for=\"camararsi\">Si</label>\r\n                \r\n                                        <input type=\"radio\" class=\"btn-check\" name=\"camreverso\" id=\"camararno\"\r\n                                            autocomplete=\"off\" (click)=\"asignarvalue('camarareversa',false)\">\r\n                                        <label class=\"btn btn-outline-primary\" for=\"camararno\">No</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-6 prueba\">\r\n                                    <div>\r\n                                        <label for=\"dueñosi\">Banca</label>\r\n                                    </div>\r\n                                    <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                        <input type=\"radio\" class=\"btn-check\" name=\"banca\" id=\"bancasi\"\r\n                                            autocomplete=\"off\" (click)=\"asignarvalue('banca',true)\">\r\n                                        <label class=\"btn btn-outline-primary\" for=\"bancasi\">Si</label>\r\n                \r\n                                        <input type=\"radio\" class=\"btn-check\" name=\"banca\" id=\"bancano\"\r\n                                            autocomplete=\"off\" (click)=\"asignarvalue('banca',false)\">\r\n                                        <label class=\"btn btn-outline-primary\" for=\"bancano\">No</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                    </mat-expansion-panel>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-12 info-title\">\r\n                   <mat-expansion-panel>\r\n                    <mat-expansion-panel-header>\r\n                        <mat-panel-title>\r\n                            Seguridad\r\n                        </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n                    <div class=\"row \">\r\n                        <div class=\"col-6 prueba\">\r\n                            <div>\r\n                                <label for=\"dueñosi\">Frenos ABS</label>\r\n                            </div>\r\n                            <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                <input type=\"radio\" class=\"btn-check\" name=\"abs\" id=\"abssi\" autocomplete=\"off\"\r\n                                    (click)=\"asignarvalue('abs',true)\">\r\n                                <label class=\"btn btn-outline-primary\" for=\"abssi\">Si</label>\r\n    \r\n                                <input type=\"radio\" class=\"btn-check\" name=\"abs\" id=\"absno\" autocomplete=\"off\"\r\n                                    (click)=\"asignarvalue('abs',false)\">\r\n                                <label class=\"btn btn-outline-primary\" for=\"absno\">No</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-6 prueba\">\r\n                            <div>\r\n                                <label for=\"dueñosi\">Alarma</label>\r\n                            </div>\r\n                            <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                <input type=\"radio\" class=\"btn-check\" name=\"alarma\" id=\"alarmasi\"\r\n                                    autocomplete=\"off\" (click)=\"asignarvalue('alarma',true)\">\r\n                                <label class=\"btn btn-outline-primary\" for=\"alarmasi\">Si</label>\r\n    \r\n                                <input type=\"radio\" class=\"btn-check\" name=\"alarma\" id=\"alarmano\"\r\n                                    autocomplete=\"off\" (click)=\"asignarvalue('alarma',false)\">\r\n                                <label class=\"btn btn-outline-primary\" for=\"alarmano\">No</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6 prueba\">\r\n                            <div>\r\n                                <label for=\"dueñosi\">Faros antitinieblas delanteros</label>\r\n                            </div>\r\n                            <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                <input type=\"radio\" class=\"btn-check\" name=\"fad\" id=\"fadsi\" autocomplete=\"off\"\r\n                                    (click)=\"asignarvalue('exploradorasd',true)\">\r\n                                <label class=\"btn btn-outline-primary\" for=\"fadsi\">Si</label>\r\n    \r\n                                <input type=\"radio\" class=\"btn-check\" name=\"fad\" id=\"fadno\" autocomplete=\"off\"\r\n                                    (click)=\"asignarvalue('exploradorasd',false)\">\r\n                                <label class=\"btn btn-outline-primary\" for=\"fadno\">No</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-6 prueba\">\r\n                            <div>\r\n                                <label for=\"dueñosi\">Airbag para conductor y pasajero</label>\r\n                            </div>\r\n                            <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                <input type=\"radio\" class=\"btn-check\" name=\"apcyp\" id=\"apcypsi\"\r\n                                    autocomplete=\"off\" (click)=\"asignarvalue('airbag',true)\">\r\n                                <label class=\"btn btn-outline-primary\" for=\"apcypsi\">Si</label>\r\n    \r\n                                <input type=\"radio\" class=\"btn-check\" name=\"apcyp\" id=\"apcypno\"\r\n                                    autocomplete=\"off\" (click)=\"asignarvalue('airbag',false)\">\r\n                                <label class=\"btn btn-outline-primary\" for=\"apcypno\">No</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6 prueba\">\r\n                            <div>\r\n                                <label for=\"dueñosi\">Sensor de lluvia</label>\r\n                            </div>\r\n                            <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                <input type=\"radio\" class=\"btn-check\" name=\"sensorl\" id=\"sensorlsi\"\r\n                                    autocomplete=\"off\" (click)=\"asignarvalue('sensorlluvia',true)\">\r\n                                <label class=\"btn btn-outline-primary\" for=\"sensorlsi\">Si</label>\r\n    \r\n                                <input type=\"radio\" class=\"btn-check\" name=\"sensorl\" id=\"sensorlno\"\r\n                                    autocomplete=\"off\" (click)=\"asignarvalue('sensorlluvia',false)\">\r\n                                <label class=\"btn btn-outline-primary\" for=\"sensorlno\">No</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-6 prueba\">\r\n                            <div>\r\n                                <label for=\"dueñosi\">Faros antitinieblas traseros</label>\r\n                            </div>\r\n                            <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                <input type=\"radio\" class=\"btn-check\" name=\"fatt\" id=\"fattsi\" autocomplete=\"off\"\r\n                                    (click)=\"asignarvalue('exploradorast',true)\">\r\n                                <label class=\"btn btn-outline-primary\" for=\"fattsi\">Si</label>\r\n    \r\n                                <input type=\"radio\" class=\"btn-check\" name=\"fatt\" id=\"fattno\" autocomplete=\"off\"\r\n                                    (click)=\"asignarvalue('exploradorast',false)\">\r\n                                <label class=\"btn btn-outline-primary\" for=\"fattno\">No</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6 prueba\">\r\n                            <div>\r\n                                <label for=\"dueñosi\">Desempañador trasero</label>\r\n                            </div>\r\n                            <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                <input type=\"radio\" class=\"btn-check\" name=\"desempañadort\" id=\"desempañasi\"\r\n                                    autocomplete=\"off\" (click)=\"asignarvalue('desempañadort',true)\">\r\n                                <label class=\"btn btn-outline-primary\" for=\"desempañasi\">Si</label>\r\n    \r\n                                <input type=\"radio\" class=\"btn-check\" name=\"desempañadort\" id=\"desempañano\"\r\n                                    autocomplete=\"off\" (click)=\"asignarvalue('desempañadort',false)\">\r\n                                <label class=\"btn btn-outline-primary\" for=\"desempañano\">No</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-6 prueba\">\r\n                            <div>\r\n                                <label for=\"dueñosi\">Barra anti vuelco</label>\r\n                            </div>\r\n                            <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                <input type=\"radio\" class=\"btn-check\" name=\"bav\" id=\"bavsi\" autocomplete=\"off\"\r\n                                    (click)=\"asignarvalue('barraantivuelco',true)\">\r\n                                <label class=\"btn btn-outline-primary\" for=\"bavsi\">Si</label>\r\n    \r\n                                <input type=\"radio\" class=\"btn-check\" name=\"bav\" id=\"bavno\" autocomplete=\"off\"\r\n                                    (click)=\"asignarvalue('barraantivuelco',false)\">\r\n                                <label class=\"btn btn-outline-primary\" for=\"bavno\">No</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6 prueba\">\r\n                            <div>\r\n                                <label for=\"dueñosi\">Control de estabilidad</label>\r\n                            </div>\r\n                            <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                <input type=\"radio\" class=\"btn-check\" name=\"cde\" id=\"cdesi\" autocomplete=\"off\"\r\n                                    (click)=\"asignarvalue('ctrestabilidad',true)\">\r\n                                <label class=\"btn btn-outline-primary\" for=\"cdesi\">Si</label>\r\n    \r\n                                <input type=\"radio\" class=\"btn-check\" name=\"cde\" id=\"cdino\" autocomplete=\"off\"\r\n                                    (click)=\"asignarvalue('ctrestabilidad',false)\">\r\n                                <label class=\"btn btn-outline-primary\" for=\"cdino\">No</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-6 prueba\">\r\n                            <div>\r\n                                <label for=\"dueñosi\">Blindado</label>\r\n                            </div>\r\n                            <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                <input type=\"radio\" class=\"btn-check\" name=\"blindado\" id=\"blindadosi\"\r\n                                    autocomplete=\"off\" (click)=\"asignarvalue('blindado',true)\">\r\n                                <label class=\"btn btn-outline-primary\" for=\"blindadosi\">Si</label>\r\n    \r\n                                <input type=\"radio\" class=\"btn-check\" name=\"blindado\" id=\"blindadono\"\r\n                                    autocomplete=\"off\" (click)=\"asignarvalue('blindado',false)\">\r\n                                <label class=\"btn btn-outline-primary\" for=\"blindadono\">No</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6 prueba\">\r\n                            <div>\r\n                                <label for=\"dueñosi\">Vidrio de seguridad</label>\r\n                            </div>\r\n                            <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                <input type=\"radio\" class=\"btn-check\" name=\"vds\" id=\"vdssi\" autocomplete=\"off\"\r\n                                    (click)=\"asignarvalue('vidrioseg',true)\">\r\n                                <label class=\"btn btn-outline-primary\" for=\"vdssi\">Si</label>\r\n    \r\n                                <input type=\"radio\" class=\"btn-check\" name=\"vds\" id=\"vdsno\" autocomplete=\"off\"\r\n                                    (click)=\"asignarvalue('vidrioseg',false)\">\r\n                                <label class=\"btn btn-outline-primary\" for=\"vdsno\">No</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                   </mat-expansion-panel>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-12 info-title\">\r\n                   <mat-expansion-panel>\r\n                       <mat-expansion-panel-header>\r\n                           Confort\r\n                       </mat-expansion-panel-header>\r\n                           <div class=\"row\">\r\n                               <div class=\"col-6 prueba\">\r\n                                   <div>\r\n                                       <label for=\"dueñosi\">Aire acondicionado</label>\r\n                                   </div>\r\n                                   <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"airc\" id=\"aircsi\" autocomplete=\"off\"\r\n                                           (click)=\"asignarvalue('aireacondicionado',true)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"aircsi\">Si</label>\r\n           \r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"airc\" id=\"aircno\" autocomplete=\"off\"\r\n                                           (click)=\"asignarvalue('aireacondicionado',false)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"aircno\">No</label>\r\n                                   </div>\r\n                               </div>\r\n                               <div class=\"col-6 prueba\">\r\n                                   <div>\r\n                                       <label for=\"dueñosi\">Regulacion de altura del volante</label>\r\n                                   </div>\r\n                                   <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"rdadv\" id=\"rdadvsi\"\r\n                                           autocomplete=\"off\" (click)=\"asignarvalue('regalturavolante',true)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"rdadvsi\">Si</label>\r\n           \r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"rdadv\" id=\"rdadvno\"\r\n                                           autocomplete=\"off\" (click)=\"asignarvalue('regalturavolante',false)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"rdadvno\">No</label>\r\n                                   </div>\r\n                               </div>\r\n                           </div>\r\n                           <div class=\"row\">\r\n                               <div class=\"col-6 prueba\">\r\n                                   <div>\r\n                                       <label for=\"dueñosi\">Retrovisores electricos</label>\r\n                                   </div>\r\n                                   <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"rtroe\" id=\"rtroesi\"\r\n                                           autocomplete=\"off\" (click)=\"asignarvalue('retrovisorelectrico',true)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"rtroesi\">Si</label>\r\n           \r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"rtroe\" id=\"rtroeno\"\r\n                                           autocomplete=\"off\" (click)=\"asignarvalue('retrovisorelectrico',false)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"rtroeno\">No</label>\r\n                                   </div>\r\n                               </div>\r\n                               <div class=\"col-6 prueba\">\r\n                                   <div>\r\n                                       <label for=\"dueñosi\">Luces con regulacion automatica</label>\r\n                                   </div>\r\n                                   <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"lcra\" id=\"lcrasi\" autocomplete=\"off\"\r\n                                           (click)=\"asignarvalue('luzregautomatica',true)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"lcrasi\">Si</label>\r\n           \r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"lcra\" id=\"lcrano\" autocomplete=\"off\"\r\n                                           (click)=\"asignarvalue('luzregautomatica',false)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"lcrano\">No</label>\r\n                                   </div>\r\n                               </div>\r\n                           </div>\r\n                           <div class=\"row\">\r\n                               <div class=\"col-6 prueba\">\r\n                                   <div>\r\n                                       <label for=\"dueñosi\">Tapizado de cuero</label>\r\n                                   </div>\r\n                                   <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"tdc\" id=\"tdcsi\" autocomplete=\"off\"\r\n                                           (click)=\"asignarvalue('tapizadocuero',true)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"tdcsi\">Si</label>\r\n           \r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"tdc\" id=\"tdcno\" autocomplete=\"off\"\r\n                                           (click)=\"asignarvalue('tapizadocuero',false)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"tdcno\">No</label>\r\n                                   </div>\r\n                               </div>\r\n                               <div class=\"col-6 prueba\">\r\n                                   <div>\r\n                                       <label for=\"dueñosi\">Tapizado de semicuero</label>\r\n                                   </div>\r\n                                   <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"tdsc\" id=\"tdscsi\" autocomplete=\"off\"\r\n                                           (click)=\"asignarvalue('tapizadosemicuero',true)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"tdscsi\">Si</label>\r\n           \r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"tdsc\" id=\"tdscno\" autocomplete=\"off\"\r\n                                           (click)=\"asignarvalue('tapizadosemicuero',false)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"tdscno\">No</label>\r\n                                   </div>\r\n                               </div>\r\n                           </div>\r\n                           <div class=\"row\">\r\n                               <div class=\"col-6 prueba\">\r\n                                   <div>\r\n                                       <label for=\"dueñosi\">Tapizado de tela</label>\r\n                                   </div>\r\n                                   <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"tdt\" id=\"tdtsi\" autocomplete=\"off\"\r\n                                           (click)=\"asignarvalue('tapizadotela',true)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"tdtsi\">Si</label>\r\n           \r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"tdt\" id=\"tdtno\" autocomplete=\"off\"\r\n                                           (click)=\"asignarvalue('tapizadotela',false)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"tdtno\">No</label>\r\n                                   </div>\r\n                               </div>\r\n                               <div class=\"col-6 prueba\">\r\n                                   <div>\r\n                                       <label for=\"dueñosi\">Sensor de parqueo</label>\r\n                                   </div>\r\n                                   <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"sensordp\" id=\"sensordpsi\"\r\n                                           autocomplete=\"off\" (click)=\"asignarvalue('sensorparqueo',true)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"sensordpsi\">Si</label>\r\n           \r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"sensordp\" id=\"sensordpno\"\r\n                                           autocomplete=\"off\" (click)=\"asignarvalue('sensorparqueo',false)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"sensordpno\">No</label>\r\n                                   </div>\r\n                               </div>\r\n                           </div>\r\n                           <div class=\"row\">\r\n                               <div class=\"col-6 prueba\">\r\n                                   <div>\r\n                                       <label for=\"dueñosi\">Vidrios electricos</label>\r\n                                   </div>\r\n                                   <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"vidriose\" id=\"vidriosesi\"\r\n                                           autocomplete=\"off\" (click)=\"asignarvalue('vidrioselect',true)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"vidriosesi\">Si</label>\r\n           \r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"vidriose\" id=\"vidrioseno\"\r\n                                           autocomplete=\"off\" (click)=\"asignarvalue('vidrioselect',false)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"vidrioseno\">No</label>\r\n                                   </div>\r\n                               </div>\r\n                               <div class=\"col-6 prueba\">\r\n                                   <div>\r\n                                       <label for=\"dueñosi\">Apertura remota de baul</label>\r\n                                   </div>\r\n                                   <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"ardb\" id=\"ardbsi\" autocomplete=\"off\"\r\n                                           (click)=\"asignarvalue('baulremoto',true)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"ardbsi\">Si</label>\r\n           \r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"ardb\" id=\"ardbno\" autocomplete=\"off\"\r\n                                           (click)=\"asignarvalue('baulremoto',false)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"ardbno\">No</label>\r\n                                   </div>\r\n                               </div>\r\n                           </div>\r\n                           <div class=\"row\">\r\n                               <div class=\"col-6 prueba\">\r\n                                   <div>\r\n                                       <label for=\"dueñosi\">Asientos electricos</label>\r\n                                   </div>\r\n                                   <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"asientose\" id=\"asientosesi\"\r\n                                           autocomplete=\"off\" (click)=\"asignarvalue('asientoelectricos',true)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"asientosesi\">Si</label>\r\n           \r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"asientose\" id=\"asientoseno\"\r\n                                           autocomplete=\"off\" (click)=\"asignarvalue('asientoelectricos',false)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"asientoseno\">No</label>\r\n                                   </div>\r\n                               </div>\r\n                               <div class=\"col-6 prueba\">\r\n                                   <div>\r\n                                       <label for=\"dueñosi\">Cierre centralizado de puertas</label>\r\n                                   </div>\r\n                                   <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"ccdp\" id=\"ccdpsi\" autocomplete=\"off\"\r\n                                           (click)=\"asignarvalue('puertascentralizado',true)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"ccdpsi\">Si</label>\r\n           \r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"ccdp\" id=\"ccdpno\" autocomplete=\"off\"\r\n                                           (click)=\"asignarvalue('puertascentralizado',false)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"ccdpno\">No</label>\r\n                                   </div>\r\n                               </div>\r\n                           </div>\r\n                           <div class=\"row\">\r\n                               <div class=\"col-6 prueba\">\r\n                                   <div>\r\n                                       <label for=\"dueñosi\">Manuales</label>\r\n                                   </div>\r\n                                   <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"manuales\" id=\"manualessi\"\r\n                                           autocomplete=\"off\" (click)=\"asignarvalue('manuales',true)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"manualessi\">Si</label>\r\n           \r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"manuales\" id=\"manualesno\"\r\n                                           autocomplete=\"off\" (click)=\"asignarvalue('manuales',false)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"manualesno\">No</label>\r\n                                   </div>\r\n                               </div>\r\n                               <div class=\"col-6 prueba\">\r\n                                   <div>\r\n                                       <label for=\"dueñosi\">Cierre automatico de vidrios</label>\r\n                                   </div>\r\n                                   <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"cadv\" id=\"cadvsi\" autocomplete=\"off\"\r\n                                           (click)=\"asignarvalue('cierrevidriosauto',true)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"cadvsi\">Si</label>\r\n           \r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"cadv\" id=\"cadvno\" autocomplete=\"off\"\r\n                                           (click)=\"asignarvalue('cierrevidriosauto',false)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"cadvno\">No</label>\r\n                                   </div>\r\n                               </div>\r\n                           </div>\r\n                   </mat-expansion-panel>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-12 info-title\">\r\n                    <mat-expansion-panel>\r\n                        <mat-expansion-panel-header>\r\n                            Sonido\r\n                        </mat-expansion-panel-header>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-6 prueba\">\r\n                                    <div>\r\n                                        <label for=\"dueñosi\">Bluetooth</label>\r\n                                    </div>\r\n                                    <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                        <input type=\"radio\" class=\"btn-check\" name=\"blue\" id=\"bluesi\" autocomplete=\"off\"\r\n                                            (click)=\"asignarvalue('bluetooth',true)\">\r\n                                        <label class=\"btn btn-outline-primary\" for=\"bluesi\">Si</label>\r\n            \r\n                                        <input type=\"radio\" class=\"btn-check\" name=\"blue\" id=\"blueno\" autocomplete=\"off\"\r\n                                            (click)=\"asignarvalue('bluetooth',false)\">\r\n                                        <label class=\"btn btn-outline-primary\" for=\"blueno\">No</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-6 prueba\">\r\n                                    <div>\r\n                                        <label for=\"dueñosi\">DVD</label>\r\n                                    </div>\r\n                                    <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                        <input type=\"radio\" class=\"btn-check\" name=\"dvd\" id=\"dvdsi\" autocomplete=\"off\"\r\n                                            (click)=\"asignarvalue('dvd',true)\">\r\n                                        <label class=\"btn btn-outline-primary\" for=\"dvdsi\">Si</label>\r\n            \r\n                                        <input type=\"radio\" class=\"btn-check\" name=\"dvd\" id=\"dvdno\" autocomplete=\"off\"\r\n                                            (click)=\"asignarvalue('dvd',false)\">\r\n                                        <label class=\"btn btn-outline-primary\" for=\"dvdno\">No</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-6 prueba\">\r\n                                    <div>\r\n                                        <label for=\"dueñosi\">Reproductor de MP3</label>\r\n                                    </div>\r\n                                    <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                        <input type=\"radio\" class=\"btn-check\" name=\"rdmp3\" id=\"rdmp3si\"\r\n                                            autocomplete=\"off\" (click)=\"asignarvalue('repmp3',true)\">\r\n                                        <label class=\"btn btn-outline-primary\" for=\"rdmp3si\">Si</label>\r\n            \r\n                                        <input type=\"radio\" class=\"btn-check\" name=\"rdmp3\" id=\"rdmp3no\"\r\n                                            autocomplete=\"off\" (click)=\"asignarvalue('repmp3',false)\">\r\n                                        <label class=\"btn btn-outline-primary\" for=\"rdmp3no\">No</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-6 prueba\">\r\n                                    <div>\r\n                                        <label for=\"dueñosi\">Entrada USB</label>\r\n                                    </div>\r\n                                    <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                        <input type=\"radio\" class=\"btn-check\" name=\"usb\" id=\"usbsi\" autocomplete=\"off\"\r\n                                            (click)=\"asignarvalue('entradausb',true)\">\r\n                                        <label class=\"btn btn-outline-primary\" for=\"usbsi\">Si</label>\r\n            \r\n                                        <input type=\"radio\" class=\"btn-check\" name=\"usb\" id=\"usbno\" autocomplete=\"off\"\r\n                                            (click)=\"asignarvalue('entradausb',false)\">\r\n                                        <label class=\"btn btn-outline-primary\" for=\"usbno\">No</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-6 prueba\">\r\n                                    <div>\r\n                                        <label for=\"dueñosi\">Equipo de sonido</label>\r\n                                    </div>\r\n                                    <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                        <input type=\"radio\" class=\"btn-check\" name=\"eds\" id=\"edssi\" autocomplete=\"off\"\r\n                                            (click)=\"asignarvalue('eds',true)\">\r\n                                        <label class=\"btn btn-outline-primary\" for=\"edssi\">Si</label>\r\n            \r\n                                        <input type=\"radio\" class=\"btn-check\" name=\"eds\" id=\"edsno\" autocomplete=\"off\"\r\n                                            (click)=\"asignarvalue('eds',false)\">\r\n                                        <label class=\"btn btn-outline-primary\" for=\"edsno\">No</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>    \r\n                    </mat-expansion-panel>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-12 info-title\">\r\n                   <mat-expansion-panel>\r\n                       <mat-expansion-panel-header>\r\n                           Equipamiento\r\n                       </mat-expansion-panel-header>\r\n                           <div class=\"row\">\r\n                               <div class=\"col-6 prueba\">\r\n                                   <div>\r\n                                       <label for=\"dueñosi\">Cubierta de platon</label>\r\n                                   </div>\r\n                                   <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"cdp\" id=\"cdpsi\" autocomplete=\"off\"\r\n                                           (click)=\"asignarvalue('cubiertaplaton',true)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"cdpsi\">Si</label>\r\n           \r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"cdp\" id=\"cdpno\" autocomplete=\"off\"\r\n                                           (click)=\"asignarvalue('cubiertaplaton',false)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"cdpno\">No</label>\r\n                                   </div>\r\n                               </div>\r\n                               <div class=\"col-6 prueba\">\r\n                                   <div>\r\n                                       <label for=\"dueñosi\">Plana</label>\r\n                                   </div>\r\n                                   <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"plana\" id=\"planasi\"\r\n                                           autocomplete=\"off\" (click)=\"asignarvalue('plana',true)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"planasi\">Si</label>\r\n           \r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"plana\" id=\"planano\"\r\n                                           autocomplete=\"off\" (click)=\"asignarvalue('plana',false)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"planano\">No</label>\r\n                                   </div>\r\n                               </div>\r\n                           </div>\r\n                           <div class=\"row\">\r\n                               <div class=\"col-6 prueba\">\r\n                                   <div>\r\n                                       <label for=\"dueñosi\">Estribos</label>\r\n                                   </div>\r\n                                   <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"estribos\" id=\"estribossi\"\r\n                                           autocomplete=\"off\" (click)=\"asignarvalue('estribos',true)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"estribossi\">Si</label>\r\n           \r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"estribos\" id=\"estribosno\"\r\n                                           autocomplete=\"off\" (click)=\"asignarvalue('estribos',false)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"estribosno\">No</label>\r\n                                   </div>\r\n                               </div>\r\n                               <div class=\"col-6 prueba\">\r\n                                   <div>\r\n                                       <label for=\"dueñosi\">Spoiler</label>\r\n                                   </div>\r\n                                   <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"spoiler\" id=\"spoilersi\"\r\n                                           autocomplete=\"off\" (click)=\"asignarvalue('spoiler',true)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"spoilersi\">Si</label>\r\n           \r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"spoiler\" id=\"spoilerno\"\r\n                                           autocomplete=\"off\" (click)=\"asignarvalue('spoiler',false)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"spoilerno\">No</label>\r\n                                   </div>\r\n                               </div>\r\n                           </div>\r\n                           <div class=\"row\">\r\n                               <div class=\"col-6 prueba\">\r\n                                   <div>\r\n                                       <label for=\"dueñosi\">Exploradoras</label>\r\n                                   </div>\r\n                                   <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"explo\" id=\"explosi\"\r\n                                           autocomplete=\"off\" (click)=\"asignarvalue('exploradoras',true)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"explosi\">Si</label>\r\n           \r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"explo\" id=\"explono\"\r\n                                           autocomplete=\"off\" (click)=\"asignarvalue('exploradoras',false)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"explono\">No</label>\r\n                                   </div>\r\n                               </div>\r\n                               <div class=\"col-6 prueba\">\r\n                                   <div>\r\n                                       <label for=\"dueñosi\">Llantas nuevas</label>\r\n                                   </div>\r\n                                   <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"llantasn\" id=\"llantasnsi\"\r\n                                           autocomplete=\"off\" (click)=\"asignarvalue('llantasn',true)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"llantasnsi\">Si</label>\r\n           \r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"llantasn\" id=\"llantasnno\"\r\n                                           autocomplete=\"off\" (click)=\"asignarvalue('llantasn',false)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"llantasnno\">No</label>\r\n                                   </div>\r\n                               </div>\r\n                           </div>\r\n                           <div class=\"row\">\r\n                               <div class=\"col-6 prueba\">\r\n                                   <div>\r\n                                       <label for=\"dueñosi\">Rines de lujo</label>\r\n                                   </div>\r\n                                   <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"rinluj\" id=\"rinlujsi\"\r\n                                           autocomplete=\"off\" (click)=\"asignarvalue('rineslujo',true)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"rinlujsi\">Si</label>\r\n           \r\n                                       <input type=\"radio\" class=\"btn-check\" name=\"rinluj\" id=\"rinlujno\"\r\n                                           autocomplete=\"off\" (click)=\"asignarvalue('rineslujo',false)\">\r\n                                       <label class=\"btn btn-outline-primary\" for=\"rinlujno\">No</label>\r\n                                   </div>\r\n                               </div>\r\n                           </div>\r\n                   </mat-expansion-panel>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"button\">\r\n            <button [disabled]=\"!vehicleForm.valid\" (click)=\"onGuardar()\">Guardar</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/vehiculos/new-vehicles/new-vehicles-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/vehiculos/new-vehicles/new-vehicles-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: NewVehiclesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewVehiclesRoutingModule", function() { return NewVehiclesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _new_vehicles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-vehicles.component */ "./src/app/admin/vehiculos/new-vehicles/new-vehicles.component.ts");




var routes = [{ path: "", component: _new_vehicles_component__WEBPACK_IMPORTED_MODULE_3__["NewVehiclesComponent"] }];
var NewVehiclesRoutingModule = /** @class */ (function () {
    function NewVehiclesRoutingModule() {
    }
    NewVehiclesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], NewVehiclesRoutingModule);
    return NewVehiclesRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/vehiculos/new-vehicles/new-vehicles.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/admin/vehiculos/new-vehicles/new-vehicles.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 50%;\r\n    margin: 20px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 20px;\r\n}\r\n.info-title{\r\n    width: 100%;\r\n}\r\n.info-title a{\r\n    display: flex !important;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    \r\n}\r\n.body-page{\r\n    justify-content: center;\r\n    width: 80%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.form{\r\n    width: 60%;\r\n    padding: 40px;\r\n    border-radius: 8px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.info{\r\n    width: 60%;\r\n    padding: 40px;\r\n    border-radius: 8px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.button{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    margin-right: 12rem;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n.button button{\r\n    width: 150px;\r\n    height: 3rem;\r\n}\r\nmat-expansion-panel-header{\r\n    height: 50px;\r\n    border-bottom: 1px solid white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdmVoaWN1bG9zL25ldy12ZWhpY2xlcy9uZXctdmVoaWNsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLDhCQUE4Qjs7QUFFbEM7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi92ZWhpY3Vsb3MvbmV3LXZlaGljbGVzL25ldy12ZWhpY2xlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5pbmZvLXRpdGxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmluZm8tdGl0bGUgYXtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBcclxufVxyXG4uYm9keS1wYWdle1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLmZvcm17XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uaW5mb3tcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi5idXR0b257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi1yaWdodDogMTJyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufSAgIFxyXG4uYnV0dG9uIGJ1dHRvbntcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogM3JlbTtcclxufVxyXG5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcntcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/vehiculos/new-vehicles/new-vehicles.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/vehiculos/new-vehicles/new-vehicles.component.ts ***!
  \************************************************************************/
/*! exports provided: NewVehiclesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewVehiclesComponent", function() { return NewVehiclesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/categorias.service */ "./src/app/services/categorias.service.ts");
/* harmony import */ var src_app_services_vehicles_info_basic_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/vehicles-info-basic.service */ "./src/app/services/vehicles-info-basic.service.ts");






var NewVehiclesComponent = /** @class */ (function () {
    function NewVehiclesComponent(fb, categoriaService, vehicleService, router) {
        var _a, _b;
        this.fb = fb;
        this.categoriaService = categoriaService;
        this.vehicleService = vehicleService;
        this.router = router;
        var navigation = this.router.getCurrentNavigation();
        this.vehicle = (_b = (_a = navigation === null || navigation === void 0 ? void 0 : navigation.extras) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b.value;
        this.initForm();
        this.getCategorias();
    }
    NewVehiclesComponent.prototype.ngOnInit = function () {
        if (typeof this.vehicle != 'undefined') {
            this.vehicleForm.patchValue(this.vehicle);
        }
        if (this.router.url === "/ver/vehicle") {
            console.log(this.router.url);
            this.vehicleForm.disable();
        }
        // else{
        //   this.router.navigate(['newvehicle']);
        // }
    };
    NewVehiclesComponent.prototype.initForm = function () {
        this.vehicleForm = this.fb.group({
            marca: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            modelo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            puertas: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            carroceria: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            trasmision: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            traccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            combustible: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            categoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            version: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            gps: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            asientotabatible: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            techocorredizo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            climatizador: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            portaequipajet: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            camarareversa: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            banca: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            abs: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            alarma: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            exploradorasd: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            airbag: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            sensorlluvia: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            exploradorast: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            desempañadort: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            barraantivuelco: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            ctrestabilidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            blindado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            vidrioseg: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            aireacondicionado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            regalturavolante: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            retrovisorelectrico: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            luzregautomatica: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            tapizadocuero: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            tapizadosemicuero: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            tapizadotela: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            sensorparqueo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            vidrioselect: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            baulremoto: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            asientoelectricos: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            puertascentralizado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            manuales: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            cierrevidriosauto: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            bluetooth: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            dvd: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            repmp3: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            entradausb: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            eds: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            cubiertaplaton: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            plana: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            estribos: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            exploradoras: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            llantasn: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            rineslujo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            spoiler: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            garfabrica: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            garmecanica: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            negociable: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            venpermuta: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            domicilio: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            testdrivD: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            dochome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    };
    NewVehiclesComponent.prototype.asignarvalue = function (nomvar, valor) {
        switch (nomvar) {
            case 'gps':
                this.vehicleForm.get('gps').setValue(valor);
                break;
            case 'asientotabatible':
                this.vehicleForm.get('asientotabatible').setValue(valor);
                break;
            case 'techocorredizo':
                this.vehicleForm.get('techocorredizo').setValue(valor);
                break;
            case 'climatizador':
                this.vehicleForm.get('climatizador').setValue(valor);
                break;
            case 'portaequipajet':
                this.vehicleForm.get('portaequipajet').setValue(valor);
                break;
            case 'camarareversa':
                this.vehicleForm.get('camarareversa').setValue(valor);
                break;
            case 'banca':
                this.vehicleForm.get('banca').setValue(valor);
                break;
            case 'abs':
                this.vehicleForm.get('abs').setValue(valor);
                break;
            case 'alarma':
                this.vehicleForm.get('alarma').setValue(valor);
                break;
            case 'exploradorasd':
                this.vehicleForm.get('exploradorasd').setValue(valor);
                break;
            case 'airbag':
                this.vehicleForm.get('airbag').setValue(valor);
                break;
            case 'sensorlluvia':
                this.vehicleForm.get('sensorlluvia').setValue(valor);
                break;
            case 'exploradorast':
                this.vehicleForm.get('exploradorast').setValue(valor);
                break;
            case 'desempañadort':
                this.vehicleForm.get('desempañadort').setValue(valor);
                break;
            case 'barraantivuelco':
                this.vehicleForm.get('barraantivuelco').setValue(valor);
                break;
            case 'ctrestabilidad':
                this.vehicleForm.get('ctrestabilidad').setValue(valor);
                break;
            case 'blindado':
                this.vehicleForm.get('blindado').setValue(valor);
                break;
            case 'aireacondicionado':
                this.vehicleForm.get('aireacondicionado').setValue(valor);
                break;
            case 'vidrioseg':
                this.vehicleForm.get('vidrioseg').setValue(valor);
                break;
            case 'regalturavolante':
                this.vehicleForm.get('regalturavolante').setValue(valor);
                break;
            case 'retrovisorelectrico':
                this.vehicleForm.get('retrovisorelectrico').setValue(valor);
                break;
            case 'luzregautomatica':
                this.vehicleForm.get('luzregautomatica').setValue(valor);
                break;
            case 'tapizadocuero':
                this.vehicleForm.get('tapizadocuero').setValue(valor);
                break;
            case 'tapizadosemicuero':
                this.vehicleForm.get('tapizadosemicuero').setValue(valor);
                break;
            case 'tapizadotela':
                this.vehicleForm.get('tapizadotela').setValue(valor);
                break;
            case 'sensorparqueo':
                this.vehicleForm.get('sensorparqueo').setValue(valor);
                break;
            case 'vidrioselect':
                this.vehicleForm.get('vidrioselect').setValue(valor);
                break;
            case 'baulremoto':
                this.vehicleForm.get('baulremoto').setValue(valor);
                break;
            case 'asientoelectricos':
                this.vehicleForm.get('asientoelectricos').setValue(valor);
                break;
            case 'puertascentralizado':
                this.vehicleForm.get('puertascentralizado').setValue(valor);
                break;
            case 'manuales':
                this.vehicleForm.get('manuales').setValue(valor);
                break;
            case 'cierrevidriosauto':
                this.vehicleForm.get('cierrevidriosauto').setValue(valor);
                break;
            case 'bluetooth':
                this.vehicleForm.get('bluetooth').setValue(valor);
                break;
            case 'dvd':
                this.vehicleForm.get('dvd').setValue(valor);
                break;
            case 'repmp3':
                this.vehicleForm.get('repmp3').setValue(valor);
                break;
            case 'entradausb':
                this.vehicleForm.get('entradausb').setValue(valor);
                break;
            case 'eds':
                this.vehicleForm.get('eds').setValue(valor);
                break;
            case 'cubiertaplaton':
                this.vehicleForm.get('cubiertaplaton').setValue(valor);
                break;
            case 'plana':
                this.vehicleForm.get('plana').setValue(valor);
                break;
            case 'estribos':
                this.vehicleForm.get('estribos').setValue(valor);
                break;
            case 'exploradoras':
                this.vehicleForm.get('exploradoras').setValue(valor);
                break;
            case 'llantasn':
                this.vehicleForm.get('llantasn').setValue(valor);
                break;
            case 'rineslujo':
                this.vehicleForm.get('rineslujo').setValue(valor);
                break;
            case 'spoiler':
                this.vehicleForm.get('spoiler').setValue(valor);
                break;
            case 'garfabrica':
                this.vehicleForm.get('garfabrica').setValue(valor);
                break;
            case 'garmecanica':
                this.vehicleForm.get('garmecanica').setValue(valor);
                break;
            case 'negociable':
                this.vehicleForm.get('negociable').setValue(valor);
                break;
            case 'venpermuta':
                this.vehicleForm.get('venpermuta').setValue(valor);
                break;
            case 'domicilio':
                this.vehicleForm.get('domicilio').setValue(valor);
                break;
            case 'testdrivD':
                this.vehicleForm.get('testdrivD').setValue(valor);
                break;
            case 'dochome':
                this.vehicleForm.get('dochome').setValue(valor);
                break;
            case 'marca':
                this.vehicleForm.get('marca').setValue(valor);
                break;
            case 'modelo':
                this.vehicleForm.get('modelo').setValue(valor);
                break;
            case 'year':
                this.vehicleForm.get('year').setValue(valor);
                break;
            case 'puertas':
                this.vehicleForm.get('puertas').setValue(valor);
                break;
            case 'version':
                this.vehicleForm.get('version').setValue(valor);
                break;
            case 'modelo':
                this.vehicleForm.get('modelo').setValue(valor);
                break;
            default:
                break;
        }
    };
    NewVehiclesComponent.prototype.getCategorias = function () {
        var _this = this;
        this.categoriaService.categories.subscribe(function (resp) {
            _this.categorias = resp;
        });
    };
    NewVehiclesComponent.prototype.onGuardar = function () {
        this.vehicleService.onSaveVehicle(this.vehicleForm.value, null);
        console.log(this.vehicleForm.value);
    };
    NewVehiclesComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_4__["CategoriasService"] },
        { type: src_app_services_vehicles_info_basic_service__WEBPACK_IMPORTED_MODULE_5__["VehiclesInfoBasicService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    NewVehiclesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-vehicles',
            template: __webpack_require__(/*! raw-loader!./new-vehicles.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/vehiculos/new-vehicles/new-vehicles.component.html"),
            styles: [__webpack_require__(/*! ./new-vehicles.component.css */ "./src/app/admin/vehiculos/new-vehicles/new-vehicles.component.css")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_4__["CategoriasService"],
            src_app_services_vehicles_info_basic_service__WEBPACK_IMPORTED_MODULE_5__["VehiclesInfoBasicService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewVehiclesComponent);
    return NewVehiclesComponent;
}());



/***/ }),

/***/ "./src/app/admin/vehiculos/new-vehicles/new-vehicles.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/vehiculos/new-vehicles/new-vehicles.module.ts ***!
  \*********************************************************************/
/*! exports provided: NewVehiclesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewVehiclesModule", function() { return NewVehiclesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _new_vehicles_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-vehicles-routing.module */ "./src/app/admin/vehiculos/new-vehicles/new-vehicles-routing.module.ts");
/* harmony import */ var _new_vehicles_new_vehicles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../new-vehicles/new-vehicles.component */ "./src/app/admin/vehiculos/new-vehicles/new-vehicles.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");







var NewVehiclesModule = /** @class */ (function () {
    function NewVehiclesModule() {
    }
    NewVehiclesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_new_vehicles_new_vehicles_component__WEBPACK_IMPORTED_MODULE_4__["NewVehiclesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _new_vehicles_routing_module__WEBPACK_IMPORTED_MODULE_3__["NewVehiclesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"]
            ],
            exports: [_new_vehicles_new_vehicles_component__WEBPACK_IMPORTED_MODULE_4__["NewVehiclesComponent"]]
        })
    ], NewVehiclesModule);
    return NewVehiclesModule;
}());



/***/ }),

/***/ "./src/app/services/vehicles-info-basic.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/vehicles-info-basic.service.ts ***!
  \*********************************************************/
/*! exports provided: VehiclesInfoBasicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesInfoBasicService", function() { return VehiclesInfoBasicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var VehiclesInfoBasicService = /** @class */ (function () {
    function VehiclesInfoBasicService(afs) {
        this.afs = afs;
        this.vehicleCollection = afs.collection('vehicleInfo');
        this.getVehicles();
    }
    VehiclesInfoBasicService.prototype.onDeleteVehicles = function (vehicleid) {
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
    VehiclesInfoBasicService.prototype.onSaveVehicle = function (vehicle, vechicleId) {
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
    VehiclesInfoBasicService.prototype.getVehicles = function () {
        this.vehicles = this.vehicleCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) { return actions.map(function (a) { return a.payload.doc.data(); }); }));
    };
    VehiclesInfoBasicService.prototype.getVehiclesforMarca = function (marca) {
        return this.afs.collection(('vehicleInfo'), function (ref) { return ref.where('marca', '==', marca); }).valueChanges();
    };
    VehiclesInfoBasicService.prototype.getVehiclesforMarcaModelo = function (marca, modelo) {
        return this.afs.collection(('vehicleInfo'), function (ref) { return ref.where('marca', '==', marca).where('modelo', '==', modelo); }).valueChanges();
    };
    VehiclesInfoBasicService.prototype.getVehiclesInfoById = function (id) {
        return this.afs.collection(('vehicleInfo'), function (ref) { return ref.where('id', '==', id); }).valueChanges();
    };
    VehiclesInfoBasicService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    VehiclesInfoBasicService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], VehiclesInfoBasicService);
    return VehiclesInfoBasicService;
}());



/***/ })

}]);
//# sourceMappingURL=default~admin-vehiculos-new-vehicles-new-vehicles-module~admin-vehiculos-vehiculos-module-es5.js.map