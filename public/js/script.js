// Récupérer la référence du bouton dans le DOM
var tvButton = document.getElementById('tv-button');

// Ajouter un gestionnaire d'événement pour le clic sur le bouton
tvButton.addEventListener('click', function() {
  // Toggle la classe 'on' pour allumer/éteindre la TV
  this.classList.toggle('on');
});