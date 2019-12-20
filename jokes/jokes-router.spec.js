const request = require("supertest");
const server = require("../api/server.js");
const db = require("../database/dbConfig.js");

describe("jokes-router.js", () =>  {
    beforeEach(async () => {
        await db("users").truncate();
    });

  describe("the get to jokes", () => {

    it("should return a status 401 upon get for no login", () => {
      return request(server)
        .get("/api/jokes")
        .then(response => {
          expect(response.status).toBe(401);
        });
    });
 
  });

});
