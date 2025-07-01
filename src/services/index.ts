import api from '@providers/api'
import { CategoryService } from './category-service'
import { CostService } from './cost-service'

const categoryClient = CategoryService(api)
const costClient = CostService(api)

export { categoryClient, costClient }
