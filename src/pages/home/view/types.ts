export interface ICategoryWithCosts {
  id: string
  name: string
  totalCost: number
  estimatedCost: number
  type: string
}

export enum MonthEnum {
  JANUARY = 'JANUARY',
  FEBRUARY = 'FEBRUARY',
  MARCH = 'MARCH',
  APRIL = 'APRIL',
  MAY = 'MAY',
  JUNE = 'JUNE',
  JULY = 'JULY',
  AUGUST = 'AUGUST',
  SEPTEMBER = 'SEPTEMBER',
  OCTOBER = 'OCTOBER',
  NOVEMBER = 'NOVEMBER',
  DECEMBER = 'DECEMBER'
}

export interface IHomeView {
  categories: ICategoryWithCosts[]
  filterCategory: ({ month, page, size }: { month?: MonthEnum; page?: number; size?: number }) => void
}
