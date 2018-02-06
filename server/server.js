// ===================== //
// =====    NODE   ===== //
// =====  WEATHER  ===== //
// =====    APP    ===== //
// ===================== //
//=== CALL EXAMPLES::
// node server/server.js

// ==================== //
// ===  VARIABLES   === //
// ==================== //
const express = require('express');
const bodyParser = require('body-parser');
var { mongoose } = require('./db/mongoose.js');
var { User } = require('./models/user.js');
var { Todo } = require('./models/todo.js');

// ==================== //
// ===    EXPRESS   === //
// ===      APP     === //
// ==================== //
var app = express();

  // ================ //
	// == MIDDLEWARE == //
	// ================ //

  //***********//
  //**** 1 ****//
  //***********//
  app.use(bodyParser.json());//===== ALL RESPONSE AS JSON

// ==================== //
// ===    EXPRESS   === //
// ===    ROUTES    === //
// ==================== //
app.post('/todos', (request, response) => {
    console.log('\n**** API JSON RESPONSE =D *****\n'+`${JSON.stringify(request.body)}`);
    var newTodo = new Todo({
      text: request.body.text
    });
    newTodo.save().then((doc) => {
      response.send(doc);
      console.log('\n**** SAVED TO DB =D *****\n'+`${doc}`);
    }, (e) => {
      response.status(400).send(e);
      console.log('\n**** UNABLE TO SAVE TO DB *****\n'+`${e}`);
    });
});

// =================== //
// == EXPRESS START == //
// =================== //
  app.listen(3000, () => {
    console.log('\n**** SARTED ON POPRT 3000 *****\n');
  });
// ===================== //
// ===================== //
