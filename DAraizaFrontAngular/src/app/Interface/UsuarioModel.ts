export interface Usuario{
    IdUsuario : number,
    Nombre : string,
    ApellidoPaterno: string,
    ApellidoMaterno: string
    CURP : string,
    Celular : string,
    Email : string,
    FechaNacimiento: Date,
    Imagen: string,
    NumeroTelefonico: string,
    Sexo : string,
    Status : number,
    Username: string,
    Rol: {
        NombreRol: string,
        idRol: number
    },
    Direcciones: [{
        idDireccion: number,
        Calle: string,
        NumeroExterior : number,
        NumeroInterior: number,
        colonia: {
            idColonia: number,
            Nombre: string,
            CodigoPostal: number,
            municipio: {
                idMunicipio: number,
                Nombre: string,
                estado: {
                    Nombre: string,
                    idEstado: number,
                    pais:{
                        idPais: number,
                        Nombre: string
                    }
                }
            }
        }
    }
    ]
}

    export interface UsuarioModel{
        object: Usuario[];
    }

    

