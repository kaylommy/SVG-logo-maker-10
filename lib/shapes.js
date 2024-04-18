class shapes {
    constructor(logoText, textColor, shapeColor) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.logoText = logoText;
    }
}

class Circle extends shapes {
    constructor(logoText, textColor, shapeColor){
        super(logoText, textColor, shapeColor);
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle width="300" height="200" cx="150" cy="100" r="80" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text></svg>`
    }
}

class Square extends shapes {
    constructor(logoText, textColor, shapeColor){
        super(logoText, textColor, shapeColor);
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect width="300" height="200" x="10" y="10" width="30" height="30" stroke="black" fill="${this.shapeColor}" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text></svg>`
    }
}

class Triangle extends shapes {
    constructor(logoText, textColor, shapeColor){
        super(logoText, textColor, shapeColor);
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">'<polygon width="300" height="200" points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />'<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text></svg>`
    }
}

module.exports = { Circle, Square, Triangle };