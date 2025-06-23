import api from '@providers/api'
import { categoryService } from './category-service'
import { costService } from './cost-service'

const categoryClient = categoryService(api)
const costClient = costService(api)

export { categoryClient, costClient }
