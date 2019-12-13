const server = require('../api/server');
const request = require('supertest');

describe('server.js', () => {
  it('should be testing environment', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('GET /', () => {
    it('should return 200 OK', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
    });

    it('response should be json', async () => {
      const res = await request(server).get('/');
      expect(res.type).toBe('application/json');
    });

    it('should return correct object', async () => {
      const res = await request(server).get('/');
      expect(res.body).toEqual({ message: 'Hello World' });
    });
  });
});
