const express = require('express')

const app = express();

app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    res.send('Einstein bot app loaded.')
})

app.listen(3000, () => console.log('Server running.'))