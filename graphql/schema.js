import {GraphQLObjectType, GraphQLSchema} from 'graphql'
import {listAll, listSong} from './queries.js'
import {register} from './mutations.js'

const QueryType= new GraphQLObjectType({
    name: 'QueryType',
    description: 'The root query type',
    fields:{
        listAll,
        listSong
    }
})

const MutationType= new GraphQLObjectType({
    name: 'MutationType',
    description: 'The root mutation type',
    fields:{
        register
    }
})

const schema= new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
})

export default schema;