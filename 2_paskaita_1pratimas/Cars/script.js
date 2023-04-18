

const carButton = document.querySelector("#carButton");
carButton.addEventListener("click", () => {
    const car = document.querySelector("input[car='car']");
    console.log(car);

    fetch("http://localhost:3000/")
        .then((resp) => resp.json())
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });


    });
