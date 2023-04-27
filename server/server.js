const express = require('express'); 
const app = express(); 
const cors = require('cors');

app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/createRouter.js');

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('podcast_project');
    const favPodsCollection = db.collection('favPods');
    const favPodsRouter = createRouter(favPodsCollection);
    app.use('/api/favourites', favPodsRouter);
  })
  .catch(console.err);

app.listen(9000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});