const express = require('express');

const app = express();
app.use('/static', express.static('public'));
const port = 4500;

app.get('/', (req, res) => res.json({ text: "hello dude" }));

app.listen(port, () => console.log(`the server is running on port : ${port}`));
