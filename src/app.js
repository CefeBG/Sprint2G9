import express from 'express';
import hbs from 'hbs';
import path from 'path';
import routes from './routes/rutas.js';
import { fileURLToPath } from 'url';
import indexRoutes from "./routes/rutas.js";
import 'dotenv/config';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views')); 
hbs.registerPartials(path.join(__dirname, '/views/partials'))

app.use(express.urlencoded({ extended: false }))

app.use(indexRoutes);
app.use(routes);

app.use((req, res, next) => {
    res.status(404).render("404");
});

export default app;
