import {Turtle} from '../tasks/turtle.js';

describe("turtle", ()=>{
  it("WhenZeroParams_AndGetDays_ThenDaysEqualInfinity", () => {
    // arrange
    const testTurtle = new Turtle(0, 0);
    const distance = 0;
    // act
    const days = testTurtle.getDaysCountToReachDistance(distance);
    // assert
    expect(days).toEqual(Infinity);

  });

  it("WhenZeroDistance_AndGetDays_ThenDaysIsEqualOne", () => {
    // arrange
    const testTurtle = new Turtle();
    const distance = 0;
    // act
    const days = testTurtle.getDaysCountToReachDistance(distance);
    // assert
    expect(days).toEqual(1);

  });

  it("WhenCorrectParams_AndGetDays_ThenReturnDays", () => {
    // arrange
    const testTurtle = new Turtle(50, 30);
    const distance = 100;
    // act
    const days = testTurtle.getDaysCountToReachDistance(distance);
    // assert
    expect(days).toEqual(4);

  });

  it("WhenNegativeDistance_AndGetDays_ThenReturnOneDay", () => {
    // arrange
    const testTurtle = new Turtle(50, 30);
    const distance = -100;
    // act
    const days = testTurtle.getDaysCountToReachDistance(distance);
    // assert
    expect(days).toEqual(1);

  });

  it("WhenNightPathMoreThanDayPath_AndGetDays_ThenReturnInfinity", () => {
    // arrange
    const testTurtle = new Turtle(20, 40);
    const distance = 100;
    // act
    const days = testTurtle.getDaysCountToReachDistance(distance);
    // assert
    expect(days).toEqual(Infinity);

  });
})