const server = require('./server.js');
const db = require('../database/dbConfig.js')
const request = require('supertest')

describe('the server', () => {
    beforeEach(async () => {
        //wipe db
        await db('users').truncate();
    })
    describe('GET /', () => {
        it('should run the testing env', () => {
            expect(process.env.DB_ENV).toBe('testing');
        })
        it('should return a status 200', () => {
            return request(server)
            .get("/")
            .then(response => {
                expect(response.status).toBe(200);
        });
        })
        it('should return last sprint :) ', () =>{
            return request(server)
            .get('/')
            .then(response => {
                expect(response.body.api).toContain("last sprint :)")
            })
        })
    })
})
