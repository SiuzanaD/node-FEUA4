const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;
const products = ["Pienas"];

app.get("/product", (req,res)=>
{
    res.send(products);
})

app.post("/product",(req,res)=>
{

    // products.push("kazkas");
    const product = req.body.product;
    products.push(product);
    res.send(product);
})

app.listen(port,() =>
    {
        console.log(`Server is running on the ${port}`);
    })