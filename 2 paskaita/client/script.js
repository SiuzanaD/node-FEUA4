fetch("http://localhost:3000/")
.then ((resp) => resp.json())
.then ((response) =>{
    const nameList = document.querySelector("#names")
})




const nameButton = document.querySelector("#nameButton");
nameButton.addEventListener(`click`, () => {
    const name = document.querySelector("input[name='name']");
    console.log(name);


    fetch("http://localhost:3000/",{
        method: "POST",
        headers:{
            "Content-Type": "Application/json",
        },
        body: JSON.stringify({ name }),
    })

    // fetch("http://localhost:3000/")
    //     .then((resp) => resp.json())
    //     .then((response) => {
    //         console.log(response);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });

})