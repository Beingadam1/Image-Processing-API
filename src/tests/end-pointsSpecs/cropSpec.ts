import supertest from "supertest";
import app from "../../index";

const request = supertest(app);

describe("Test the crop endpoint for missing parameters", () => {
  it("test the crop route for a missing filename", async () => {
    request.get("/crop?width=500&height=300").expect(400);
  });
  it("test the crop route for a missing width", async () => {
    request.get("/crop?filename=fjord&height=400").expect(400);
  });
  it("test the crop route for full filename", async () => {
    request.get("/crop?filename=fjord.jpg&width=300&height=300").expect(400);
  });
  it("test the crop route for a missing height", async () => {
    request.get("/crop?filename=fjord&width=400").expect(400);
  });
});

describe("Test the crop endpoint for a missing resource", () => {
  it("test the crop route for missing filename", async () => {
    request.get("/crop?filename=8eqR39r5cd&width=400&height=500").expect(404);
  });
});

describe("Test the crop endpoint with correct parameter", () => {
  it("test the crop route for correct filename", async () => {
    request.get("/crop?filename=fjord&width=100&height=500").expect(200);
  });
});
