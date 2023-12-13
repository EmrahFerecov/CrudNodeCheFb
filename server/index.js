import express from "express"
import cors from "cors"

const app = express()
const PORT = 3000

let arr = [
    {
        id: 1,
        name: "Chelsea",
        info: "En boyuk",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Didier_Drogba_Champions_League_Winner.jpg",
        price: 369
    },
    {
        id: 2,
        name: "Fener",
        info: "En boyuk",
        image: "https://www.trtspor.com.tr/resimler/526000/526663.jpg",
        price: 489
    },
    {
        id: 3,
        name: "Al nasr",
        info: "En boyuk",
        image: "https://a.espncdn.com/photo/2023/1208/r1264024_1296x518_5-2.jpg",
        price: 699
    }, 
    {
        id: 4,
        name: "Neftci",
        info: "En boyuk",
        image: "https://azertag.az/files/galleryphoto/2020/2/1593000704154732143.jpg",
        price: 499
    },
    {
        id: 5,
        name: "Inter",
        info: "En boyuk",
        image: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltaed70a2b93aa425b/635e8e81b2461e10a5a456fe/Transfer_Gurus_Intermilan.jpg",
        price: 189
    },
    {
        id:6,
        name: "Hannover96",
        category: "En boyuk",
        image: "https://result-sports.com/wp-content/uploads/clients-66.jpg",
        price: 209
    },
    {
        id:7,
        name: "Monaco",
        info: "En boyuk",
        image: "https://www.asmonaco.com/wp-content/uploads/2018/10/share.jpg",
        price: 489
    },
    {
        id:8,
        name: "Lazio",
        info: "En boyuk",
        image: "https://proxy-media-sslazio.secure2.footprint.net/vimages/63b2e765/Group%202%20(1).jpg?webp&q=100&size=-x609",
        price: 149
    },
    {
        id:9,
        model: "Yene Chelsea",
        info: "En boyuk",
        image: "https://static.standard.co.uk/2023/04/19/08/newFile-4.jpg?quality=75&auto=webp&width=960",
        price: 819
    },
    {
        id: 10,
        name: "YeneFener",
        info: "En boyuk",
        image: "https://pbs.twimg.com/media/F1ORRkpX0AAFL88?format=jpg&name=4096x4096",
        price: 1799
    },
    {
        id: 11,
        name: "Chelsea",
        info: "En boyuk",
        image: "https://pbs.twimg.com/media/F-waJsuWUAAii6o.jpg:large",
        price: 219
    },
    {
        id: 12,
        name: "Chelsea",
        info: "En boyuk",
        image: "https://www.sportico.com/wp-content/uploads/2022/03/Chelsea-photos2-e1647036179881.jpg",
        price: 189
    },
    {
        id: 13,
        name: "Chelsea",
        info: "En boyuk",
        image: "https://frontofficesports.com/wp-content/uploads/2022/05/FOS-Sunday-5.8-Chelsea-FC.jpg",
        price: 139
    }
]

app.use(express.json())
app.use(cors())

let count = arr.length 

app.get("/",(req,res)=>{
    res.send(arr)
})

app.get("/:id",(req,res)=>{
    const {id} = req.params
    const getItem = arr.find((i)=>i.id === +id)
    res.send(getItem)
})

app.post("/",(req,res)=>{
    let newItem = {
        id:count++,
        name: req.body.name,
        info: req.body.info,
        image: req.body.image,
        price: req.body.price
    }
    arr.push(newItem)
    res.send(arr)
})
app.delete('/:id',(req,res)=>{
    const {id} = req.params
    arr = arr.filter((i)=>i.id !== +id)
    res.send(arr)
})

app.put("/:id",(req,res)=>{
    const {id} = req.params

    let newItem = {
        id:+id,
        name:req.body.name,
        info:req.body.info,
        image:req.body.image,
        price:req.body.price
    }

    arr = arr.filter((i)=>i.id !== +id)
    arr.push(newItem)
    // arr.sort((a,b)=>a.id-b.id)
    res.send(arr)
})

app.listen(PORT, (err) => {
    if (err) {
        console.error(err)
    }
    else {
        console.log("There is not such an error");
    }
})