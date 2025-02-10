let CheckBox = document.querySelector('#billing');
let Annually = document.querySelectorAll('.price-annually');
let Monthly = document.querySelectorAll('.price-monthly');

// Ajoute un écouteur d'événement sur la case à cocher pour détecter les changements
CheckBox.addEventListener('change', function() {
    // Vérifie si la case à cocher est cochée
    if (CheckBox.checked){
        // Si la case est cochée, affiche tous les éléments avec la classe 'price-monthly'
        Monthly.forEach(price => price.style.display = 'flex');

        // Masque tous les éléments avec la classe 'price-annually'
        Annually.forEach(price => price.style.display = 'none');
    }else{
        Monthly.forEach(price => price.style.display = 'none');
        
        Annually.forEach(price => price.style.display = 'flex');
    }
});
/*Ce code est utile pour basculer entre deux modes d'affichage de prix (mensuel vs annuel) sur une page web, 
en fonction de l'état d'une case à cocher. Par exemple, cela pourrait être utilisé sur une page d'abonnement 
où l'utilisateur peut choisir de voir les prix mensuels ou annuels.*/
