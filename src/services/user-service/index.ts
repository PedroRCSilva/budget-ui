import { IHttpInstance } from '../types'
import { IUserRequest, IUserResponse, IUserLoginRequest, IUserLoginResponse } from './types'

export const UserService = (instance: IHttpInstance) => {
  const createUser = async (data: IUserRequest) => instance.post<IUserRequest, IUserResponse>('/usuarios', data)

  const login = async (data: IUserLoginRequest) => instance.post<IUserLoginRequest, IUserLoginResponse>('/login', data)

  return {
    createUser,
    login
  }
}
