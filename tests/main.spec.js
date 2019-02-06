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
import { fizzBuzz } from '../src/main';

describe('Fizz Buzz', () => {
    it('should return `Fizz` when multiple of 3', () => {
        expect(fizzBuzz(3)).to.be.equal('fizz');
        expect(fizzBuzz(6)).to.be.equal('fizz');
    });

    it('should return `Buzz` when multiple of 5', () => {
        expect(fizzBuzz(5)).to.be.equal('buzz');
        expect(fizzBuzz(10)).to.be.equal('buzz');
    });

    it('should return `FizzBuzz` when multiple of 3 and 5', () => {
        expect(fizzBuzz(15)).to.be.equal('fizzbuzz');
    });

    it('should return the number when non-multiple', () => {
        expect(fizzBuzz(7)).to.be.equal(7);
    });

    it('should return 0 when 0', () => {
        expect(fizzBuzz(0)).to.be.equal(0);
    });
});
