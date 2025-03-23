// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

// console.log(saturdayFun())
// console.log(saturdayFun("Play"))

const mondayWork = function (activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

// console.log(mondayWork())
// console.log(mondayWork("play"))

function wrapAdjective(param = "*"){
    return function(arg = "special"){
        return `You are ${param}${arg}${param}!`
    } 
}

// console.log(wrapAdjective("!!!")("a dedicated programmer"))
