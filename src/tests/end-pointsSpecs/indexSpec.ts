import supertest from "supertest";
import app from "../../index";

const request = supertest(app);

describe("Test main endpoint", () => {
  it("test the response of the root router", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
  });
});
