import { Router } from "express";
import { createSong, deleteSong, editSong, getSong, getSongs, updateSong } from '../controllers/song.controller.js'

const router= new Router();

router.get('/graph', async (req, res)=>{
    const query = `
    query {
        listAll {
            id
            title
            albun
        }
    }`;

    const response= await fetch('http://localhost:3000/graphql',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
    })
    const {data}=await response.json()
    res.render('indexGraphQL', {
        rows: data.listAll
    })
})

router.get('/', getSongs)

router.get('/:id', getSong)

router.delete('/:id', deleteSong)

router.post('/', createSong)

router.put('/:id', updateSong)

router.get('/edit/:id', editSong)

export default router;