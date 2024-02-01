import { expect } from 'chai'
import { isOddOrEven } from './evenOrOdd.js'



describe("Even Or Odd Unit Tests", () => {
    it("should return undefined if undefined or null is given", ()=> {

        //Arrange
        //Act
        let undefinedIsGiven = isOddOrEven(undefined)
        let nullIsGiven = isOddOrEven(null)
        let numberIsGiven = isOddOrEven(10)
        let floatIsGiven = isOddOrEven(2,32)
        //Assert
        expect (undefinedIsGiven).to.be.undefined
        expect (nullIsGiven).to.be.undefined
        expect (numberIsGiven).to.be.undefined
        expect (floatIsGiven).to.be.undefined
    })
    it("should return even if even string is given", ()=> {

        //Arrange
        let evenString = "3333"
        //Act
        let result = isOddOrEven(evenString)
        //Assert
        expect (result).to.equal("even");
    })
    it("should return odd if odd string is given", ()=> {

        //Arrange
        let oddString = "333"
        //Act
        let result = isOddOrEven(oddString)
        //Assert
        expect (result).to.equal("odd")
    })
   
})