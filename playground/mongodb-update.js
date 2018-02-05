//=== CALL EXAMPLES::
// node playground/mongodb-update.js

// ==================== //
// ===  VARIABLES   === //
// ==================== //
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();

// ================== //
// ===  METHODS   === //
// ================== //
MongoClient.connect('mongodb://localhost:27017/db', (err, db) => {
    if (err) {
      return console.log('\n**** UNABLE TO CONNECT DB *****\n'+`${err}`);
    }
    console.log('\n**** CONNECTED TO DB =D *****\n');
    //=======================//
    // === GET ALL METHOD ===//
    //=======================//
    /*
    db.collection('Todos').find().toArray().then((docs) => {
        console.log('\n**** DOCUMENT FOUND=D *****\n');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('\n**** UNABLE TO found... *****\n'+`${err}`);
    });
    */
    //========================//
    // === UPDATE METHODS  ===//
    //========================//
    // text: "BABE I LOVE U",
    // text: "BABE I LOVE U DAY AND NIGHT",
    db.collection('Todos').findOneAndUpdate({
      _id: new ObjectID("5a78979f7cf34d9310fac661")
    }, {
      $set: {
        completed: true
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log('\n**** UPDATED RESULT *****\n'+`${JSON.stringify(result, undefined, 2)}`);
    });
    //=====================//
    //=====================//
  // db.close();
});
//=====================//
//=====================//
