const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../src/server');

chai.should();
chai.use(chaiHttp);

describe('Error Route', () => {
  it('Should return a JSON object with route not found error message', (done) => {
    chai
      .request(server)
      .get('/api')
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a('object');
        res.body.errors[0].should.have.property('message').contains('Invalid Route');
        res.body.should.have.property('data').eql(null);
        done();
      });
  });
});
