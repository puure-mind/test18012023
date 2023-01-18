import {calcHandshakesCountBetweenHumans} from "../tasks/handshakes.js";

describe("calcHandshakesCountBetweenHumans", () => {
  it('WhenNegativeNumbersHumans', () => {
    // arrange
    const humansInRoom = -5;

    // act
    const handshakes = calcHandshakesCountBetweenHumans(humansInRoom);

    // assert
    expect(handshakes).toEqual(0);
  });

  it('WhenZeroHumans', () => {
    // arrange
    const humansInRoom = 0;

    // act
    const handshakes = calcHandshakesCountBetweenHumans(humansInRoom);

    // assert
    expect(handshakes).toEqual(0);
  });

  it('WhenOneHumanInRoom', () => {
    // arrange
    const humansInRoom = 1;

    // act
    const handshakes = calcHandshakesCountBetweenHumans(humansInRoom);

    // assert
    expect(handshakes).toEqual(0);
  });

  it('WhenTwoHumanInRoom', () => {
    // arrange
    const humansInRoom = 2;

    // act
    const handshakes = calcHandshakesCountBetweenHumans(humansInRoom);

    // assert
    expect(handshakes).toEqual(1);
  });

  it('WhenThreeHumanInRoom', () => {
    // arrange
    const humansInRoom = 3;

    // act
    const handshakes = calcHandshakesCountBetweenHumans(humansInRoom);

    // assert
    expect(handshakes).toEqual(3);
  });

  it('WhenTenHumansInRoom', () => {
    // arrange
    const humansInRoom = 10;

    // act
    const handshakes = calcHandshakesCountBetweenHumans(humansInRoom);

    // assert
    expect(handshakes).toEqual(45);
  });
})