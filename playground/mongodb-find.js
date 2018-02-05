//=== CALL EXAMPLES::
// node playground/mongodb-find.js

// ==================== //
// ===  VARIABLES   === //
// ==================== //
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();

// ================== //
// ===  METHODS   === //
// ================== //
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
      return console.log('\n**** UNABLE TO CONNECT DB *****\n'+`${err}`);
      // db.close();
    }
    console.log('\n**** CONNECTED TO DB =D *****\n');
    //======================//
    // ==== COUNT METHOD ===//
    //======================//
    /*
    db.collection('users').find().count().then((count) => {
        console.log('\n**** DOCUMENT COUNT:: *****\n'+`${JSON.stringify(count)}`);
    }, (err) => {
        console.log('\n**** UNABLE TO count... *****\n'+`${err}`);
    });
    */
    //=====================//
    // ==== FIND METHOD ===//
    //=====================//
    /*
    //QUERY BY:: completed: false
    //QUERY BY:: _id
      db.collection('Todos').find({
        _id: new ObjectID('5a77a2f545a14be7065dd351')
      }).toArray().then((docs) => {
          console.log('\n**** DOCUMENT FOUND=D *****\n');
          console.log(JSON.stringify(docs, undefined, 2));
      }, (err) => {
          console.log('\n**** UNABLE TO found... *****\n'+`${err}`);
      });
      */
      //=======================//
      // ==== REMOVE METHOD ===//
      //=======================//



    //=====================//
    //=====================//
    // db.close();
});
//=====================//
//=====================//
