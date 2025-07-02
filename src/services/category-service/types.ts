export interface ICategoryRequest {
  id: string
  description?: string
  estimatedCost?: number
  type?: 'FIXED' | 'VARIABLE'
}
export interface ICategoryResponse {
  id: string
  description: string
  estimatedCost: number
  type: 'FIXED' | 'VARIABLE'
  createdAt: string
  currentCost: number
}
