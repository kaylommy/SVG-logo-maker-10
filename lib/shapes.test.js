const { Circle, Square, Triangle } = require('../lib/shapes')

describe('shapes', () =>{
    describe('isCircle', ()=>{
        it('should display all properties inherited by the parent shape given by the user.', () => {
            const isCircle = new Circle('SVG', 'white', 'green');
            expect(isCircle.logoText).toBe('SVG')
            expect(isCircle.textColor).toBe('white')
            expect(isCircle.shapeColor).toBe('green')
        })
        it('should render a circle shape', ()=> {
            const isCircle = new Circle('hi', 'blue', 'green')
            expect(isCircle.render()).toBe(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle width="300" height="200" cx="150" cy="100" r="80" fill="${isCircle.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${isCircle.textColor}">${isCircle.logoText}</text></svg>`)
        })
    })

    describe('isTriangle', ()=>{
        it('should display all properties inherited by the parent shape given by the user.', () => {
            const isTriangle = new Triangle('SVG', 'white', 'green');
            expect(isTriangle.logoText).toBe('SVG')
            expect(isTriangle.textColor).toBe('white')
            expect(isTriangle.shapeColor).toBe('green')
        })
        it('should render a triangle shape', ()=> {
            const isTriangle = new Triangle('hi', 'blue', 'green')
            expect(isTriangle.render()).toBe(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">'<polygon width="300" height="200" points="150, 18 244, 182 56, 182" fill="${isTriangle.shapeColor}" />'<text x="150" y="125" font-size="60" text-anchor="middle" fill="${isTriangle.textColor}">${isTriangle.logoText}</text></svg>`)
        })
    })

    describe('isSquare', ()=>{
        it('should display all properties inherited by the parent shape given by the user.', () => {
            const isSquare = new Square('SVG', 'white', 'green');
            expect(isSquare.logoText).toBe('SVG')
            expect(isSquare.textColor).toBe('white')
            expect(isSquare.shapeColor).toBe('green')
        })
        it('should render a square shape', ()=> {
            const isSquare = new Square('hi', 'blue', 'green')
            expect(isSquare.render()).toBe(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect width="300" height="200" x="10" y="10" width="30" height="30" stroke="black" fill="${isSquare.shapeColor}" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${isSquare.textColor}">${isSquare.logoText}</text></svg>`)
        })
    })
})