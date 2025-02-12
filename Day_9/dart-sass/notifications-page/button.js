let button = document.getElementById('read-btn');

// Ajoute un écouteur d'événement au bouton pour détecter un clic
button.addEventListener('click', () => {

    // Sélectionne tous les éléments avec la classe 'single-notify' et parcourt chacun d'eux
    document.querySelectorAll('.single-notify').forEach(e => {

        // Supprime la classe 'unseen' de chaque élément 'single-notify'
        e.classList.remove('unseen');
    });
    document.querySelectorAll('.unread').forEach(e => {
        e.classList.remove('unread');
    });


// Sélectionne l'élément avec l'ID 'num' et modifie son texte intérieur pour afficher '0'
    document.getElementById('num').innerText = '0';
})

/*
Ce code est probablement utilisé pour marquer des notifications ou des messages comme "lus". Par exemple :

Les éléments avec la classe single-notify pourraient représenter des notifications individuelles.

La classe unseen pourrait être utilisée pour styliser les notifications non lues.

Les éléments avec la classe unread pourraient représenter un indicateur visuel (comme un point rouge) pour les notifications non lues.

L'élément avec l'ID num pourrait afficher le nombre de notifications non lues, qui est remis à 0 après avoir cliqué sur le bouton 'read-btn'.
*/