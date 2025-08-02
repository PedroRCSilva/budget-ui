const CURRENT_YEAR = new Date().getFullYear()

export const MonthEnum = {
  JANUARY: {
    NAME: 'JANUARY',
    START_DATE: new Date(CURRENT_YEAR, 0, 1).toLocaleDateString('en-CA'),
    END_DATE: new Date(CURRENT_YEAR, 1, 0).toLocaleDateString('en-CA'),
    LABEL: 'Janeiro'
  },
  FEBRUARY: {
    NAME: 'FEBRUARY',
    START_DATE: new Date(CURRENT_YEAR, 1, 1).toLocaleDateString('en-CA'),
    END_DATE: new Date(CURRENT_YEAR, 2, 0).toLocaleDateString('en-CA'),
    LABEL: 'Fevereiro'
  },
  MARCH: {
    NAME: 'MARCH',
    START_DATE: new Date(CURRENT_YEAR, 2, 1).toLocaleDateString('en-CA'),
    END_DATE: new Date(CURRENT_YEAR, 3, 0).toLocaleDateString('en-CA'),
    LABEL: 'Março'
  },
  APRIL: {
    NAME: 'APRIL',
    START_DATE: new Date(CURRENT_YEAR, 3, 1).toLocaleDateString('en-CA'),
    END_DATE: new Date(CURRENT_YEAR, 4, 0).toLocaleDateString('en-CA'),
    LABEL: 'Abril'
  },
  MAY: {
    NAME: 'MAY',
    START_DATE: new Date(CURRENT_YEAR, 4, 1).toLocaleDateString('en-CA'),
    END_DATE: new Date(CURRENT_YEAR, 5, 0).toLocaleDateString('en-CA'),
    LABEL: 'Maio'
  },
  JUNE: {
    NAME: 'JUNE',
    START_DATE: new Date(CURRENT_YEAR, 5, 1).toLocaleDateString('en-CA'),
    END_DATE: new Date(CURRENT_YEAR, 6, 0).toLocaleDateString('en-CA'),
    LABEL: 'Junho'
  },
  JULY: {
    NAME: 'JULY',
    START_DATE: new Date(CURRENT_YEAR, 6, 1).toLocaleDateString('en-CA'),
    END_DATE: new Date(CURRENT_YEAR, 7, 0).toLocaleDateString('en-CA'),
    LABEL: 'Julho'
  },
  AUGUST: {
    NAME: 'AUGUST',
    START_DATE: new Date(CURRENT_YEAR, 7, 1).toLocaleDateString('en-CA'),
    END_DATE: new Date(CURRENT_YEAR, 8, 0).toLocaleDateString('en-CA'),
    LABEL: 'Agosto'
  },
  SEPTEMBER: {
    NAME: 'SEPTEMBER',
    START_DATE: new Date(CURRENT_YEAR, 8, 1).toLocaleDateString('en-CA'),
    END_DATE: new Date(CURRENT_YEAR, 9, 0).toLocaleDateString('en-CA'),
    LABEL: 'Setembro'
  },
  OCTOBER: {
    NAME: 'OCTOBER',
    START_DATE: new Date(CURRENT_YEAR, 9, 1).toLocaleDateString('en-CA'),
    END_DATE: new Date(CURRENT_YEAR, 10, 0).toLocaleDateString('en-CA'),
    LABEL: 'Outubro'
  },
  NOVEMBER: {
    NAME: 'NOVEMBER',
    START_DATE: new Date(CURRENT_YEAR, 10, 1).toLocaleDateString('en-CA'),
    END_DATE: new Date(CURRENT_YEAR, 11, 0).toLocaleDateString('en-CA'),
    LABEL: 'Novembro'
  },
  DECEMBER: {
    NAME: 'DECEMBER',
    START_DATE: new Date(CURRENT_YEAR, 11, 1).toLocaleDateString('en-CA'),
    END_DATE: new Date(CURRENT_YEAR, 12, 0).toLocaleDateString('en-CA'),
    LABEL: 'Dezembro'
  }
} as const

export type MonthEnum = (typeof MonthEnum)[keyof typeof MonthEnum]

export interface IHomeView {
  filterCategory: ({ month, page, size }: { month?: MonthEnum; page?: number; size?: number }) => void
  defaultMonth: MonthEnum
  totalPlanned: number
  totalActual: number
  totalDifference: number
}
