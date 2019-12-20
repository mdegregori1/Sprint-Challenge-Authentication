const request = require("supertest");
const server = require("../api/server.js");
const db = require("../database/dbConfig.js");

describe("auth-router.js", () =>  {
    beforeEach(async () => {
        await db("users").truncate();
    });

  describe("the post to register", () => {

    it("should return a 201 upon post", () => {
      return request(server)
        .post("/api/auth/register")
        .send({ username: "testing123", password: "testing 123" })
        .then(response => {
          expect(response.status).toBe(201);
        });
    });
    it("should return a 500 error for inputing  an incomplete password upon registering", () => {
      return request(server)
        .post("/api/auth/register")
        .send({ username: 'testing123', password: 3})
        .then(response => {
          expect(response.status).toBe(500);
        });
    });
  });

  describe("the post request to login", () =>  {

    it("should return an error 401", () => {
        const username = 'username'
        const password = 'password'

      return request(server)
        .post("/api/auth/login")
        .send({ username: "userna", password: "pasfsfdf" })
        .then(response => {
          expect(response.status).toBe(401);
        });
    });
    it("should return a 500 error for inputing  an incomplete password upon login", () => {
        const username = 'username'
        const password = 'password'
        return request(server)
          .post("/api/auth/register")
          .send({ username: 'username', password: 3})
          .then(response => {
            expect(response.status).toBe(500);
          });
      });
  });
});
