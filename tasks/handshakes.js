export const calcHandshakesCountBetweenHumans = (humans = 1) => {
  if(humans <= 1) return 0;

  const handshakes = ((1 + humans-1)*(humans-1))/2;

  return handshakes;
}