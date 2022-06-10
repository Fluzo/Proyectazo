export class UserModel{
    iD_USUARIO: any;
    usuario: any;
    email: any;
    password: any;
    iD_PERFIL: any;
    perfil: any;
    activo: boolean;
    logged: boolean;

    constructor() {
        this.activo = true;
        // this.perfil = "USUARIO";
        this.logged = true;
        
    }
}