const express = require('express')
const cors = require('cors')
const app = express()

app.use(
    cors({
        origin: "*",
        methods: ['GET', 'POST']
    })
)
app.get('/', (req, res) => {
    res.json({
        "name": 'gyp',
        "like": 'reading'
    })
})