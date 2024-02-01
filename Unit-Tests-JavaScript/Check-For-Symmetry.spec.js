import { isSymmetric } from './Check-For-Symmetry.js';
import { expect } from 'chai';
// //· Take an array as an argument

// · Return false for any input that isn't of the correct type

// · Return true if the input array is symmetric

// · Otherwise, return false



describe('Check For Symmetry tests', () => {
    it('Return false if incorrect type of array is given', () => {
        //Arrange
        const wrongArray = [1, 3, 2, 2, 1, 3];
        //Act
        const result = isSymmetric(wrongArray);
        //Assert
        expect(result).to.be.false;
    })
});
