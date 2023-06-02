const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// D�finir le dossier des fichiers statiques (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// D�finir la route pour la page principale
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// D�marrer le serveur
app.listen(port, () => {
  console.log(`Serveur d�marr� sur le port ${port}`);
});