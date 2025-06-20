import api from '@providers/api'
import { categoryService } from './category-service'

const categoryClient = categoryService(api)

export { categoryClient }
