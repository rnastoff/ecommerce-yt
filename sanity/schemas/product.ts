//name is how we query schema - lowercase, no spaces
//title is how it's shown in Sanity studio
//the "of" tells Sanity what the array is filled with (images)
//The "options" field with source means we can generate slug from name
//The reference at the bottom -> category
export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Product'
    },
    {
      name: 'images',
      type: 'array',
      title: 'Product Images',
      of: [{type: 'image'}]
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of product'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'name'
      }
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number'
    },
    {
      name: 'category',
      title: 'Product Category',
      type: 'reference',
      to: [
        {
          type: 'category'
        }
      ]
    }
  ]
}