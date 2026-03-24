const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Initialisation
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import des routes
const articleRoutes = require('./routes/articles');

// Route principale
app.get('/', (req, res) => {
    res.send("Bienvenue sur l'API Blog 🚀");
});

// Routes API
app.use('/api', articleRoutes);

// Swagger (interface)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Gestion des erreurs 404
app.use((req, res) => {
    res.status(404).json({ message: "Route non trouvée" });
});

// Lancement serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
    console.log(`Swagger disponible sur http://localhost:${PORT}/api-docs`);
});
