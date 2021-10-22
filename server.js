const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, './build/')));
app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname, './build/index.html')));

app.listen(port, () => console.log(`App started on port ${port}`));