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
const { ObjectID } = require('mongodb');
const bodyParser = require('body-parser');
var { mongoose } = require('./db/mongoose.js');
var { User } = require('./models/user.js');
var { Todo } = require('./models/todo.js');
const port = process.env.PORT || 3000;


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

// ================== //
// ===  METHODS   === //
// ================== //


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


// ======================== //
// ===    GET / TODOs   === //
// ===      ROUTES      === //
// ======================== //
app.get('/todos', (request, response) => {
    console.log('\n**** API JSON RESPONSE =D *****\n'+`${JSON.stringify(request.body)}`);
    Todo.find().then((todos) => {
      response.send({todos})
      console.log('\n**** GET ALL FROM DB =D *****\n'+`${todos}`);
    }, (e) => {
      response.status(400).send(e);
      console.log('\n**** UNABLE TO GET ALL FROM DB *****\n'+`${e}`);
    });
});


// ======================== //
// ===    GET / todo    === //
// ===      ROUTES      === //
// ======================== //
app.get('/todos/:id', (request, response) => {
    var id = request.params.id;
    // === TEST ID === //
    if(!ObjectID.isValid(id)){
      console.log('\n **** ID NOT VALID***** \n');
      return response.status(404).send();
    }
    // === CODE ACTION === //
    Todo.findById(id).then((todo) => {
      if (!todo) {
        return response.status(404).send();
      }
      console.log('\n**** API JSON RESPONSE =D *****\n'+`${JSON.stringify(todo, undefined, 2)}`);
      response.send({todo});
    }).catch((e) => {
      response.status(400).send();
    });

});

/*
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
app.listen(port, () => {
  console.log(`\n***** CONSOLE UP AND RUNNING ON ${port} *****\n`)
});

  // =================== //
  // == EXPORT SERVER == //
  // =================== //
  module.exports = { app };
// ===================== //
// ===================== //
