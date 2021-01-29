const {assert} = require('chai')
const { saySuccess } = require('../index')
const { addNumbers } = require('../index')

describe('Unit Testing', function() {
    it('saySuccess should return working...', function() {
        assert.equal(saySuccess(), 'Working...')
    })
    it('saySuccess should return type of string', function() {
        assert.typeOf(saySuccess(), 'string')
    })

    it("addNumbers should addition of two numbers", function() {
        assert.isAbove(addNumbers(5,5), 9)
    })
    it("addNumbers should type of number", function() {
        assert.typeOf(addNumbers(5,5), 'number')
    })
})