

const express = require("express"); // express ne objektas, irgi importas, jis sukuria aplikacija kuri visa laika suksis

const app = express(); // aplikacijos sukurimas

// iskviesti PORTA, musu kompiuterio kanalas kuri bus 3000-tinis
const port = 3000; //porto (kanalo) skaicius

//routas (kelias) route/path
// get - grazink duomenis
app.get("/", (req, res) => {
    // req - request kas ateina is isores
    // res - response (kas ateina is vidaus)
    res.send("Mano vardas Siuzana"); // send metodas isiuncia duomenis
});

app.get("/today", (req,res) => {
    res.send(new Date().toDateString());
});

app.get("/user", (req,res) => {
    const user = {
        name: "Siuzana",
        surname: "Siuzaniukas",
        age: 32,
    };
    res.send(user);
})

// serverio paleidimas apacioje
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
}); //appsas turi klausytis is kanalo/direktorijos kuri nurodome