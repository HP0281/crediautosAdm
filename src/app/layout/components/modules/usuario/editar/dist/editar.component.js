"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EditarComponent = void 0;
var core_1 = require("@angular/core");
var usuario_1 = require("src/app/models/usuario");
var empresa_1 = require("src/app/models/empresa");
var EditarComponent = /** @class */ (function () {
    function EditarComponent(serviceUsuario, rolService, empresaService, serviceModal, tokenService) {
        this.serviceUsuario = serviceUsuario;
        this.rolService = rolService;
        this.empresaService = empresaService;
        this.serviceModal = serviceModal;
        this.tokenService = tokenService;
        this.usuario = new usuario_1.Usuario(); //importante a la hora de editar un componente debe estar inicializado en memoria
        this.roles = [];
        this.actualizado = false;
        this.failActualizado = false;
        this.msjErr = '';
        this.msjOK = '';
        this.verSeleccion = '';
        this.opcionSeleccionado = '0';
        this.info = {};
        this.loader = true;
        this.empresa = false;
        this.empresas = [];
        this.empresaSeleccionada = '0';
        this.password = '';
        this.passwordNueva = '';
        this.confirmacionPassword = '';
        this.isDomiciliario = false;
        this.isRecepcionista = false;
        this.isAdministrador = false;
        this.isUsuarioFinal = false;
        this.isEmpresa = false;
    }
    EditarComponent.prototype.ngOnInit = function () {
        this.editar();
        //  this.cargarRoles();
        this.cargarEmpresas();
        this.asignarPermisos();
        // alert("id de rol del usuario es:"+this.idRolUsuario);
    };
    EditarComponent.prototype.cargarEmpresas = function () {
        var _this = this;
        this.empresaService.getEmpresas().subscribe(function (data) {
            _this.empresas = data;
        }), function (err) {
            alert("no se cargaron las empresas");
        };
    };
    EditarComponent.prototype.consignar = function (modal) {
        // this.usuario = usuario;
        this.serviceModal.open(modal);
    };
    EditarComponent.prototype.editar = function () {
        var _this = this;
        var id = localStorage.getItem("id_usuario");
        this.serviceUsuario.getUsuarioId(+id)
            .subscribe(function (data) {
            _this.loader = false;
            _this.usuario = data;
            //  this.idRolUsuario = data.rol.id;
            _this.idUsuario = data.id;
            console.log("datos al cargar" + data.rol.id);
            _this.cargarRoles();
            _this.rolService.getRolId(data.rol.id).subscribe(function (data) {
                _this.info = {
                    id: data.id,
                    nombre: data.rolNombre
                };
            });
        });
        // console.log("el usuario es"+usu)
    };
    EditarComponent.prototype.cargarRoles = function () {
        var _this = this;
        this.rolService.getRoles().subscribe(function (data) {
            data.forEach(function (element) {
                console.log(_this.usuario);
                console.log(element.rolNombre + "==" + _this.usuario.roles[0]);
                if (element.rolNombre == "ADMINISTRADOR") {
                }
                else if (element.rolNombre == _this.usuario.rol.rolNombre) {
                }
                else
                    _this.roles.push(element);
            });
        }, function (err) {
            console.log(err);
        });
        //console.log(this.tipoProductos);
    };
    EditarComponent.prototype.validadorNombre = function (event) {
        var pattern = /^[a-zA-Z ]*$/;
        //let inputChar = String.fromCharCode(event.charCode)
        if (!pattern.test(event.target.value)) {
            event.target.value = event.target.value.replace(/[^a-zA-Z ]/g, "");
            this.failActualizado = true;
            this.msjErr = "solo se permiten letras en el nombre";
            // invalid character, prevent input
        }
        else {
            this.failActualizado = false;
        }
    };
    EditarComponent.prototype.actualizarUsuario = function (usuario) {
        var _this = this;
        this.usuario.rol.id = this.getIdRol();
        this.serviceUsuario.updateUsuario(usuario, this.idUsuario).subscribe(function (data) {
            _this.actualizado = true;
            _this.failActualizado = false;
            _this.msjOK = data.mensaje;
            console.log(data.mensaje);
        }, function (err) {
            _this.actualizado = false;
            _this.failActualizado = true;
            _this.msjErr = err.error.mensaje;
            console.log(err.error.mensaje);
        });
    };
    EditarComponent.prototype.capturar = function () {
        this.verSeleccion = this.opcionSeleccionado;
        if (this.opcionSeleccionado == "EMPRESA") {
            this.empresa = true;
        }
        else
            this.empresa = false;
    };
    EditarComponent.prototype.capturarEmpresa = function () {
        this.usuario.empresa = this.getEmpresa();
    };
    EditarComponent.prototype.volver = function () {
        window.history.back();
    };
    EditarComponent.prototype.getEmpresa = function () {
        var _this = this;
        var empresa = new empresa_1.Empresa();
        this.empresas.forEach(function (element) {
            if (element.razonSocial == _this.empresaSeleccionada) {
                empresa = element;
            }
        });
        return empresa;
    };
    EditarComponent.prototype.getIdRol = function () {
        var _this = this;
        console.log(this.roles);
        var idRol = 0;
        console.log("en actualizar es " + this.verSeleccion);
        this.roles.forEach(function (element) {
            if (element.rolNombre == _this.verSeleccion) {
                console.log("ide en actualizar es " + element.id);
                idRol = element.id;
            }
            else if (_this.opcionSeleccionado == "0") {
                idRol = _this.info.id;
            }
        });
        return idRol;
    };
    EditarComponent.prototype.confirmarPassw = function () {
        var _this = this;
        if (this.passwordNueva === this.confirmacionPassword) {
            this.usuario.password = this.confirmacionPassword;
            if (confirm('confirma cambio de contraseña para el usuario ' + this.usuario.nombreUsuario + '?')) {
                this.serviceUsuario.updateUsuarioContraseña(this.usuario, this.idUsuario).subscribe(function (data) {
                    alert(data.mensaje);
                    // this.caja.dineroRecibido-=consignacion.valor;
                    _this.serviceModal.dismissAll();
                }, function (err) {
                    alert(err.error);
                });
            }
        }
        else {
            alert("contraseña no coincide");
        }
    };
    EditarComponent.prototype.asignarPermisos = function () {
        var _this = this;
        console.log(this.tokenService);
        this.tokenService.roles.forEach(function (element) {
            console.log("rol asignado");
            console.log(element);
            if (element === "ADMINISTRADOR") {
                _this.isAdministrador = true;
            }
            else if (element === "DOMICILIARIO") {
                console.log("este es domiciliario");
                _this.isDomiciliario = true;
            }
            else if (element === "RECEPCIONISTA") {
                _this.isRecepcionista = true;
            }
            else if (element === "EMPRESA") {
                _this.isEmpresa = true;
            }
            else if (element === "USUARIO_FINAL") {
                _this.isUsuarioFinal = true;
                console.log("este es usuario final");
            }
        });
    };
    EditarComponent = __decorate([
        core_1.Component({
            selector: 'app-editar',
            templateUrl: './editar.component.html',
            styleUrls: ['./editar.component.css']
        })
    ], EditarComponent);
    return EditarComponent;
}());
exports.EditarComponent = EditarComponent;
