// R�cup�rer la r�f�rence du bouton dans le DOM
var tvButton = document.getElementById('tv-button');

// Ajouter un gestionnaire d'�v�nement pour le clic sur le bouton
tvButton.addEventListener('click', function() {
  // Toggle la classe 'on' pour allumer/�teindre la TV
  this.classList.toggle('on');
});