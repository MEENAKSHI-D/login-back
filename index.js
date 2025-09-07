

const express = require ("express")
const app = express();
const cors = require("cors")

const username = "user";
const password = "1234";

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post("/login",function(req,res)
{
    console.log("BODY:", req.body);
    if(req.body.username === username && req.body.password === password)
    {
        res.json(true)

    }
    else{
        res.json(false)
    }
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));