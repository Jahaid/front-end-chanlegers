let view = document.getElementById("pageView");
let cost = document.getElementById("cost");
let cost2 = document.getElementById("cost2");
let slider = document.getElementById("price-slider");
let toggle = document.getElementById("billing");


let pageViews = ["10K", "50K", "100K", "500K", "1M"];
let perMonth = [8, 12, 16, 24, 36];
let isYearly = false;

//Événement sur le slider
/*Un écouteur d'événement est ajouté au 
slider pour détecter les changements de valeur (input).*/

slider.addEventListener("input", function () {
    updateValue(); //est appelée pour mettre à jour les coûts affichés.
    view.innerHTML = pageViews[slider.value];

    let value = this.value * 25;

    this.style.background = `linear-gradient(to right,
            hsl(174, 77%, 80%) 0%,
            hsl(174, 77%, 80%) ${value}%,
            hsl(224, 65%, 95%) 0%,
            hsl(224, 65%, 95%) 100%)`;
});

function updateValue() {
    if (isYearly) {
        cost.innerHTML = perMonth[slider.value] * 0.75;
        cost2.innerHTML = perMonth[slider.value] * 0.75;
    } else {
        cost.innerHTML = perMonth[slider.value];
        cost2.innerHTML = perMonth[slider.value];
    }
}

toggle.addEventListener("change", function (){
    if(isYearly == false){
        isYearly = true;
    } else {
        isYearly = false
    }
    updateValue();
});