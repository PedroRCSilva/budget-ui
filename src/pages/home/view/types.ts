export interface ICategoryWithCosts {
  id: string
  name: string
  totalCost: number
  estimatedCost: number
  type: string
}

const CURRENT_YEAR = new Date().getFullYear()

export const MonthEnum = {
  JANUARY: {
    NAME: 'JANUARY',
    START_DATE: new Date(CURRENT_YEAR, 0, 1).toLocaleDateString('en-CA'),
    END_DATE: new Date(CURRENT_YEAR, 1, 0).toLocaleDateString('en-CA')
  },
  FEBRUARY: {
    NAME: 'FEBRUARY',
    START_DATE: new Date(CURRENT_YEAR, 1, 1).toLocaleDateString('en-CA'),
    END_DATE: new Date(CURRENT_YEAR, 2, 0).toLocaleDateString('en-CA')
  },
  MARCH: {
    NAME: 'MARCH',
    START_DATE: new Date(CURRENT_YEAR, 2, 1).toLocaleDateString('en-CA'),
    END_DATE: new Date(CURRENT_YEAR, 3, 0).toLocaleDateString('en-CA')
  },
  APRIL: {
    NAME: 'APRIL',
    START_DATE: new Date(CURRENT_YEAR, 3, 1).toLocaleDateString('en-CA'),
    END_DATE: new Date(CURRENT_YEAR, 4, 0).toLocaleDateString('en-CA')
  },
  MAY: {
    NAME: 'MAY',
    START_DATE: new Date(CURRENT_YEAR, 4, 1).toLocaleDateString('en-CA'),
    END_DATE: new Date(CURRENT_YEAR, 5, 0).toLocaleDateString('en-CA')
  },
  JUNE: {
    NAME: 'JUNE',
    START_DATE: new Date(CURRENT_YEAR, 5, 1).toLocaleDateString('en-CA'),
    END_DATE: new Date(CURRENT_YEAR, 6, 0).toLocaleDateString('en-CA')
  },
  JULY: {
    NAME: 'JULY',
    START_DATE: new Date(CURRENT_YEAR, 6, 1).toLocaleDateString('en-CA'),
    END_DATE: new Date(CURRENT_YEAR, 7, 0).toLocaleDateString('en-CA')
  },
  AUGUST: {
    NAME: 'AUGUST',
    START_DATE: new Date(CURRENT_YEAR, 7, 1).toLocaleDateString('en-CA'),
    END_DATE: new Date(CURRENT_YEAR, 8, 0).toLocaleDateString('en-CA')
  },
  SEPTEMBER: {
    NAME: 'SEPTEMBER',
    START_DATE: new Date(CURRENT_YEAR, 8, 1).toLocaleDateString('en-CA'),
    END_DATE: new Date(CURRENT_YEAR, 9, 0).toLocaleDateString('en-CA')
  },
  OCTOBER: {
    NAME: 'OCTOBER',
    START_DATE: new Date(CURRENT_YEAR, 9, 1).toLocaleDateString('en-CA'),
    END_DATE: new Date(CURRENT_YEAR, 10, 0).toLocaleDateString('en-CA')
  },
  NOVEMBER: {
    NAME: 'NOVEMBER',
    START_DATE: new Date(CURRENT_YEAR, 10, 1).toLocaleDateString('en-CA'),
    END_DATE: new Date(CURRENT_YEAR, 11, 0).toLocaleDateString('en-CA')
  },
  DECEMBER: {
    NAME: 'DECEMBER',
    START_DATE: new Date(CURRENT_YEAR, 11, 1).toLocaleDateString('en-CA'),
    END_DATE: new Date(CURRENT_YEAR, 12, 0).toLocaleDateString('en-CA')
  }
} as const

export type MonthEnum = (typeof MonthEnum)[keyof typeof MonthEnum]

export interface IHomeView {
  categories: ICategoryWithCosts[]
  filterCategory: ({ month, page, size }: { month?: MonthEnum; page?: number; size?: number }) => void
}
