//=== CALL EXAMPLES::
// node playground/mongoose-remove.js

// ==================== //
// ===  VARIABLES   === //
// ==================== //
const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
var { Todo } = require('./../server/models/todo.js');
var { User } = require('./../server/models/user.js');


// ================== //
// ===  METHODS   === //
// ================== //
/*
Todo.remove({}).then((result) => {
  console.log("\n***** HELLO FOM DELETE*****\n"+`${result}`);
});

Todo.findOneAndRemove({}).then((result) => {
  console.log("\n***** HELLO FOM FIND ONE AND DELETE*****\n"+`${result}`);
});
*/
Todo.findByIdAndRemove('5a79caba8a0a3e0014c7f7fd').then((result) => {
  console.log("\n***** HELLO FOM FIND ONE AND DELETE*****\n"+`${result}`);
});
// ================== //
// ================== //
