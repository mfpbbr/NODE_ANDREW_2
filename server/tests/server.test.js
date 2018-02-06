// ====================== //
// ====================== //
// == EXPRESS TEST APP == //
// ====================== //
// ====================== //
const expect = require('expect');
const request = require('supertest');
const { app } = require('./../server');
const { Todo } = require('./../models/todo');
const { ObjectID } = require('mongodb');

// ==================== //
// ===== CALLBACK ===== //
// ==================== //
const todos = [{
  _id: new ObjectID(),
  text: 'FIRST TEST TO DO'
},{
  _id: new ObjectID(),
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




      // ==================== //
      // ===== DESCRIBE ===== //
      // ==================== //
          describe('GET / todos/:id', () => {

                // ************** //
                // ***   1º   *** //
                // ************** //
                    it('Should get ONE todos', (done) => {
                          request(app)
                          .get(`/todos/${todos[0]._id.toHexString()}`)
                          .expect(200)
                          .expect((res) => {expect(res.body.todo.text).toBe(todos[0].text);})
                          .end(done);
                      });
                  // ************** //
                  // ***   2º   *** //
                  // ************** //
                      it('Should return 404 if Todo Not Found', (done) => {
                        var hexId = new ObjectID().toHexString()
                          request(app)
                          .get(`/todos/${hexId}`)
                          .expect(404)
                          .end(done);
                      });
                    // ************** //
                    // ***   3º   *** //
                    // ************** //
                        it('Should return 404 if No-OBJ-IDS', (done) => {
                            request(app)
                            .get(`/todos/123abc`)
                            .expect(404)
                            .end(done);
                        });
                  // ************* //
                  // ************* //
            });

// ====================== //
// ====================== //
