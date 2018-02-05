//=== CALL EXAMPLES::
// node playground/mongodb-delete.js

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
    //=======================//
    // ====  DELETE MANY  ===//
    //=======================//
    /*
    db.collection('Todos').deleteMany({completed: false}).then((result) => {
        console.log('\n**** DOCUMENT DELETED! *****\n');
        console.log(JSON.stringify(result, undefined, 2));
    }, (err) => {
        console.log('\n**** UNABLE TO delete... *****\n'+`${err}`);
    });
    */
    //=======================//
    // ====  DELETE ONE   ===//
    //=======================//
    /*
    db.collection('Todos').deleteOne({text: "WALK THE DOG"}).then((result) => {
        console.log('\n**** DOCUMENT DELETED! *****\n');
        console.log(JSON.stringify(result, undefined, 2));
    }, (err) => {
        console.log('\n**** UNABLE TO delete... *****\n'+`${err}`);
    });
    */
    //========================//
    // === FIND ONE DELETE ===//
    //========================//
    /*
    db.collection('Todos').findOneAndDelete({text: "HELLO RIDE"}).then((result) => {
        console.log('\n**** DOCUMENT DELETED! *****\n');
        console.log(JSON.stringify(result, undefined, 2));
    }, (err) => {
        console.log('\n**** UNABLE TO delete... *****\n'+`${err}`);
    });
    */
    //=====================//
    //=====================//
  // db.close();
});
//=====================//
//=====================//
