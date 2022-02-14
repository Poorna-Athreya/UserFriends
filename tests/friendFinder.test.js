// FriendFinder function
// const { exportAllDeclaration } = require('babel-types');
// const { describe } = require('yargs');
const friendFinder = require('../friendFinder');

// Succes cases:
// Should return an array of the user's friends when the user exists
// Should return message if user has no friends

// Failure cases:
// Should throw invalid if username pssed is not string
// Should throw invalid message when user does not exist 
describe('FriendFinder function', function() {
    it(`Should return an array the user's friends when the user exists`, function() {
        expect(friendFinder('Alissa Price')).toStrictEqual([ 'Iris Mcmillan', 'Gibson Eaton', 'Carey Ayala' ]);
    });
    it(`Should throw user not found message when user does not exist`, function() {
        expect(friendFinder('Jung Hoseok')).toBe(`User 'Jung Hoseok' not Found!`);
    });
    it(`Should return message if user has no friends`, function() {
        expect(friendFinder('Poorna Athreya')).toBe('User Poorna Athreya has no friends!');
    });
    it(`Should throw invalid if username pssed is not string`, function() {
        expect(friendFinder(4)).toBe('Invalid input, please enter a user name!');
        expect(friendFinder([1,2,3])).toBe('Invalid input, please enter a user name!');
    });
});