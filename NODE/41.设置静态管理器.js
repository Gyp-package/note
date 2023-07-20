const express = require('express')
const app = express()

app.use(express.static('./clock'))

app.listen(80, () => {
    console.log('express server running at local');
})