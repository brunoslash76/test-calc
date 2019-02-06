/**
 * Describe é utilizado para descrever uma classe ou um método
 * já o context é utilizado para descrever os contextos de 
 * metódos caso A acontece alguma coisa, caso b outra coisa.
 * E o 'it' efetua o que o código roda
 */

// describe('Main', function () {
//     describe('Metodo A', function () {
//         context('Caso 1', function () {
//             it('deveria acontecer banana', function () {
//                 throw new Error('deu xábu');
//             });
//         });
//     });
// });

const expect = require('chai').expect;
const calc = require('../src/main.js');


describe('Calc', function () {
    // SMOKE TESTS
    describe('smoke tests', function () {

        it('should exists calc lib', function () {
            expect(calc).to.exist;
        })

        it('should exists method sum', function () {
            expect(calc.sum).to.exist;
            expect(calc.sum).to.be.a('function');
        });

        it('should exists method sub', function () {
            expect(calc.sub).to.exist;
            expect(calc.sub).to.be.a('function');
        });

        it('should exists method mult', function () {
            expect(calc.mult).to.exist;
            expect(calc.mult).to.be.a('function');
        });

        it('should exists method div', function () {
            expect(calc.div).to.exist;
            expect(calc.div).to.be.a('function');
        });

    });

    describe('Sum', function () {
        it('should return 4 when ´sum(2,2)´', function () {
            expect(calc.sum(2, 2)).to.be.equal(4);
        });
    });

    describe('Sub', function () {
        it('should return 4 when ´sub(2,2)´', function () {
            expect(calc.sub(6, 2)).to.be.equal(4);
        });
    });

    describe('Mul', function () {
        it('should return 4 when mult(2,2)´', function () {
            expect(calc.mult(2, 2)).to.be.equal(4);
        });
    });

    describe('Div', function () {
        it('should return 4 when div(8,2)´', function () {
            expect(calc.div(8, 2)).to.be.equal(4);
        });

        it('should return Não é possível dividir 8 por 0', function () {
            expect(calc.div(8, 0)).to.be.equal(`Não é possível dividir 8 por 0`);
        });
    });
});
