const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
let PORT = 5000 || process.env.PORT
require('dotenv/config')

// connect to mongoose
mongoose.set('useNewUrlParser',true);
mongoose.set('useCreateIndex',true);
mongoose.connect(process.env.DB, {useNewUrlParser : true , useUnifiedTopology: true } )
.then(()=> console.log('Mongodb is running'),(err)=> console.log(err) )

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/server', require('./route'))
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });



app.listen(PORT, ()=>console.log('server is running on port '+PORT))