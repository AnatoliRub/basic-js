const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

    return Array.isArray(members) == false
    ?
    false
    :
    members.length == 0
    ?
    null
    :
    members.reduce((teamName, item) => {
    return typeof item !== 'string' ? teamName : teamName + item.trim().split('')[0].toUpperCase() }, [])
  .split('')
  .sort()
  .join('')
}
