const { Circle, Square, Triangle } = require('../lib/shapes')

// shapes is the parent so we are describing the parent and the children
describe('shapes', () =>{
    // circle is the first child
    describe('Circle', ()=>{
        // this it statement tests the properties inherited
        it('should display all properties inherited by the parent shape given by the user.', () => {
            const circle = new Circle('SVG', 'white', 'green');
            expect(circle.logoText).toBe('SVG')
            expect(circle.textColor).toBe('white')
            expect(circle.shapeColor).toBe('green')
        })
        // this it statement tests the render function
        it('should render a circle shape', ()=> {
            const circle = new Circle('kay', 'blue', 'green')
            expect(circle.render()).toBe(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle width="300" height="200" cx="150" cy="100" r="80" fill="${circle.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${circle.textColor}">${circle.logoText}</text></svg>`)
        })
    })

    describe('Square', ()=>{
        it('should display all properties inherited by the parent shape given by the user.', () => {
            const square = new Square('SVG', 'white', 'green');
            expect(square.logoText).toBe('SVG')
            expect(square.textColor).toBe('white')
            expect(square.shapeColor).toBe('green')
        })
        it('should render a square shape', ()=> {
            const square = new Square('kay', 'blue', 'green')
            expect(square.render()).toBe(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect width="300" height="200" x="10" y="10" stroke="black" fill="${square.shapeColor}" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${square.textColor}">${square.logoText}</text></svg>`)
        })
    })

    describe('Triangle', ()=>{
        it('should display all properties inherited by the parent shape given by the user.', () => {
            const triangle = new Triangle('SVG', 'white', 'green');
            expect(triangle.logoText).toBe('SVG')
            expect(triangle.textColor).toBe('white')
            expect(triangle.shapeColor).toBe('green')
        })
        it('should render a triangle shape', ()=> {
            const triangle = new Triangle('kay', 'blue', 'green')
            expect(triangle.render()).toBe(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">'<polygon width="300" height="200" points="150, 18 244, 182 56, 182" fill="${triangle.shapeColor}" />'<text x="150" y="125" font-size="60" text-anchor="middle" fill="${triangle.textColor}">${triangle.logoText}</text></svg>`)
        })
    })
})