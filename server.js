import express from 'express'

const celeb_data = {
    type:"movie_hero",
    name:"brad pitt"
}

const PORT = 8000

const app = express()

//first param is the path
//=> only do the callback fn is a get request is passed to this path - currently '/'
//callback function takes in the req object and the response object
//req and res objects give us access to the request-response cycle.
app.get('/',(req,res)=> {
    res.json(celeb_data)
    //http can only send strings
    //.json method on the response object will convert js-object(or any other datatype)
    // to strings for http transfer
})

app.listen(PORT, ()=>{
    console.log(`this express server is runnning on port ${PORT}`)
})
