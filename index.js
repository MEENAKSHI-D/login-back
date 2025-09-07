const express = require ("express")
const app = express();
const cors = require("cors")

const username = "user";
const password = "1234";

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/login",function(req,res)
{
    console.log("QUERY:", req.query);
    if(req.query.username === username && req.query.password === password)
    {
        res.send(true)

    }
    else{
        res.send(false)
    }
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));