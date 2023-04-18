
// norint idiegti express, parasyti: npm install express
const express = require("express");
const app = express();
app.use(express.json());

// norint idiegti cors, parasyti: npm install cors
const cors = require("cors");
app.use(cors());

const port = 3000;
const names = ["Siuzana"];


app.get("/",(req,res) =>
{
    res.send(names);
});

// sukurti nauja task'a (varda)
app.post("/", (req, res) =>
{
    const name= req.body.name;
    names.push(name);
    res.send(req.body);
})


app.listen(port,() =>
    {
        console.log(`Server is running on the ${port}`);
    })