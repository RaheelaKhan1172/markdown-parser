
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
    },
    "asterisks": /\*{1,2}(?=[^\*].*\*{1,2})/g
  };

  function parseHeaderAtStart(input) {
    console.log("inpuy", input, input.split(/\n/));
    //case 1, header match at start
    let reg = /(\s|\w).*/;
    let atStart = /^(#+)|(\n#+)|(\0#+)|(\r#+)|(\t#+)/;

    let match = input.match(reg);
    let theMarkdown = input.match(regexs.headers.atStart);
    let parsedVals = [];
    console.log("the match",match);
    let arr;
    let marks;
    /* regex is wrong for matching space or words so fix that */
    let splitted = input.split(/\n/).filter(elem => elem);
    for (var i = 0; i < splitted.length;i++) {
      arr = reg.exec(splitted[i]);
      marks = atStart.exec(splitted[i]);
      let obj = {parsed: ""};
      if (!arr && marks) {
        obj.parsed = "<" + mSyntax[marks[0]] + ">" + splitted[i] + "</" + mSyntax[marks[0]] + ">";
      }
      else if (arr) {
        if (marks) {
          obj.parsed = "<"+mSyntax[marks[0]]+">" + arr[0] + "</"+mSyntax[marks[0]]+">";
        } else {
          obj.parsed = "<" + defaultSyntax+">" + arr[0] + "</"+defaultSyntax+">";
        }
      } else {
        obj.parsed = "<" + defaultSyntax + ">" + splitted[i] + "</"+defaultSyntax + ">";
      }



      console.log("arr",arr);
      console.log("marks", marks);
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
    
   return [{ parsed: "<" + defaultSyntax + ">" + input + "</" + defaultSyntax +">"}]; 
  }


  function parseAsterisk(input) {
    let textReg = /\*{1,2}(.*?)\*{1,2}/;
    let extractReg = /\*+(?=.*)/;

    let parsedVals = [];
    
    let arr;
    let marks;
   

    for (var i = 0; i < input.length;i++) {
      arr = textReg.exec(typeof input[i] === 'object' ?   input[i].parsed : input[i]);
      marks = extractReg.exec(typeof input[i] === 'object' ?  input[i].parsed : input[i]);
      let obj = {parsed: ""};
      console.log("arr", arr, marks);
      if (arr) {
        if (marks) {
          obj.parsed = "<" + mSyntax[marks[0]] + ">" + arr[1] + "</" + mSyntax[marks[0]] + ">";
          if (typeof input[i] === 'object') {
            input[i] = input[i].parsed.replace(arr[0], obj.parsed);
          } else {
            input[i] = input[i].replace(arr[0], obj.parsed);
          }
        }
        parsedVals.push({parsed: input[i]}); 
      } else {
        parsedVals.push(input[i]);
      }
    }

    if (parsedVals.length) {
      return parsedVals;
    }   
    
    let theMarkdown = input.match(extractReg);
    console.log("the markDown", theMarkdown);
    return [{md: mSyntax[theMarkdown[1]], parsed: input}];
  }

  function containsMarkDown(input) {

    let parsedVals = [];
    /* header parsing */
    let atStart = regexs.headers.atStart;

    let result = atStart.test(input); 

    if (result) {
      parsedVals = parseHeaderAtStart(input);
    }
    console.log("yello", parsedVals);   
    /* em, del, bold parsing */
    let asterisk = regexs.asterisks; 
    let asteriskResult = asterisk.test(input);
    
    if (asteriskResult) {
      console.log("parsed", parsedVals); 
      parsedVals = parseAsterisk(parsedVals.length? parsedVals : [input]);
    }

    if (parsedVals.length) {
      return parsedVals;
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
