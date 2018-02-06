// ===================== //
// =====    NODE   ===== //
// =====  WEATHER  ===== //
// =====    APP    ===== //
// ===================== //
//=== CALL EXAMPLES::
// cd Desktop/NODE/NODE_ANDREW/PROJECTS/TODO_APP
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

  // ================================= //
  // =======      EXPRESS     ======== //
  // =======      ROUTES      ======== //
  // ================================= //

// ======================== //
// ===    POST / TODOs  === //
// ===      ROUTES      === //
// ======================== //
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

/*
// ======================== //
// ===    GET / TODOs   === //
// ===      ROUTES      === //
// ======================== //
app.get('/todos', (request, response) => {
    console.log('\n**** API JSON RESPONSE =D *****\n'+`${JSON.stringify(request.body)}`);
});

// ======================== //
// ===    GET / todo    === //
// ===      ROUTES      === //
// ======================== //
app.get('/todo', (request, response) => {
    console.log('\n**** API JSON RESPONSE =D *****\n'+`${JSON.stringify(request.body)}`);
});

// ======================== //
// ===   UPDATE / todo  === //
// ===      ROUTES      === //
// ======================== //
app.update('/todo', (request, response) => {
    console.log('\n**** API JSON RESPONSE =D *****\n'+`${JSON.stringify(request.body)}`);
});

// ======================== //
// ===   DELETE / todo  === //
// ===      ROUTES      === //
// ======================== //
app.delete('/todo', (request, response) => {
    console.log('\n**** API JSON RESPONSE =D *****\n'+`${JSON.stringify(request.body)}`);
});
*/

// =================== //
// == EXPRESS START == //
// =================== //
  app.listen(3000, () => {
    console.log('\n**** STARTED ON POPRT 3000 *****\n');
  });

  // =================== //
  // == EXPORT SERVER == //
  // =================== //
  module.exports = { app };
// ===================== //
// ===================== //
