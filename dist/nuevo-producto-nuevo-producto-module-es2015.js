(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nuevo-producto-nuevo-producto-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/components/modules/productos/nuevo-producto/nuevo-producto.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/components/modules/productos/nuevo-producto/nuevo-producto.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid page\">\r\n    <div class=\"body\">\r\n        <div class=\"container form\">\r\n            <div class=\"title\">\r\n                <div class=\"title-text\">\r\n                    <p>Paso {{ paso }} de 2</p>\r\n                    <h4>Empieza describiendo tu vehiculo</h4>\r\n                </div>\r\n                <div class=\"title-img\">\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"form1 target\">\r\n                <h5>Escoge un titulo para tu publicacion</h5>\r\n                <form [formGroup]=\"vehicleForm\" class=\"vehicleForm\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"ejemplo: Renault Symbol\"\r\n                        formControlName=\"marcamodelo\">\r\n                </form>\r\n                <button type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"!vehicleForm.valid\"\r\n                    (click)=\"onContinue('titulo')\" *ngIf=\"progreso=== 0\">Continuar</button>\r\n            </div>\r\n            <div class=\"form2 target\" *ngIf=\"progreso > 0\">\r\n                <p>Elige el vehiculo que quieres vender</p>\r\n                <div class=\"category\">\r\n                    <h4>¿A qué categoría pertenece tu vehiculo?</h4>\r\n                    <div class=\"bread\">\r\n                        <nav aria-label=\"breadcrumb\">\r\n                            <ol class=\"breadcrumb\">\r\n                                <li class=\"breadcrumb-item\"><a class=\"link\" (click)=\"back('categoria')\">{{ category }}</a></li>\r\n                                <li class=\"breadcrumb-item\" *ngIf=\"marca != null\"><a class=\"link\" (click)=\"back('marca')\">{{ marca }}</a></li>\r\n                                <li class=\"breadcrumb-item\" *ngIf=\"modelo != null\"><a class=\"link\" (click)=\"back('modelo')\">{{ modelo }}</a></li>\r\n                                <li class=\"breadcrumb-item\" *ngIf=\"year != null\"><a class=\"link\" (click)=\"back('year')\">{{ year }}</a></li>\r\n                                <li class=\"breadcrumb-item\" *ngIf=\"version != null\"><a class=\"link\" (click)=\"back('version')\">{{ version }}</a></li>\r\n                            </ol>\r\n                        </nav>\r\n                    </div>\r\n                    <div class=\"list-group\" *ngIf=\"progreso === 1\">\r\n                        <button type=\"button\" class=\"list-group-item list-group-item-action\"\r\n                            (click)=\"onCategory(category.name)\" *ngFor=\"let category of categories\">{{ category.name\r\n                            }}</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"marca\" *ngIf=\"progreso === 2\">\r\n                <div class=\"target\">\r\n                    <h4>¿Cual es la marca?</h4>\r\n                    <input type=\"text\" id=\"marca\" class=\"form-control\" placeholder=\"Buscar marca\">\r\n                    <div class=\"contenido-scroleable\">\r\n                        <span>MAS USADOS</span>\r\n                        <div class=\"list-group marcas\" id=\"listmarca\">\r\n                            <button type=\"button\"  class=\"list-group-item list-group-item-action\"\r\n                                (click)=\"onMarca(marca.name)\" *ngFor=\"let marca of marcas\">{{ marca.name }}</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <script>\r\n                $(document).ready(function(){\r\n                  $(\"#marca\").on(\"keyup\", function() {\r\n                    var value = $(this).val().toLowerCase();\r\n                    $(\"#listmarca *\").filter(function() {\r\n                      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)\r\n                    });\r\n                  });\r\n                });\r\n                </script>\r\n            <div class=\"modelo\" *ngIf=\"progreso === 3\">\r\n                <div class=\"target\">\r\n                    <h4>¿Cual es el modelo de tu {{ marca }}?</h4>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Buscar modelo\">\r\n                    <div class=\"contenido-scroleable\">\r\n                        <span>MAS USADOS</span>\r\n                        <div class=\"list-group marcas\">\r\n                            <button type=\"button\" class=\"list-group-item list-group-item-action\"\r\n                                (click)=\"onModelo(modelo.name)\" *ngFor=\"let modelo of modelos\">{{ modelo.name\r\n                                }}</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"año\" *ngIf=\"progreso === 4\">\r\n                <div class=\"target\">\r\n                    <h4>¿De que año es tu {{ marca }}?</h4>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Buscar año\">\r\n                    <div class=\"contenido-scroleable\">\r\n                        <div class=\"list-group marcas\">\r\n                            <button type=\"button\" class=\"list-group-item list-group-item-action\"\r\n                                (click)=\"onYear(year.year)\" *ngFor=\"let year of years\">{{ year.year }}</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"version\" *ngIf=\"progreso === 5\">\r\n                <div class=\"target\">\r\n                    <h4>¿Cual es la versíon de tu {{ marca }}?</h4>\r\n                    <div class=\"list-group\">\r\n                        <button type=\"button\" class=\"list-group-item list-group-item-action\"\r\n                            (click)=\"onVersion(version.name)\"\r\n                            *ngFor=\"let version of versions\">{{version.name}}</button>\r\n                        <button type=\"button\" class=\"list-group-item list-group-item-action\"\r\n                            (click)=\"onVersion('otros')\">otros</button>\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn btn-outline-primary botones\" [disabled]=\"version === null\"\r\n                        (click)=\"onContinue('version')\" *ngIf=\"progreso ===5\">Continuar</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"kilometraje\" *ngIf=\"progreso === 6\">\r\n                <div class=\"target\">\r\n                    <h5>¿Cuantos Kilometros tiene?</h5>\r\n                    <form [formGroup]=\"kilometrajeForm\">\r\n                        <input type=\"number\" class=\"form-control\" placeholder=\"ejemplo: 50.000\"\r\n                            formControlName=\"kilometraje\">\r\n                    </form>\r\n                    <button type=\"button\" class=\"btn btn-outline-primary botones\" [disabled]=\"!kilometrajeForm.valid\"\r\n                        (click)=\"onContinue('kilometraje')\">Continuar</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"color\" *ngIf=\"progreso === 7\">\r\n                <div class=\"target\">\r\n                    <h5>¿De que color es tu vehiculo?</h5>\r\n                    <form [formGroup]=\"colorForm\">\r\n                        <select class=\"form-select\" aria-label=\"Default select example\" formControlName=\"color\">\r\n                            <option selected>Elegir</option>\r\n                            <option value=\"Blanco\">Blanco</option>\r\n                            <option value=\"Gris\">Gris</option>\r\n                            <option value=\"Negro\">Negro</option>\r\n                        </select>\r\n                    </form>\r\n                    <button type=\"button\" class=\"btn btn-outline-primary botones\" [disabled]=\"!colorForm.valid\"\r\n                        (click)=\"onContinue('color')\">Continuar</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"formprincipal\" *ngIf=\"progreso === 8\">\r\n                <div class=\"target\">\r\n                    <div class=\"head-principal\">\r\n                        <div class=\"text-head-principal\">\r\n                            <h5>¡Ya tenemos las caracteristicas de tu vehiculo!</h5>\r\n                            <p>Los datos de tu aparecerán en tu publicación para que tus compradores no tengan dudas.\r\n                            </p>\r\n                        </div>\r\n                        <div class=\"img-head-principal\">\r\n                            <img src=\"\" alt=\"\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"formp\">\r\n                        <form [formGroup]=\"formPrincipal\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                    <div class=\"form-floating\">\r\n                                        <input type=\"text\" class=\"form-control\" id=\"marca\" placeholder=\"Marca\"\r\n                                            formControlName=\"marca\">\r\n                                        <label for=\"marca\">Marca</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-6\">\r\n                                    <div class=\"form-floating\">\r\n                                        <input type=\"text\" class=\"form-control\" id=\"modelo\" placeholder=\"Modelo\"\r\n                                            formControlName=\"modelo\">\r\n                                        <label for=\"modelo\">Modelo</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                    <div class=\"form-floating\">\r\n                                        <input type=\"text\" class=\"form-control\" id=\"año\" placeholder=\"Año\"\r\n                                            formControlName=\"year\">\r\n                                        <label for=\"año\">Año</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-6\">\r\n                                    <div class=\"form-floating\">\r\n                                        <input type=\"text\" class=\"form-control\" id=\"version\" placeholder=\"Versíon\"\r\n                                            formControlName=\"version\">\r\n                                        <label for=\"version\">Versíon</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                    <label for=\"tcombustible\" class=\"form-label\">Tipo de combustible (requerido)</label>\r\n                                    <input class=\"form-control\" list=\"listcombustible\" id=\"tcombustible\"\r\n                                        placeholder=\"Elegir..\" formControlName=\"tcombustible\">\r\n                                    <datalist id=\"listcombustible\">\r\n                                        <option value=\"Gasolina\">\r\n                                        <option value=\"Gasolina y gas\">\r\n                                        <option value=\"Diesel\">\r\n                                        <option value=\"Electrico\">\r\n                                        <option value=\"Hibrido\">\r\n                                    </datalist>\r\n                                </div>\r\n                                <div class=\"col-6\">\r\n                                    <div class=\"form-floating\">\r\n                                        <input type=\"text\" class=\"form-control\" id=\"puertas\" placeholder=\"Puertas\"\r\n                                            formControlName=\"puertas\">\r\n                                        <label for=\"puertas\">Puertas (requerido)</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                    <label for=\"direccion\" class=\"form-label\">Direccion</label>\r\n                                    <input class=\"form-control\" list=\"tdireccion\" id=\"direccion\" placeholder=\"Elegir..\"\r\n                                        formControlName=\"direccion\">\r\n                                    <datalist id=\"tdireccion\">\r\n                                        <option value=\"Hidraulica\">\r\n                                        <option value=\"Mecanica\">\r\n                                    </datalist>\r\n                                </div>\r\n                                <div class=\"col-6\">\r\n                                    <label for=\"trasmision\" class=\"form-label\">Trasmision (requerido)</label>\r\n                                    <input class=\"form-control\" list=\"ttrasmision\" id=\"trasmision\"\r\n                                        placeholder=\"Elegir..\" formControlName=\"trasmision\">\r\n                                    <datalist id=\"ttrasmision\">\r\n                                        <option value=\"Mecanica\">\r\n                                        <option value=\"Automatica\">\r\n                                    </datalist>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                    <label for=\"traccion\" class=\"form-label\">Control de traccion</label>\r\n                                    <input class=\"form-control\" list=\"ttraccion\" id=\"traccion\" placeholder=\"Elegir..\"\r\n                                        formControlName=\"traccion\">\r\n                                    <datalist id=\"ttraccion\">\r\n                                        <option value=\"Delantera\">\r\n                                        <option value=\"Trasera\">\r\n                                        <option value=\"4*4\"></option>\r\n                                    </datalist>\r\n                                </div>\r\n                                <div class=\"col-6\">\r\n                                    <div class=\"form-floating\">\r\n                                        <input type=\"text\" class=\"form-control\" id=\"Motor\" placeholder=\"Motor\"\r\n                                            formControlName=\"motor\">\r\n                                        <label for=\"Motor\">Motor</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                    <label for=\"carroceria\" class=\"form-label\">Tipo de carroceria</label>\r\n                                    <input class=\"form-control\" list=\"tcarroceria\" id=\"carroceria\"\r\n                                        placeholder=\"Elegir..\" formControlName=\"carroceria\">\r\n                                    <datalist id=\"tcarroceria\">\r\n                                        <option value=\"Sedan\">\r\n                                        <option value=\"Coupe\">\r\n                                        <option value=\"Hasback\"></option>\r\n                                    </datalist>\r\n                                </div>\r\n                                <div class=\"col-6\">\r\n                                    <div class=\"form-floating\">\r\n                                        <input type=\"text\" class=\"form-control\" id=\"cilindrada\" placeholder=\"Cilindrada\"\r\n                                            formControlName=\"cilindrada\">\r\n                                        <label for=\"cilindrada\">Cilindrada</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                    <div class=\"form-floating\">\r\n                                        <input type=\"text\" class=\"form-control\" id=\"placa\" placeholder=\"Placa\"\r\n                                            formControlName=\"placa\">\r\n                                        <label for=\"placa\">Placa (requerido)</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-6 prueba\">\r\n                                    Unico dueño\r\n                                    <label class=\"switch-wrap switch-success ml-2\">\r\n                                        <input type=\"checkbox\"  formControlName=\"unicodueño\"/>\r\n                                        <div class=\"switch\"></div>\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-12\">\r\n                                    <mat-expansion-panel>\r\n                                        <mat-expansion-panel-header>\r\n                                            <mat-panel-title>\r\n                                                Mas informacion\r\n                                            </mat-panel-title>\r\n                                        </mat-expansion-panel-header>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-6 prueba\">\r\n                                                Asegurado\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"seguro\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-6 prueba\">\r\n                                                Tecnicomecanica\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"tecno\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </mat-expansion-panel>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-12\">\r\n                                    <mat-expansion-panel>\r\n                                        <mat-expansion-panel-header>\r\n                                            <mat-panel-title>\r\n                                                <h6>Equipamiento</h6>\r\n                                            </mat-panel-title>\r\n                                        </mat-expansion-panel-header>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-6 prueba\">\r\n                                                GPS\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"gps\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-6 prueba\">\r\n                                                Asiento trasero abatible\r\n                                                    <label class=\"switch-wrap switch-success ml-2\">\r\n                                                        <input type=\"checkbox\"  formControlName=\"asientotabatible\"/>\r\n                                                        <div class=\"switch\"></div>\r\n                                                    </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-6 prueba\">\r\n                                                Techo corredizo\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"techocorredizo\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-6 prueba\">\r\n                                                Climatizador\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"climatizador\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-6 prueba\">\r\n                                                Porta equipaje en techo\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"portaequipajet\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-6 prueba\">\r\n                                                Camara de reverso\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"camarareversa\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-6 prueba\">\r\n                                                Banca\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"banca\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </mat-expansion-panel>\r\n                                </div>\r\n                            </div>\r\n                            \r\n                            <div class=\"row\">\r\n                                <div class=\"col-12\">\r\n                                    <mat-expansion-panel>\r\n                                        <mat-expansion-panel-header>\r\n                                            <mat-panel-title>\r\n                                                <h6>Seguridad</h6>\r\n                                            </mat-panel-title>\r\n                                        </mat-expansion-panel-header>\r\n                                        <div class=\"row \">\r\n                                            <div class=\"col-6 prueba\">\r\n                                                Frenos ABS\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"abs\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-6 prueba\">\r\n                                                Alarma\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"alarma\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-6 prueba\">\r\n                                                Faros antitinieblas delanteros\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"exploradorasd\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-6 prueba\">\r\n                                                Airbag para conductor y pasajero\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"airbag\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-6 prueba\">\r\n                                                >Sensor de lluvia\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"sensorlluvia\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-6 prueba\">\r\n                                                Faros antitinieblas traseros\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"exploradorast\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-6 prueba\">\r\n                                                Desempañador trasero\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"desempañadort\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-6 prueba\">\r\n                                                Barra anti vuelco\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"barraantivuelco\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-6 prueba\">\r\n                                                Control de estabilidad\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"ctrestabilidad\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-6 prueba\">\r\n                                                Blindado\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"blindado\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-6 prueba\">\r\n                                                Vidrio de seguridad\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"vidrioseg\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </mat-expansion-panel>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-12\">\r\n                                    <mat-expansion-panel>\r\n                                        <mat-expansion-panel-header>\r\n                                            <mat-panel-title>\r\n                                                <h6>Confort</h6>\r\n                                            </mat-panel-title>\r\n                                        </mat-expansion-panel-header>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Aire acondicionado</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"aireacondicionado\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Regulacion de altura del volante</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"regalturavolante\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Retrovisores electricos</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"retrovisorelectrico\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Luces con regulacion automatica</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"luzregautomatica\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Tapizado de cuero</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"tapizadocuero\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Tapizado de semicuero</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"tapizadosemicuero\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Tapizado de tela</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"tapizadotela\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Sensor de parqueo</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"sensorparqueo\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Vidrios electricos</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"vidrioselect\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Apertura remota de baul</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"baulremoto\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Asientos electricos</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"asientoelectricos\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Cierre centralizado de puertas</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"puertascentralizado\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Manuales</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"manuales\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Cierre automatico de vidrios</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"cierrevidriosauto\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </mat-expansion-panel>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-12\">\r\n                                    <mat-expansion-panel>\r\n                                        <mat-expansion-panel-header>\r\n                                            <mat-panel-title>\r\n                                                <h6>Sonido</h6>\r\n                                            </mat-panel-title>\r\n                                        </mat-expansion-panel-header>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Bluetooth</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"bluetooth\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">DVD</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"dvd\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Reproductor de MP3</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"repmp3\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Entrada USB</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"entradausb\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Equipo de sonido</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"eds\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </mat-expansion-panel>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-12\">\r\n                                    <mat-expansion-panel>\r\n                                        <mat-expansion-panel-header>\r\n                                            <mat-panel-title>\r\n                                                <h6>Otros</h6>\r\n                                            </mat-panel-title>\r\n                                        </mat-expansion-panel-header>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Cubierta de platon</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"cubiertaplaton\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Plana</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"plana\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Estribos</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"estribos\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Spoiler</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"spoiler\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Exploradoras</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"exploradoras\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Llantas nuevas</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"llantasn\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Rines de lujo</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"rineslujo\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </mat-expansion-panel>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-12\">\r\n                                    <mat-expansion-panel>\r\n                                        <mat-expansion-panel-header>\r\n                                            <mat-panel-title>\r\n                                                <h6>Garantia y condiciones</h6>\r\n                                            </mat-panel-title>\r\n                                        </mat-expansion-panel-header>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Garantia de fabrica</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"garfabrica\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Garantia mecanica</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"garmecanica\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Negociable</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"negociable\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Vempermuta</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"venpermuta\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Entrega a domicilio</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"domicilio\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Test drive a domicilio</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"testdrivD\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-6 prueba\">\r\n                                                <div>\r\n                                                    <label for=\"dueñosi\">Documentacion en casa</label>\r\n                                                </div>\r\n                                                <label class=\"switch-wrap switch-success ml-2\">\r\n                                                    <input type=\"checkbox\"  formControlName=\"dochome\"/>\r\n                                                    <div class=\"switch\"></div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </mat-expansion-panel>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                        <button type=\"button\" class=\"btn btn-outline-primary botones\" [disabled]=\"!formPrincipal.valid\"\r\n                            (click)=\"onContinue('principal')\">Continuar</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"target\" *ngIf=\"progreso === 9\">\r\n                <h6>Cual es el valor de tu {{marca}} {{modelo}}</h6>\r\n                <div>\r\n                    <div class=\"form-floating\">\r\n                        <form [formGroup]=\"valorform\">\r\n                            <input type=\"number\" class=\"form-control\" id=\"valor\" placeholder=\"Precio de tu vehiculo\"\r\n                                formControlName=\"valor\">\r\n                            <label for=\"marca\">Valor</label>\r\n                        </form>\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn btn-outline-primary botones\" [disabled]=\"!colorForm.valid\"\r\n                        (click)=\"onContinue('valor')\">Continuar</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"uploadimg target\" *ngIf=\"progreso > 9 \">\r\n                <h5>Selecciona la foto de tu vehiculo</h5>\r\n                <input type=\"file\" (change)=\"uploadImg($event)\" accept=\"image/*\">\r\n                <progress max=\"100\" [value]=\"uploadProgress | async\"></progress>\r\n            </div>\r\n            <div class=\"row\">\r\n                <button class=\"btn btn-outline-primary \" *ngIf=\"formPrincipal.valid && progreso > 9\" [disabled]=\"!cargo\"\r\n                    (click)=\"onguardar()\">Guardar</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"footer\">\r\n        <div class=\"footer-content\">\r\n            <footer class=\"text-center footer-style\">\r\n                <nav>\r\n                    <a href=\"\">Trabaja con nosotros</a>\r\n                    <a href=\"\">Terminos y condiciones</a>\r\n                    <a href=\"\">Como cuidamos tu privacidad</a>\r\n                    <a href=\"\">Ayuda /PQR</a>\r\n                    <a href=\"\">www.sic.gov.co</a>\r\n                </nav>\r\n                <small> Copyright © 2012-2021 Boyaca Web</small>\r\n"

/***/ }),

/***/ "./src/app/layout/components/modules/productos/nuevo-producto/nuevo-producto-routing.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/components/modules/productos/nuevo-producto/nuevo-producto-routing.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: NuevoProductoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoProductoRoutingModule", function() { return NuevoProductoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nuevo_producto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nuevo-producto.component */ "./src/app/layout/components/modules/productos/nuevo-producto/nuevo-producto.component.ts");




const routes = [
    { path: '', component: _nuevo_producto_component__WEBPACK_IMPORTED_MODULE_3__["NuevoProductoComponent"] }
];
let NuevoProductoRoutingModule = class NuevoProductoRoutingModule {
};
NuevoProductoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], NuevoProductoRoutingModule);



/***/ }),

/***/ "./src/app/layout/components/modules/productos/nuevo-producto/nuevo-producto.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/components/modules/productos/nuevo-producto/nuevo-producto.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".prueba{\r\n    margin: 20px 0px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    width: 48%;\r\n}\r\n.marcas{\r\n    height: 250px;\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvbW9kdWxlcy9wcm9kdWN0b3MvbnVldm8tcHJvZHVjdG8vbnVldm8tcHJvZHVjdG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvbW9kdWxlcy9wcm9kdWN0b3MvbnVldm8tcHJvZHVjdG8vbnVldm8tcHJvZHVjdG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcnVlYmF7XHJcbiAgICBtYXJnaW46IDIwcHggMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogNDglO1xyXG59XHJcbi5tYXJjYXN7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/components/modules/productos/nuevo-producto/nuevo-producto.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/layout/components/modules/productos/nuevo-producto/nuevo-producto.component.ts ***!
  \************************************************************************************************/
/*! exports provided: NuevoProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoProductoComponent", function() { return NuevoProductoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_vehicles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/vehicles.service */ "./src/app/services/vehicles.service.ts");
/* harmony import */ var src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth-service.service */ "./src/app/services/auth-service.service.ts");
/* harmony import */ var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/categorias.service */ "./src/app/services/categorias.service.ts");
/* harmony import */ var src_app_services_marcas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/marcas.service */ "./src/app/services/marcas.service.ts");
/* harmony import */ var src_app_services_modelos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/modelos.service */ "./src/app/services/modelos.service.ts");
/* harmony import */ var src_app_services_versiones_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/versiones.service */ "./src/app/services/versiones.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/storage/es2015/index.js");












let NuevoProductoComponent = class NuevoProductoComponent {
    constructor(fb, vehicleService, router, auth, categoryService, marcasService, modelosService, versionService, _storage) {
        var _a, _b;
        this.fb = fb;
        this.vehicleService = vehicleService;
        this.router = router;
        this.auth = auth;
        this.categoryService = categoryService;
        this.marcasService = marcasService;
        this.modelosService = modelosService;
        this.versionService = versionService;
        this._storage = _storage;
        this.cargo = false;
        const navigation = router.getCurrentNavigation();
        this.vehicle = (_b = (_a = navigation.extras) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b.value;
        this.initForm();
        console.log(auth._userinfo);
        this.paso = 1;
        this.progreso = 0;
        this.headers = ['pqr'];
        this.getCategories();
        this.getMarcas();
        this.years = [];
    }
    ngOnInit() {
        if (typeof this.vehicle === 'undefined') {
            // this.router.navigate(['publicarForm']);
        }
        else {
            this.formPrincipal.patchValue(this.vehicle);
            this.llenarformularios();
            console.log(this.vehicle.id);
        }
    }
    onContinue(paso) {
        switch (paso) {
            case 'titulo':
                if (this.vehicleForm.valid) {
                    this.progreso++;
                }
                break;
            case 'category':
                if (this.category) {
                    this.progreso++;
                }
                break;
            case 'marca':
                if (this.marca) {
                    this.progreso++;
                    this.getModelos(this.marca);
                    this.getVehicles(this.auth._userinfo.uid);
                }
                break;
            case 'modelo':
                if (this.modelo) {
                    this.progreso++;
                    this.initYears();
                }
                break;
            case 'año':
                if (this.year) {
                    this.progreso++;
                    this.getVersions(this.marca, this.modelo);
                }
                break;
            case 'version':
                if (this.version) {
                    this.progreso++;
                }
                break;
            case 'kilometraje':
                if (this.kilometrajeForm.get('kilometraje').value) {
                    this.progreso++;
                }
                break;
            case 'color':
                if (this.colorForm.get('color').value) {
                    this.progreso++;
                    this.paso++;
                    this.patchvalues();
                }
                ;
                break;
            case 'valor':
                console.log(this.valorform.get('valor').value);
                if (this.valorform.get('valor').value) {
                    this.progreso++;
                    this.asignarvalue('valor', this.valorform.get('valor').value);
                }
                break;
            case 'principal':
                this.progreso++;
                break;
            case 'img':
                // this.uploadURL.subscribe((resp:any)=>{
                //   this.asignarvalue('urlimg', resp);
                // })
                this.progreso++;
                break;
            default:
                break;
        }
    }
    onCategory(category) {
        this.category = category;
        this.onContinue('category');
    }
    onMarca(marca) {
        this.marca = marca;
        this.onContinue('marca');
    }
    onModelo(modelo) {
        this.modelo = modelo;
        this.onContinue('modelo');
    }
    onYear(year) {
        this.year = year;
        this.onContinue('año');
    }
    onVersion(version) {
        this.version = version;
    }
    llenarformularios() {
        this.valorform.get('valor').setValue(this.vehicle.valor);
        this.vehicleForm.get('marcamodelo').setValue(this.vehicle.desc);
        this.kilometrajeForm.get('kilometraje').setValue(this.vehicle.kilometraje);
        this.colorForm.get('color').setValue(this.vehicle.color);
        this.category = this.vehicle.categoria;
        this.marca = this.vehicle.marca;
        this.modelo = this.vehicle.modelo;
        this.version = this.vehicle.version;
        this.year = this.vehicle.year;
    }
    initForm() {
        this.valorform = this.fb.group({
            valor: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
        this.vehicleForm = this.fb.group({
            marcamodelo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
        this.kilometrajeForm = this.fb.group({
            kilometraje: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
        this.colorForm = this.fb.group({
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
        this.formPrincipal = this.fb.group({
            marca: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            modelo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            version: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            tcombustible: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            puertas: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            trasmision: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            traccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            motor: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            carroceria: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            cilindrada: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            placa: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            categoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            vendedor: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            urlimg: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            unicodueño: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            tecno: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            seguro: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            gps: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            asientotabatible: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            techocorredizo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            climatizador: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            portaequipajet: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            camarareversa: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            banca: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            abs: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            alarma: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            exploradorasd: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            airbag: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            sensorlluvia: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            exploradorast: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            desempañadort: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            barraantivuelco: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            ctrestabilidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            blindado: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            vidrioseg: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            aireacondicionado: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            regalturavolante: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            retrovisorelectrico: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            luzregautomatica: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            tapizadocuero: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            tapizadosemicuero: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            tapizadotela: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            sensorparqueo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            vidrioselect: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            baulremoto: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            asientoelectricos: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            puertascentralizado: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            manuales: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            cierrevidriosauto: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            bluetooth: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            dvd: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            repmp3: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            entradausb: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            eds: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            cubiertaplaton: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            plana: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            estribos: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            exploradoras: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            llantasn: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            rineslujo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            spoiler: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            garfabrica: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            garmecanica: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            negociable: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            venpermuta: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            domicilio: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            testdrivD: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            dochome: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            valor: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    asignarvalue(nomvar, valor) {
        switch (nomvar) {
            case 'unicodue':
                this.formPrincipal.get('unicodueño').setValue(valor);
                break;
            case 'tecno':
                this.formPrincipal.get('tecno').setValue(valor);
                break;
            case 'seguro':
                this.formPrincipal.get('seguro').setValue(valor);
                break;
            case 'gps':
                this.formPrincipal.get('gps').setValue(valor);
                break;
            case 'asientotabatible':
                this.formPrincipal.get('asientotabatible').setValue(valor);
                break;
            case 'techocorredizo':
                this.formPrincipal.get('techocorredizo').setValue(valor);
                break;
            case 'climatizador':
                this.formPrincipal.get('climatizador').setValue(valor);
                break;
            case 'portaequipajet':
                this.formPrincipal.get('portaequipajet').setValue(valor);
                break;
            case 'camarareversa':
                this.formPrincipal.get('camarareversa').setValue(valor);
                break;
            case 'banca':
                this.formPrincipal.get('banca').setValue(valor);
                break;
            case 'abs':
                this.formPrincipal.get('abs').setValue(valor);
                break;
            case 'alarma':
                this.formPrincipal.get('alarma').setValue(valor);
                break;
            case 'exploradorasd':
                this.formPrincipal.get('exploradorasd').setValue(valor);
                break;
            case 'airbag':
                this.formPrincipal.get('airbag').setValue(valor);
                break;
            case 'sensorlluvia':
                this.formPrincipal.get('sensorlluvia').setValue(valor);
                break;
            case 'exploradorast':
                this.formPrincipal.get('exploradorast').setValue(valor);
                break;
            case 'desempañadort':
                this.formPrincipal.get('desempañadort').setValue(valor);
                break;
            case 'barraantivuelco':
                this.formPrincipal.get('barraantivuelco').setValue(valor);
                break;
            case 'ctrestabilidad':
                this.formPrincipal.get('ctrestabilidad').setValue(valor);
                break;
            case 'blindado':
                this.formPrincipal.get('blindado').setValue(valor);
                break;
            case 'aireacondicionado':
                this.formPrincipal.get('aireacondicionado').setValue(valor);
                break;
            case 'vidrioseg':
                this.formPrincipal.get('vidrioseg').setValue(valor);
                break;
            case 'regalturavolante':
                this.formPrincipal.get('regalturavolante').setValue(valor);
                break;
            case 'retrovisorelectrico':
                this.formPrincipal.get('retrovisorelectrico').setValue(valor);
                break;
            case 'luzregautomatica':
                this.formPrincipal.get('luzregautomatica').setValue(valor);
                break;
            case 'tapizadocuero':
                this.formPrincipal.get('tapizadocuero').setValue(valor);
                break;
            case 'tapizadosemicuero':
                this.formPrincipal.get('tapizadosemicuero').setValue(valor);
                break;
            case 'tapizadotela':
                this.formPrincipal.get('tapizadotela').setValue(valor);
                break;
            case 'sensorparqueo':
                this.formPrincipal.get('sensorparqueo').setValue(valor);
                break;
            case 'vidrioselect':
                this.formPrincipal.get('vidrioselect').setValue(valor);
                break;
            case 'baulremoto':
                this.formPrincipal.get('baulremoto').setValue(valor);
                break;
            case 'asientoelectricos':
                this.formPrincipal.get('asientoelectricos').setValue(valor);
                break;
            case 'puertascentralizado':
                this.formPrincipal.get('puertascentralizado').setValue(valor);
                break;
            case 'manuales':
                this.formPrincipal.get('manuales').setValue(valor);
                break;
            case 'cierrevidriosauto':
                this.formPrincipal.get('cierrevidriosauto').setValue(valor);
                break;
            case 'bluetooth':
                this.formPrincipal.get('bluetooth').setValue(valor);
                break;
            case 'dvd':
                this.formPrincipal.get('dvd').setValue(valor);
                break;
            case 'repmp3':
                this.formPrincipal.get('repmp3').setValue(valor);
                break;
            case 'entradausb':
                this.formPrincipal.get('entradausb').setValue(valor);
                break;
            case 'eds':
                this.formPrincipal.get('eds').setValue(valor);
                break;
            case 'cubiertaplaton':
                this.formPrincipal.get('cubiertaplaton').setValue(valor);
                break;
            case 'plana':
                this.formPrincipal.get('plana').setValue(valor);
                break;
            case 'estribos':
                this.formPrincipal.get('estribos').setValue(valor);
                break;
            case 'exploradoras':
                this.formPrincipal.get('exploradoras').setValue(valor);
                break;
            case 'llantasn':
                this.formPrincipal.get('llantasn').setValue(valor);
                break;
            case 'rineslujo':
                this.formPrincipal.get('rineslujo').setValue(valor);
                break;
            case 'spoiler':
                this.formPrincipal.get('spoiler').setValue(valor);
                break;
            case 'garfabrica':
                this.formPrincipal.get('garfabrica').setValue(valor);
                break;
            case 'garmecanica':
                this.formPrincipal.get('garmecanica').setValue(valor);
                break;
            case 'negociable':
                this.formPrincipal.get('negociable').setValue(valor);
                break;
            case 'venpermuta':
                this.formPrincipal.get('venpermuta').setValue(valor);
                break;
            case 'domicilio':
                this.formPrincipal.get('domicilio').setValue(valor);
                break;
            case 'testdrivD':
                this.formPrincipal.get('testdrivD').setValue(valor);
                break;
            case 'dochome':
                this.formPrincipal.get('dochome').setValue(valor);
                break;
            case 'marca':
                this.formPrincipal.get('marca').setValue(valor);
                break;
            case 'modelo':
                this.formPrincipal.get('modelo').setValue(valor);
                break;
            case 'year':
                this.formPrincipal.get('year').setValue(valor);
                break;
            case 'puertas':
                this.formPrincipal.get('puertas').setValue(valor);
                break;
            case 'version':
                this.formPrincipal.get('version').setValue(valor);
                break;
            case 'modelo':
                this.formPrincipal.get('modelo').setValue(valor);
                break;
            case 'urlimg':
                this.formPrincipal.get('urlimg').setValue(valor);
                break;
            case 'desc':
                this.formPrincipal.get('desc').setValue(valor);
                break;
            case 'valor':
                this.formPrincipal.get('valor').setValue(valor);
                break;
            case 'categoria':
                this.formPrincipal.get('categoria').setValue(valor);
                break;
            default:
                break;
        }
        console.log(this.formPrincipal.get('unicodueño').value);
    }
    onguardar() {
        if (this.formPrincipal.valid) {
            const vehicle = this.formPrincipal.value;
            const vehicleid = this.vehicle.id || null;
            this.vehicleService.onSaveVehicle(vehicle, vehicleid);
            console.log(vehicleid);
            //this.vehicleInfoService.onSaveVehicle(vehicle, vehicleid );
            alert('registro creado correctamente');
            this.router.navigate(['/productos/listar-productos']);
        }
    }
    onLogout() {
        this.auth.logOut();
    }
    patchvalues() {
        this.asignarvalue('marca', this.marca);
        this.asignarvalue('modelo', this.modelo);
        this.asignarvalue('version', this.version);
        this.asignarvalue('year', this.year);
        this.asignarvalue('vendedor', this.auth._userinfo.uid);
        this.asignarvalue('categoria', this.category);
        this.asignarvalue('desc', this.vehicleForm.get('marcamodelo').value);
    }
    getCategories() {
        this.categoryService.categories.subscribe((resp) => {
            this.categories = resp;
            console.log(this.categories);
        });
    }
    getMarcas() {
        this.marcasService.marcas.subscribe((resp) => {
            this.marcas = resp;
        });
    }
    getModelos(marca) {
        console.log('resultado marcas');
        this.modelosService.getModelosforMarca(marca).subscribe((resp) => {
            console.log(resp);
            this.modelos = resp;
        });
    }
    getVersions(marca, modelo) {
        this.versionService.getVersionesforMarcaModelo(marca, modelo).subscribe((resp) => {
            this.versions = resp;
        });
    }
    getVehicles(id) {
        this.vehicleService.getVehiclesById(id).subscribe((resp) => {
            console.log(resp);
        });
    }
    initYears() {
        let yearact = 2022;
        for (let index = 0; index < 30; index++) {
            this.years.push({ "year": yearact });
            yearact--;
        }
    }
    uploadImg(event) {
        const file = event.target.files[0];
        const randomId = Math.random().toString(36).substring(2);
        const filepath = `images/${randomId}`;
        const fileref = this._storage.ref(filepath);
        const task = this._storage.upload(filepath, file);
        this.uploadProgress = task.percentageChanges();
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
            this.uploadURL = fileref.getDownloadURL();
            this.cargo = true;
            this.uploadURL.subscribe((resp) => {
                this.asignarvalue('urlimg', resp);
            });
        })).subscribe();
        this.onContinue('img');
    }
    back(opt) {
        switch (opt) {
            case 'marca':
                this.progreso = 2;
                break;
            case 'modelo':
                this.progreso = 3;
                break;
            case 'version':
                this.progreso = 5;
                break;
            case 'year':
                this.progreso = 4;
                break;
            case 'categoria':
                this.progreso = 1;
                break;
            default:
                break;
        }
    }
};
NuevoProductoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_vehicles_service__WEBPACK_IMPORTED_MODULE_4__["VehiclesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthServiceService"] },
    { type: src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_6__["CategoriasService"] },
    { type: src_app_services_marcas_service__WEBPACK_IMPORTED_MODULE_7__["MarcasService"] },
    { type: src_app_services_modelos_service__WEBPACK_IMPORTED_MODULE_8__["ModelosService"] },
    { type: src_app_services_versiones_service__WEBPACK_IMPORTED_MODULE_9__["VersionesService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorage"] }
];
NuevoProductoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nuevo-producto',
        template: __webpack_require__(/*! raw-loader!./nuevo-producto.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/components/modules/productos/nuevo-producto/nuevo-producto.component.html"),
        styles: [__webpack_require__(/*! ./nuevo-producto.component.css */ "./src/app/layout/components/modules/productos/nuevo-producto/nuevo-producto.component.css")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_services_vehicles_service__WEBPACK_IMPORTED_MODULE_4__["VehiclesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthServiceService"],
        src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_6__["CategoriasService"],
        src_app_services_marcas_service__WEBPACK_IMPORTED_MODULE_7__["MarcasService"],
        src_app_services_modelos_service__WEBPACK_IMPORTED_MODULE_8__["ModelosService"],
        src_app_services_versiones_service__WEBPACK_IMPORTED_MODULE_9__["VersionesService"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorage"]])
], NuevoProductoComponent);



/***/ }),

/***/ "./src/app/layout/components/modules/productos/nuevo-producto/nuevo-producto.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/components/modules/productos/nuevo-producto/nuevo-producto.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: NuevoProductoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoProductoModule", function() { return NuevoProductoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _nuevo_producto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nuevo-producto.component */ "./src/app/layout/components/modules/productos/nuevo-producto/nuevo-producto.component.ts");
/* harmony import */ var _nuevo_producto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nuevo-producto-routing.module */ "./src/app/layout/components/modules/productos/nuevo-producto/nuevo-producto-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");









let NuevoProductoModule = class NuevoProductoModule {
};
NuevoProductoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_nuevo_producto_component__WEBPACK_IMPORTED_MODULE_4__["NuevoProductoComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _nuevo_producto_routing_module__WEBPACK_IMPORTED_MODULE_5__["NuevoProductoRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"]
        ]
    })
], NuevoProductoModule);



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
//# sourceMappingURL=nuevo-producto-nuevo-producto-module-es2015.js.map