export class Turtle {

  constructor(dayUpPath =50, nightDownPath = 30){
    this.dayUpPath=dayUpPath;
    this.nightDownPath=nightDownPath;
  }

  getDaysCountToReachDistance = (distance) => {
    if(this.dayUpPath<this.nightDownPath) return Infinity;
    if(this.dayUpPath===0) return Infinity;

    let startDistance = 0;
    let days = 0;

    while(true){
      startDistance+=this.dayUpPath;
      days++;

      if(startDistance>=distance) break;

      startDistance -= this.nightDownPath;
    }

    return days;
  }
}