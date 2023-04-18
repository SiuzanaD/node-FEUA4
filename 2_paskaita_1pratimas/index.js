const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;
const cars = ["BMW"];

// grazina cars pavadinima (BMW)
app.get("/cars", (req,res)=>
{
    res.send(cars);
})


// serverio paleidimas
app.listen(port,() =>
    {
        console.log(`Server is running on the ${port}`);
    })