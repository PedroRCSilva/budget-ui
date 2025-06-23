export interface ICostRequest {
  id?: string
  description?: string
  amount?: number
  category?: {
    id: string
  }
}
export interface ICostResponse {
  id: string
  description: string
  amount: number
  category: {
    id: string
  }
  createdAt: string
}
