const express = require('express')
const app = express()
const PORT= process.env.PORT

app.use('/')
app.use('/user')


app.listen(PORT, ()=>{
    console.log('you are logged into port '+ PORT );
})
