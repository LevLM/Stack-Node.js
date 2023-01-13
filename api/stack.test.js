// import { test } from 'media-typer'
// import supertest from 'supertest'
// import stack from './stack.js'
const user = require('./stack')

describe("", () => {
    test("server respond 200 status code", async () => {
        const response = await request(app).post("/newElement").send({user: "user"})
        expect(response.statusCode).toBe(200)
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
    })
})

describe("when the user is missing", () => {
    test("should respond with a status code of 400", async () => {
      const bodyData = [
        {username: "username"}
      ]
      for (const body of bodyData) {
        const response = await request(app).post("/newElement").send(body)
        expect(response.statusCode).toBe(400)
      }
    })
})
