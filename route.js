const express = require('express')
const app = express()
const Order = require('./Order')

// post method 

app.post('/', (req,res)=>{
    Order.create(req.body)
    .then(done => res.status(200).send('done'))
    .catch(err => res.status(500).send(err)
    
    )
    
})
// get method 
app.get('/orders', (req,res)=> {
    Order.find()
    .then(
        data => res.status(200).send(data)
    )
    .catch(err => res.status(500).send(err))

})



// delete method 
app.delete('/:id',(req,res)=>{
    Order.findByIdAndDelete(req.params.id)
    .then(done => res.status(200).send('deleted'))
    .catch(err => res.status(500).send(err))

})

module.exports = app 