const express = require('express')
const app = express()
const PORT=5000 || process.env.PORT

app.use('/')
app.use('/user')


app.listen(PORT, ()=>{
    console.log('you are logged into port Hello Ashik '+ PORT );
}) 
