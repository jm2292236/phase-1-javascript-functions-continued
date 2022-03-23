// code your solution here

function saturdayFun(action = "roller-skate") {
    return `This Saturday, I want to ${action}!`;
}

const mondayWork = function (action = "go to the office") {
    return `This Monday, I will ${action}.`;
}

function wrapAdjective(visualFlair = "*") {
    return function(message = "special") {
        return `You are ${visualFlair}${message}${visualFlair}!`;
    }
}

