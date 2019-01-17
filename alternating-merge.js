// merges up to 2 strings together in an alternating pattern
// merge('abc') === 'abc'
// merge('abc', '123') === 'a1b2c3'
function merge() {
    let i, result = '';
  
    // if there is only one arugument, return it as is
    // no need to "merge" it
    if( arguments.length === 1 ) {
      return arguments[0];
      }
  
    // merge argument[0] with argument[1] alternating values
    for( i = 0; i < arguments[0].length; i++ ) {
      result += arguments[0][i] + (arguments[1].length <= i ? '' : arguments[1][i]);
    }
    
    // return the value along with any other remaining values in argument[1]
    return (result += arguments[1].substring(i));
  }
  
  console.log(merge('abc') === 'abc');
  console.log(merge('abc', '123') === 'a1b2c3');
  console.log(merge('abc', '123456') === 'a1b2c3456');
  console.log(merge('abcdefg', '123') === 'a1b2c3defg');