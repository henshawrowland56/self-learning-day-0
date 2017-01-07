'use strict';
var fizzBuzz = require("fizzBuzz.js");
describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return `Buzz` for 25", function() {
    expect(fizzBuzz(25)).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 30", function() {
    expect(fizzBuzz(30)).toBe('FizzBuzz');
  });

  it("should return `Buzz` for 40", function() {
    expect(fizzBuzz(40)).toBe('Buzz');
  });

  it("should return `43` for 43", function() {
    expect(fizzBuzz(43)).toBe(43);
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(fizzBuzz(45)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 75", function() {
    expect(fizzBuzz(75)).toBe('FizzBuzz');
  });


  it("should return `FizzBuzz` for 90", function() {
    expect(fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(fizzBuzz(63)).toBe('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(7)).toBe(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(101)).toBe(101);
  });

});