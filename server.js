const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./app/controllers/livestock.controller')
const PORT = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (request, response) => {
  response.json({
    message: 'Hey Nick'
  })
})

app.get("/livestock", db.getAllLivestock);
app.get("/livestock/:id", db.getLivestockById);
app.post("/livestock", db.createLivestockRecord);
app.put("/livestock/:id", db.updateLivestockRecord);
app.delete("/livestock/:id", db.deleteLivestockRecord);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});