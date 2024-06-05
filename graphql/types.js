import {GraphQLObjectType, GraphQLString, GraphQLID} from 'graphql'

export const SongType= new GraphQLObjectType({
    name: 'Songtype',
    description: 'The song type',
    fields:{
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        albun: {type: GraphQLString}
    }
})