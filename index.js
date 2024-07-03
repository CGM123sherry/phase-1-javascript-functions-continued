// code your solution here
//function declaration
function saturdayFun (activity = "roller-skate"){
    return (`This Saturday, I want to ${activity}!`);
}
//function expression
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};
//scope chain
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }