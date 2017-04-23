
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

  let reg = /[#?]+/;

  function containsMarkDown(input) {
    let m = input.match(reg);
    console.log("am I hit?", input);
    if (m) {
      return mSyntax[m[0]];           
    }

    return defaultSyntax; 
  }

  return {
    containsMarkDown: containsMarkDown
  }
    

})();

export default m;
