import {pool} from '../db.js'


export const getSongs= async(req, res)=>{
    const {rows}= await pool.query('Select * from song')
    //res.status(201).json(rows)
    res.render('index',{
        data: rows
    })
    
}

export const getSong= async(req, res)=>{
    const {id}= req.params;
    const {rows}= await pool.query('Select * from songr where id=$1', [id])
    res.status(201).json(rows)

}

export const deleteSong= async (req, res)=>{
    const {id}= req.params
    const {rowCount}= await pool.query('Delete from song where id=$1', [id])
    
    if(rowCount === 0){
        res.status(404).json({"message": "user not foud"})
    }
    res.sendStatus(204)
}

export const createSong= async (req, res)=>{
    try{
        const {title, albun}= req.body
        const {rows}= await pool.query('Insert into song (title, albun) values ($1, $2) RETURNING *', [title, albun])
        res.redirect('/api/songs/')
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

export const updateSong= async (req, res)=>{
    const {id}= req.params
    const {title, albun}= req.body
    const {rows, rowCount}= await pool.query('Update song set title=$1, albun=$2 where id=$3 RETURNING *', [title, albun, id]);
    res.status(201).json({"message":"update song"})
}

export const editSong= async(req, res)=>{
    const {id}= req.params
    const {rows} = await pool.query('Select * from song where id=$1', [id])
    res.render('updateSong', {
        data: rows
    })
}
