const express = require('express');
const { readFile } = require('fs').promises;
const path = require('path');
const app = express();

app.get('/', async (request, response) => {
    try {
        const filePath = path.join(__dirname, 'home.html');
        const html = await readFile(filePath, 'utf8');
        response.send(html);
    } catch (err) {
        console.error('Error reading file:', err);
        response.status(500).send('Sorry, something went wrong');
    }
});

const PORT = process.env.PORT || 3033;
app.listen(PORT, () => console.log(`App available on http://localhost:${PORT}`));
