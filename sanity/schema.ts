import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { category } from './category'
import { productType } from './productType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, productType],
}
