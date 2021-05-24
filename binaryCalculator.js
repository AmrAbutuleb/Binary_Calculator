let elem = document.getElementById("res");

function ClickSum(){
    elem.innerHTML+="+";
}
function ClickSub(){
    elem.innerHTML+="-";
}
function ClickMul(){
    elem.innerHTML+="*";
}
function ClickDiv(){
    elem.innerHTML+="/";
}
function ClickOne(){
    elem.innerHTML+="1";
}
function ClickZero(){
    elem.innerHTML+="0";
}
function ClickClr(){
    elem.innerHTML = "";
}

function ClickEql(){
    var expr = res.innerHTML;
    var nums = /(\d+)/g;
    // Replace all base 2 nums with base 10 equivs
    expr = expr.replace(nums, function(match) {
    return parseInt(match, 2);
    })
    // eval in base 10 and convert to base 2
    res.innerHTML = eval(expr).toString(2);
}
    