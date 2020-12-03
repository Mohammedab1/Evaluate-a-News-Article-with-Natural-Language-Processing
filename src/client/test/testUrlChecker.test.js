import { urlValidater } from "../js/urlChecker";

describe("Testing the urlValidater functionality", () => {
  test(" It should be true", async () => {
    expect(urlValidater).toBeDefined();
  });
});


describe('The Validater should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof urlValidater).toBe("function");
    });
});

describe('The Validater should contain valid url' , () => {
    let validurl = "https://www.toptal.com/front-end/front-end-design-principles";
    test('Should be valid', async () => {
        const validationres = validURL(url);
        expect(validationres).toBeDefined();
        expect(validationres).toBe(true);
    });
});
describe('Test "validURL()" for invalid url' , () => {
    var unvalidurl = "htp/www.toptal.com/front-end/front-end-design-principles";
    test('Should unvalid', async () => {
        const unvalidationres = validURL(unvalidurl);
        expect(unvalidationres).toBeDefined();
        expect(unvalidationres).toBe(false);
    });
});
