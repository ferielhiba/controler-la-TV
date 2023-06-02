const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Définir le dossier des fichiers statiques (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Définir la route pour la page principale
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});