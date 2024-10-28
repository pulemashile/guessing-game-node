const express = require("express");
const app = express();
const port = 8000;

app.set('view engine', 'ejs');


// console.log(__dirname);
app.use(express.static('public'));
// app.use(express.json());

const cards = ["A", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "J", "J", 
  "K", "K", "L", "L", "M", "M", "N", "N", "O", "O", "P", "P", "Q", "Q", "R", "R", "S", "S", "T", "T"];



// Shuffle cards
var random_cards = Array.from(cards).sort(() => Math.random() - 0.5);


app.get('/', (req, res) => res.render('index', { title: 'Home', random_cards }));

app.get('*', (req, res) => res.status(404).render('404', { title: '404' }));

app.listen(port, () => console.log(`Server started on port ${port}`));