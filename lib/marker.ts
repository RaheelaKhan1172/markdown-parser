
var m = (function() {
  let defaultSyntax = "span";

  let mSyntax = {
    "#": "h1",
    "##": "h2",
    "###": "h3",
    "####": "h4",
    "#####": "h5",
    "######": "h6"
  };

  let reg = /[#?]+/g;

  function containsMarkDown(input) {
    var toReturn = [];
    var myArray;
    console.log("regex", reg);
    while ((myArray = reg.exec(input)) !== null) {
      console.log("testing", myArray);
      console.log("reg", reg.lastIndex);
      toReturn.push(mSyntax[myArray[0]]);
    }

    let m = reg.exec(input);
    console.log("m", m, input, toReturn); 
    if (toReturn) {
      return toReturn;          
    }

    return [defaultSyntax]; 
  }

  function removeMarkDown(input) {
  console.log("input", input);
    let m = input.match(reg);
  console.log(" match in remove", m);
    if (m) {
      return input.replace(m[0],"");
    }
    return input;
  }

  return {
    containsMarkDown: containsMarkDown,
    removeMarkDown: removeMarkDown
  }
    

})();

export default m;
