import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import category from './category'
import restaurant from './restaurant'
import dish from './dish'
import featured from './featured'
import trik from './trik'

export default createSchema({
  name: 'default',

  types: schemaTypes.concat([
    restaurant,
    dish,
    category,
    featured,
    trik,
  ])
})