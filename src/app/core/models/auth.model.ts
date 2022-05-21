export interface ILogin {
  username: string;
  password: string;
}

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

export interface IUserResponse {
  token: string;
  user: IUser;
}
