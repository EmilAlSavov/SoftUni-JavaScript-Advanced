const mocha = require('mocha');
const chai = require('chai');
const bookSelection = require('./solution');
const { assert, expect } = require('chai');

describe("Tests …", function() { 
    describe("bookSelection", function() {
            it("shouldn't be suitable for kids", function()
            { 
                let genre = 'Horror';
                let age = 11;

                let result = bookSelection.isGenreSuitable(genre, age);

                expect(result).to.be.equal(`Books with ${genre} genre are not suitable for kids at ${age} age`)
            }); 
        }); 
        // TODO: … 
    });