export interface IHttpInstance {
  get<R>(url: string, config?: object): Promise<IHttpResponse<R>>
  post<R, T>(url: string, data?: R, config?: object): Promise<IHttpResponse<T>>
  put<R, T>(url: string, data?: R, config?: object): Promise<IHttpResponse<T>>
  delete<T>(url: string, config?: object): Promise<IHttpResponse<T>>
  patch<R, T>(url: string, data?: R, config?: object): Promise<IHttpResponse<T>>
}

export interface IHttpResponse<T> {
  data: T
  status: number
}
