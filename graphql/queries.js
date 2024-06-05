import {GraphQLList, GraphQLID} from 'graphql'
import { SongType } from './types.js'
import {pool} from '../src/db.js'

export const listAll= {
    type: new GraphQLList(SongType),
    resolve: async() => {
        const {rows}= await pool.query('Select * from song')
        return rows
    }
}

export const listSong= {
    type: SongType,
    description: 'Return a song',
    args:{
        id: {type: GraphQLID}
    },
    resolve: async(_, args) => {
        const {rows}= await pool.query('Select * from song where id=$1', [args.id])
        console.log(rows)
        console.log(args.id)
        return rows[0];
    }
}