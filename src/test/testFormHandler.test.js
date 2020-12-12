import { handleSubmit } from "../client/js/formHandler";

describe("Testing the handleSubmit", () => {
  test("Should be defined", async () => {
    expect(handleSubmit).toBeDefined();
    });
  });


describe("Testing the handleSubmit", () => {
    test("Should be a function", async () => {
      expect(typeof handleSubmit).toBe("function");
    });
});
