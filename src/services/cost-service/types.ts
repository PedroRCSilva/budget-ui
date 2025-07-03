export interface ICostRequest {
  id?: string
  description?: string
  amount?: number
  category?: {
    id: string
  }
}

export interface ICostSearchParams {
  page?: string
  size?: string
  startDate: string | null
  endDate: string | null
}
export interface ICostResponse {
  id: string
  description: string
  amount: number
  category: {
    id: string
    description: string
  }
  createdAt: string
}
