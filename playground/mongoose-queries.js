//=== CALL EXAMPLES::
// node playground/mongoose-queries.js

// ==================== //
// ===  VARIABLES   === //
// ==================== //
const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
var { Todo } = require('./../server/models/todo.js');
var id = "5a7912061d489a1eaef46230";

// ================== //
// ===  METHODS   === //
// ================== //
if(!ObjectID.isValid(id)){
  console.log('\n **** ID NOT VALID***** \n');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('\n***** HELLO FIND ALL MONGOOSE **** \n'+`${JSON.stringify(todos, undefined, 2)}`);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('\n***** HELLO FIND ONE MONGOOSE **** \n'+`${todo}`);
});

Todo.findById(id).then((todo) => {
  console.log('\n***** HELLO FIND BY ID MONGOOSE **** \n'+`${todo}`);
}).catch((e) => {
  console.log('\n **** ERROR **** \n'+`${e}`);
});
// ==================== //
// ==================== //
