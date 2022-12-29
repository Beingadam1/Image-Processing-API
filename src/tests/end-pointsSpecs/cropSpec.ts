import supertest from "supertest";
import app from "../../index";

const request = supertest(app);

describe("Test the crop endpoint for missing parameters", () => {
  it("test the crop route for a missing filename", async (done) => {
    request.get("/crop?width=500&height=300").expect(400, done);
  });
  it("test the crop route for a missing width", async (done) => {
    request.get("/crop?filename=fjord&height=400").expect(400, done);
  });
  it("test the crop route for full filename", async (done) => {
    request.get("/crop?filename=fjord.jpg&width=300&height=300").expect(400, done);
    done();
  });
  it("test the crop route for a missing height", async (done) => {
    request.get("/crop?filename=fjord&width=400").expect(400, done);
    done();
  });
});

describe("Test the crop endpoint for a missing resource", () => {
  it("test the crop route for missing filename", async (done) => {
    request.get("/crop?filename=8eqR39r5cd&width=400&height=500").expect(404, done);
    done();
  });
});

describe("Test the crop endpoint with correct parameter", () => {
  it("test the crop route for correct filename", async (done) => {
    request.get("/crop?filename=fjord&width=100&height=500").expect(200, done);
    done();
  });
});
