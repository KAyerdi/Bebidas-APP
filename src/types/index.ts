import { z } from 'zod'
import { CategoriesAPIResponseSchema, SearchFilterSchema } from '../utils/recipe-schema'

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>