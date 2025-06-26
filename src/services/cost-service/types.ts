export interface ICostRequest {
  id?: string
  description?: string
  amount?: number
  category?: {
    id: string
  }
}

export interface ICostSearchParams {
  page: string | null
  size: string | null
  startDate: string | null
  endDate: string | null
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
