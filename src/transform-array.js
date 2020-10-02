const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

    if (arr.length === 0) return []
    let answer = []
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-prev':
                if ((i > 0) && (arr[i - 2] !== '--discard-next')) {
                    answer.pop()
                }
                break
            case '--discard-next':
                i++
                break
            case '--double-next':
                if (i < arr.length - 1)
                    answer.push(arr[i + 1])
                break
            case '--double-prev':
                if ((i > 0) && (arr[i - 2] !== '--discard-next'))
                    answer.push(arr[i - 1])
                break
            default:
                answer.push(arr[i])
        }
    }
    return answer
};