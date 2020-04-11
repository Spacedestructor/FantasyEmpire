  const client = stitch.Stitch.initializeDefaultAppClient('fantasy-empire-gltlp');

  const db = client.getServiceClient(stitch.RemoteMongoClient.factory, 'mongodb-atlas-cluster0').db('Spacedestructor-Only');

  client.auth.loginWithCredential(new stitch.AnonymousCredential()).then(user =>
    db.collection('Fantasy-Empire').updateOne({owner_id: client.auth.user.id}, {$set:{number:42}}, {upsert:true})
  ).then(() =>
    db.collection('Fantasy-Empire').find({owner_id: client.auth.user.id}, { limit: 100}).asArray()
  ).then(docs => {
      console.log("Found docs", docs)
      console.log("[MongoDB Stitch] Connected to Stitch")
  }).catch(err => {
    console.error(err)
  });