
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
    "asteriskOne": /\*{1}(?=[^\*].*\*{1})/,
    "asteriskTwo": /\*{2}(?=[^\*].*\*{2})/,
    "del": /~{2}(?=[^~].*~{2})/
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
          obj.parsed = "<" + defaultSyntax+">" + splitted[i] + "</"+defaultSyntax+">";
        }
      } else {
        console.log("le split",splitted);
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
    console.log("intput"); 
   return [{ parsed: "<" + defaultSyntax + ">" + input + "</" + defaultSyntax +">"}]; 
  }


  function parseAsterisk(input, type) {
    let extractReg = null;
    let textReg = null;
    let atIndex = null; 
    if (type === "d") {
      extractReg = new RegExp(regexs.del);
      textReg = new RegExp(/~{2}([^~].*?)~{2}/);
      atIndex = 1;
    } else if (type === "a") {
      extractReg = new RegExp(regexs.asteriskOne);
      textReg = new RegExp(/(\*{1}([^\*].*?)\*{1})/);
    } else if (type === "a2") {
      extractReg = new RegExp(regexs.asteriskTwo);
      textReg = new RegExp(/(\*{2}([^\*].*?)\*{2})/);
    }
    
    atIndex = !(atIndex)? 2 : 1;
    let parsedVals = [];
    
    let arr;
    let marks;
    
    let obj = {parsed: ""};
    console.log("the input", input, type);
    for (var i = 0; i < input.length;i++) {
      console.log("at i", input[i]);
      var hasMarks = false;
      arr = textReg.exec(typeof input[i] === 'object' ? input[i].parsed : input[i]); 
      marks = extractReg.exec(typeof input[i] === 'object' ? input[i].parsed : input[i])
        console.log("arr", arr);
        console.log("marks", marks);
        if (arr && marks) { 
          obj.parsed = "<" + mSyntax[marks[0]] + ">" + arr[atIndex] + "</" + mSyntax[marks[0]] + ">";
          if (typeof input[i] === 'object') {
            input[i] = input[i].parsed.replace(arr[0], obj.parsed);
          } else {
            input[i] = input[i].replace(arr[0], obj.parsed);
          }
          parsedVals.push( typeof input[i] === 'object' ? input[i] : {parsed: input[i]});
        } else {
       console.log("arr after and marks", arr,marks, hasMarks);
        console.log("ey yo?", input[i], parsedVals);
        console.log("retry");
        
        parsedVals.push(typeof input[i] === 'object' ? input[i] : { parsed: input[i]});
      }
    }
    console.log("parsed it", parsedVals);
    if (parsedVals.length) {
      return parsedVals;
    }

     /*
      arr = textReg.exec(typeof input[i] === 'object' ?   input[i].parsed : input[i]);
      marks = extractReg.exec(typeof input[i] === 'object' ?  input[i].parsed : input[i]);
      let obj = {parsed: ""};
      console.log("arr", arr, marks, marks[marks.length-1], marks[3]);
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
        parsedVals.push(typeof input[i] === 'object' ? input[i] : {parsed: input[i]});
      }
    }

    if (parsedVals.length) {
      return parsedVals;
    }
    */ 
    console.log("after", input); 
    return [{parsed: 'parsed' in input[0]? input[0].parsed : input[0]}];
  }

  /* split up all the different regex 
      go through the current line one by one and 
      see if it is in input */

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

    let asteriskTwo = regexs.asteriskTwo;
    let asteriskTwoResult = asteriskTwo.test(input);

    if (asteriskTwoResult) {
      parsedVals = parseAsterisk(parsedVals.length? parsedVals : [input], "a2");
    }

    let asteriskOne = regexs.asteriskOne; 
    let asteriskOneResult = asteriskOne.test(input);
    
    if (asteriskOneResult) {
      console.log("parsed", parsedVals); 
      parsedVals = parseAsterisk(parsedVals.length? parsedVals : [input], "a");
    }


    let del = regexs.del;
    let delResult = del.test(input);
    
    if (delResult) {
      parsedVals = parseAsterisk(parsedVals.length? parsedVals : [input], "d");
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
