import { ICategoryResponse } from '@services/category-service/types'
import { ICostResponse } from '@services/cost-service/types'
import { IPagination } from 'src/models/types'

export interface ICategoryCostsInput {
  categories: IPagination<ICategoryResponse>
  costs: IPagination<ICostResponse>
}

export enum CategoryTypeEnum {
  FIXED = 'Gasto Fixo',
  VARIABLE = 'Gasto Variável'
}
