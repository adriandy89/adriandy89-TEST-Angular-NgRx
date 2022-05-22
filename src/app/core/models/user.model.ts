export interface IUser {
    id: number;
    username: string;
    rol: string;
    nombre: string;
    apellido: string;
    dni: string;
    telefono: string;
    email: string;
    loginCount: number;
    createdAt: Date;
  }

  export interface IUserListResponse {
    users: IUser[];
  }