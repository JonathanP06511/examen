import {GraphQLString} from 'graphql'
import {pool} from '../src/db.js'

export const register={
    type: GraphQLString,
    description: "Register new song",
    args: {
        title: {type: GraphQLString},
        albun: {type: GraphQLString}
    },
    resolve: async (_, args) => {
        const {title, albun}= args
        const {rows}= await pool.query(`Insert into song (title, albun) values ($1, $2) RETURNING *`,[title, albun])
        return "successfull"
    }
}