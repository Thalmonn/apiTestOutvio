require('dotenv').config();

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../src/server');
const MessageConstants = require('../../src/app/constants/message.constants');

const {PRIVATE_TOKEN} = process.env;

chai.should();
chai.use(chaiHttp);

describe('Success Routes', () => {
  it('Should return with a success Public Route', (done) => {
    chai
      .request(server)
      .get('/api/public')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.to.equal(MessageConstants.DEFAULT_RETURN_PUBLIC);
        done();
      });
  });

  it('Should return with a success Private Route', (done) => {
    chai
      .request(server)
      .get('/api/private')
      .set({ 'Authorization': `Bearer ${PRIVATE_TOKEN}` })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.to.equal(MessageConstants.DEFAULT_RETURN_PRIVATE);
        done();
      });
  });
});
