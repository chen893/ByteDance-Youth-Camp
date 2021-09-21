(async()=>{
  const {MongoClient} = require('mongodb');
  const client = new MongoClient(
    'mongodb://loaclhost:27017',
    {
      useNewUrlParser: true
    }
  )
  let ret = await client.connect();
  const db = client.db('test');
  const fruilts = db.collection('fruits');

  ret = await fruilts.insertOne({
    name: '芒果',
    price: 3.5
  })
})()