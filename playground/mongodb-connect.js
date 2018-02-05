//** TRADITIONAL IMPORT **//
//
// const MongoClient = require('mongodb').MongoClient;
//** OR **
//
//** USING DESTRUCTURING IN ES6 **//
//
   const {MongoClient, ObjectID} = require('mongodb');
   var obj = new ObjectID();
  // console.log('\n**** OBJ ID *****\n'+`${obj}`);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
      return console.log('\n**** UNABLE TO CONNECT DB *****\n'+`${err}`);
      db.close();
    }
    console.log('\n**** CONNECTED TO DB =D *****\n');

    /*
    //=====================//
      db.collection('Todos').insertOne({
        text: 'Something to Do',
        completed: false
      }, (err, result) => {
          if (err) {
            return console.log('\n**** UNABLE TO INSERT sTODO *****\n'+`${err}`);
            db.close();
          }
          console.log('\n**** SUCCEFULLY INSERT sTODO *****\n'+`${JSON.stringify(result.ops, undefined, 2)}`);
      });
    //=====================//
    */
    //=====================//
    /*
      db.collection('Users').insertOne({
        name: 'ANDREW',
        age: 25,
        location: 'PHILADELPHIA'
      }, (err, result) => {
          if (err) {
            return console.log('\n**** UNABLE TO INSERT USER *****\n'+`${err}`);
            db.close();
          }
          console.log('\n**** SUCCEFULLY INSERT USER *****\n'+`${JSON.stringify(result.ops, undefined, 2)}`);
      });
      */
    //=====================//

    db.close();
});





//https://mongodb.github.io/node-mongodb-native/1.4/driver-articles/mongoclient.html
//====EX:: sudo service mongodb status
//====EX:: sudo service mongodb start
//====EX:: cd Desktop/NODE/NODE_ANDREW/PROJECTS/TODO_APP
//====EX:: node playground/mongodb-connect.js
