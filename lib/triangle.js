class Triangle {
  constructor(a, b, c) {
    Triangle.isValid(a, b, c);
    
    this.a = a;
    this.b = b;
    this.c = c;
  }

  static isValid(a, b, c) {
    let sides = [a, b, c];

    if (sides.some(side => side <= 0)) {
      throw new Error('All sides must be greater than 0.');
    } else if (a + b <= c || a + c <= b || b + c < a) {
      throw new Error('Two sides add up to be less than the third.');
    }
  }

  static isEquilateral(a, b, c) {
    return [a, b, c].every(side => side === a);
  }

  static isIsosceles(a, b, c) {
    let sides = [a, b, c];
    let isosceles = false;

    for (let index = 0; index < sides.length; index += 1) {
      let currentSide = sides[index];
      isosceles = sides.filter(side => side === currentSide).length === 2;

      if (isosceles) break;
    }

    return isosceles;
  }

  static isScalene(a, b, c) {
    let sides = [a, b, c];

    return sides.filter((side, index) => {
      return sides.indexOf(side) === index;
    }).length === sides.length;
  }

  kind() {
    if (Triangle.isEquilateral(this.a, this.b, this.c)) {
      return `equilateral`;
    } else if (Triangle.isIsosceles(this.a, this.b, this.c)) {
      return 'isosceles';
    } else if (Triangle.isScalene(this.a, this.b, this.c)) {
      return 'scalene';
    }
  }
}

module.exports = Triangle;