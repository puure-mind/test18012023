import {removeDoubles} from "../tasks/doubles.js";

describe("removeDoubles", () => {
  it("WhenCorrectCondition_AndRemoveDoubles_ThenDoublesRemoved", () => {
    // arrange
    const initial = "cat,dog,horse,cow,cat,horse";
    // act
    const processed = removeDoubles(initial);
    // assert
    expect(processed).toEqual("cat,dog,horse,cow");
  });

  it("WhenNotDoubles_AndRemoveDoubles_ThenEqualInitial", () => {
    // arrange
    const initial = "cat,dog,horse,cow";
    // act
    const processed = removeDoubles(initial);
    // assert
    expect(processed).toEqual(initial);
  });

  it("WhenEmptyString_AndRemoveDoubles_ThenEqualInitial", () => {
    // arrange
    const initial = "";
    // act
    const processed = removeDoubles(initial);
    // assert
    expect(processed).toEqual(initial);
  });

  it("WhenRemoveDoubles_AndAnotherSeparator_ThenDoublesRemoved", () => {
    // arrange
    const initial = "cat, dog, horse, cow, dog, horse, cow, cat, dog, horse";
    // act
    const processed = removeDoubles(initial, ', ');
    // assert
    expect(processed).toEqual("cat, dog, horse, cow");
  });

  it("WhenRemoveDoubles_AndSeparatorIsNotString_ThenDoublesRemoved", () => {
    // arrange
    const separator = 2;
    const initial = `cat${separator}dog${separator}horse${separator}cow${separator}dog${separator}horse${separator}cow${separator}cat${separator}dog`;
    // act
    const processed = removeDoubles(initial, separator);
    // assert
    expect(processed).toEqual(`cat${separator}dog${separator}horse${separator}cow`);
  });

});