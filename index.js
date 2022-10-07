const express =  require('express');

const app =  express();

app.get('/', (req,res)=>{
    res.send('<h2>Hi There!</h2>')
})

const PORT =  process.env.port || 3000

app.listen(PORT, ()=> console.log(`Server Running on Port ${PORT}`));
