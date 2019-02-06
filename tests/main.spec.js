/**
 * Describe é utilizado para descrever uma classe ou um método
 * já o context é utilizado para descrever os contextos de 
 * metódos caso A acontece alguma coisa, caso b outra coisa.
 * E o 'it' efetua o que o código roda
 */

// describe('Main',  () => {
//     describe('Metodo A',  () => {
//         context('Caso 1',  () => {
//             it('deveria acontecer banana',  () => {
//                 throw new Error('deu xábu');
//             });
//         });
//     });
// });
import { expect } from 'chai';
import * as calc from '../src/main';


describe('Calc',  () => {
    // SMOKE TESTS
    describe('smoke tests',  () => {

        it('should exists calc lib',  () => {
            expect(calc).to.exist;
        })

        it('should exists method sum',  () => {
            expect(calc.sum).to.exist;
            expect(calc.sum).to.be.a('function');
        });

        it('should exists method sub',  () => {
            expect(calc.sub).to.exist;
            expect(calc.sub).to.be.a('function');
        });

        it('should exists method mult',  () => {
            expect(calc.mult).to.exist;
            expect(calc.mult).to.be.a('function');
        });

        it('should exists method div',  () => {
            expect(calc.div).to.exist;
            expect(calc.div).to.be.a('function');
        });

    });

    describe('Sum',  () => {
        it('should return 4 when ´sum(2,2)´',  () => {
            expect(calc.sum(2, 2)).to.be.equal(4);
        });
    });

    describe('Sub',  () => {
        it('should return 4 when ´sub(2,2)´',  () => {
            expect(calc.sub(6, 2)).to.be.equal(4);
        });
    });

    describe('Mul',  () => {
        it('should return 4 when mult(2,2)´',  () => {
            expect(calc.mult(2, 2)).to.be.equal(4);
        });
    });

    describe('Div',  () => {
        it('should return 4 when div(8,2)´',  () => {
            expect(calc.div(8, 2)).to.be.equal(4);
        });

        it('should return Não é possível dividir 8 por 0',  () => {
            expect(calc.div(8, 0)).to.be.equal(`Não é possível dividir 8 por 0`);
        });
    });
});
