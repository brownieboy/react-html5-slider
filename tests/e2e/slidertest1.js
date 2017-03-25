/* eslint-env node, protractor, jasmine */
/* eslint prefer-arrow-callback: 0 */

const EC = protractor.ExpectedConditions;

describe("Page loads", function() {

   it("should display horizontal Demo value of '3000'", function() {

      // browser.get("http://localhost:8080/src/index.html");
      browser.get("index.html");

      browser.wait(EC.presenceOf(element(by.css("body")), 1000));
      browser.wait(EC.presenceOf(element(by.name("myslider")), 2000));
      expect(element(by.id("slidervalue")).getText()).toEqual("3000");
   });

});

describe("Dragging horizontal slider 50px to the right", function() {
   it("should display horizontal Demo value of '16000'", function() {

      const slider = element(by.name("myslider"));

      browser.actions().dragAndDrop(
         slider, { x: 50, y: 0 }
      ).perform();
      expect(element(by.id("slidervalue")).getText()).toEqual("16000");
   });
});


describe("Clicking Change Axes button for horizontal demo", function() {
   it("should display horizontal Demo value of '500'", function() {
      element(by.id("buthorizontalSlider")).click();
      expect(element(by.id("slidervalue")).getText()).toEqual("500");
   });
});

describe("Dragging horizontal slider 50px to the right", function() {
   it("should display horizontal Demo value of '1500'", function() {

      const slider = element(by.name("myslider"));

      browser.actions().dragAndDrop(
         slider, { x: 50, y: 0 }
      ).perform();
      expect(element(by.id("slidervalue")).getText()).toEqual("1500");
   });
});


