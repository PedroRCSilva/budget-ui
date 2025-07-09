export interface IUserRequest {
  name: string
  login: string
  password: string
}

export interface IUserLoginRequest {
  login: string
  password: string
}

export interface IUserResponse {
  nome: string
}

export interface IUserLoginResponse {
  token: string
}
