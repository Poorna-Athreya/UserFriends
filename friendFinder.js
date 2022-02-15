// console.log(findFriend("Jung Hoseok"))
function findFriend(userName) {
            if(typeof userName != 'string') return 'Invalid input, please enter a user name!';

    const   userDetails = require('./userDetails.json');
    let     userFriends, flag = 0;
            userDetails.forEach(user => {
                if(user.name == userName) {
                    userFriends = user.friends.reduce(
                        (obj, item) => Object.assign(obj, {[item.id]: item.name}), []);
                    flag = 1;
                }         
            });
            if(flag == 0) return `User '${userName}' not Found!`;
            if(userFriends.length == 0) return `User ${userName} has no friends!`;
            return userFriends;
}    
module.exports = findFriend;
