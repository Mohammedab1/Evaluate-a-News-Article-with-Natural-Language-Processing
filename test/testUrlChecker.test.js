import { urlValidater } from "../src/client/js/nameChecker";

describe("Testing the urlValidater functionality", () => {
  test("It should be true", () => {
    expect(urlValidater).toBeDefined();
  });
});


describe('The Validater should be a function' , () => {
    test('It should be a function',  () => {
        expect(typeof urlValidater).toBe("function");
    });
});

describe('The Validater should contain valid url' , () => {
    let validurl = "https://www.toptal.com";
    test('Should be valid',  () => {
        const validationres = validURL(validurl);
        expect(validationres).toBeDefined();
        expect(validationres).toBe(true);
    });
});

describe('Test "validURL()" for invalid url' , () => {
    var unvalidurl = "htp/www.toptal.com/front-end/front-end-design-principles";
    test('Should unvalid',  () => {
        const unvalidationres = validURL(unvalidurl);
        expect(unvalidationres).toBeDefined();
        expect(unvalidationres).toBe(false);
    });
});
