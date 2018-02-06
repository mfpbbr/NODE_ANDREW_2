// ====================== //
// ====================== //
// == EXPRESS TEST APP == //
// ====================== //
// ====================== //
const expect = require('expect');
const request = require('supertest');
const { app } = require('./../server');
const { Todo } = require('./../models/todo');

// ==================== //
// ===== CALLBACK ===== //
// ==================== //
const todos = [{
  text: 'FIRST TEST TO DO'
},{
  text: 'SECOND TEST TO DO'
}];

beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

// ==================== //
// ===== DESCRIBE ===== //
// ==================== //
describe('POSTS / todos', () => {

   // ************* //
   // ***   1º   ***//
   // ************* //
    it('Should create a new todo', (done) => {
          var text = 'TEST TODO TEST'
          request(app)
          .post('/todos')
          .send({text})
          .expect(200)
          .expect((res) => {expect(res.body.text).toBe(text);})
          .end((err, res) => {
             // ****************** //
                if (err) {
                  return done(err);
                }
                Todo.find({text}).then((todos) => {
                  expect(todos.length).toBe(1);
                  expect(todos[0].text).toBe(text);
                  done();
                }).catch((e) => done(e));
            // ****************** //
          });
      });

      // ************** //
      // ***   2º   ***//
      // ************** //
      it('Should not create a new todo with Invalid data', (done) => {
        request(app)
        .post('/todos')
        .send({ })
        .expect(400)
        .end((err, res) => {
           // ****************** //
              if (err) {
                return done(err);
              }
              Todo.find().then((todos) => {
                expect(todos.length).toBe(2);
                done();
              }).catch((e) => done(e));
          // ****************** //
        });
      });
      // ************* //
      // ************* //

    });


// ==================== //
// ===== DESCRIBE ===== //
// ==================== //
    describe('GET / todos', () => {

          // ************** //
          // ***   1º   *** //
          // ************** //
              it('Should get all todos', (done) => {
                    request(app)
                    .get('/todos')
                    .expect(200)
                    .expect((res) => {expect(res.body.todos.length).toBe(2);})
                    .end(done);
                });
            // ************* //
            // ************* //
      });
// ====================== //
// ====================== //
