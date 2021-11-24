let responses = ["Essaye plus tard", "Essaye encore", "Pas d'avis", "C'est ton destin", 
                "Le sort en est jeté", "Une chance sur deux", "Repose ta question", 
                "D'après moi oui", "C'est certain", "Oui absolument", "Tu peux compter dessus", 
                "Sans aucun doute", "Très probable", "Oui", "C'est bien parti", "C'est non", 
                "Peu probable", "Faut pas rêver", "N'y compte pas", "Impossible"];

window.onload = function() {
    let button = document.getElementById("button");
    let response = document.getElementById("response");
    let eightball = document.getElementById("eightball");
    let question = document.getElementById("question");

    eightball.addEventListener("click", function() {
        if(question.value.length < 1) {
            alert("Vous devez entrer une question");
        }
        else {
            button.innerText = "";
            let randomNumber = Math.floor(Math.random()*responses.length);
            response.innerText = responses[randomNumber];
        }
    })
};

/*let randomResponse = responses[Math.floor(Math.random()*responses.length)];
console.log(randomResponse)*/

/*let button = document.getElementById("button")
button.addEventListener("click", event => {
    button.innerHTML = event.randomResponse;
})*/


/*let newDiv = document.createElement("div");
newDiv.innerHTML= `<div id="response"></div>`;
console.log(newDiv)

let element = document.getElementsByClassName("ball");
element.append(newDiv);*/