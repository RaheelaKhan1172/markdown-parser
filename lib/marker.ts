
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


  function containsMarkDown(input) {
    let reg = /[#?]+/g;
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
    if (toReturn.length) {
      return toReturn;          
    }

    return [defaultSyntax]; 
  }

  function removeMarkDown(input) {
    let reg = /[#?]+/;
    return input.split(reg).filter(elem => elem) || input;
    /*var toReturn = [];
    var arr;
    console.log("I return", toReturn);
    var fixed = [];
    for (var i = 0; i < toReturn.length;i++ ) {
      var currentElem = input.replace(toReturn[i][0]);
      
    }

    let m = input.match(reg);
    console.log(" match in remove", m);
    if (m) {
      return input.replace(m[0],"");
    }
    return input; */
  }

  return {
    containsMarkDown: containsMarkDown,
    removeMarkDown: removeMarkDown
  }
    

})();

export default m;
