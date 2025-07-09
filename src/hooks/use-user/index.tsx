import { userClient } from '@services/index'
import { IUserLoginRequest } from '@services/user-service/types'
import { useState } from 'react'

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false)

  const mutationAsync = async (data: IUserLoginRequest) => userClient.login(data)

  const mutation = (data: IUserLoginRequest) => {
    setIsLoading(true)
    userClient.login(data).finally(() => setIsLoading(false))
  }

  return {
    mutationAsync,
    mutation,
    isLoading
  }
}
