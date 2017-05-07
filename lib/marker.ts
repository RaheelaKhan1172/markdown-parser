
var m = (function() {
  let defaultSyntax = "span";
  
  
  let mSyntax = {
    "#": "h1",
    "##": "h2",
    "###": "h3",
    "####": "h4",
    "#####": "h5",
    "######": "h6",
    "*": "em",
    "**": "strong",
    "~~": "del"
  };

  var regexs = {
    "headers": {
      "atStart": /^(#+)/,
      "any": /(#+)/
    }
  };

  function parseHeaderAtStart(input) {
    console.log("inpuy", input, input.split(/\n/));
    //case 1, header match at start
    let reg = /\b([!@\$%\^\&*\)\(+=._-]|[\s]+|[\w]+)\b.*/;
    let atStart = /^(#+)|(\n#+)|(\0#+)|(\r#+)|(\t#+)/;

    let match = input.match(reg);
    let theMarkdown = input.match(regexs.headers.atStart);
    let parsedVals = [];
    console.log("the match",match);
    let arr;
    let marks;

    let splitted = input.split(/\n/);
    for (var i = 0; i < splitted.length;i++) {
      arr = reg.exec(splitted[i]);
      marks = atStart.exec(splitted[i]);
      let obj = {parsed: "", md: ""};
      
      if (arr) {
        obj.parsed = arr[0];
      } else {
        obj.parsed = splitted[i];
      }

      if (marks) {
        obj.md = mSyntax[marks[0]];
      } else {
        obj.md = defaultSyntax;
      }

      parsedVals.push(obj);
    }
    /*while (((arr = reg.exec(input)) !== null) && ((marks = atStart.exec(input)) !== null)) {
      console.log("arr", arr);
      console.log("marks", marks);
      let mark = "";
      for (var i = 0; i < marks[0].length;i++) {
        if (marks[0][i] === "#") {
          mark += marks[0][i];
        }
      }
    
      parsedVals.push({md: mSyntax[mark], parsed: arr[0]});
    } */

    if (parsedVals.length) {
      return parsedVals;
    }
    
   return [{md: mSyntax[theMarkdown[1]], parsed: input}]; 
  }

  function containsMarkDown(input) {
    let atStart = regexs.headers.atStart;
    let any = regexs.headers.any;

    let result = atStart.test(input); 

    if (result) {
      return parseHeaderAtStart(input);
    }
   
    return [{md: defaultSyntax, parsed: input }]; 
    /*console.log(result);
    if (!result) {
     result = any.test(input); 
    } 

    return result; */
  }
  
  function parseMarkDown(input) {
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

  /* remove markdown only if it's followed by 
     another character */
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
    removeMarkDown: removeMarkDown,
    parseMarkDown: parseMarkDown
  }
    

})();

export default m;
