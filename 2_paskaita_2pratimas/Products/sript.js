const productButton = document.querySelector("#productButton");
productButton.addEventListener(`click`, () => {
    const product = document.querySelector("input[product='product']");
    console.log(product);

    fetch('http://localhost:3000/',{
        method: "POST",
        headers:{
            "Content-Type": "Application/json",
        },
        body: JSON.stringify({ product }),
    })

    

    })
