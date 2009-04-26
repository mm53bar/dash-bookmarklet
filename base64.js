// from http://en.wikipedia.org/wiki/Base64
// -- adjusted to add charset parameter
function base64_encode (s, charset)
{
  // the result/encrypted string, the padding string, and the pad count
  var r = ""; 
  var p = ""; 
  var c = s.length % 3;
  charset = charset.split("");
 
  // add a right zero pad to make this string a multiple of 3 characters
  if (c > 0) { 
    for (; c < 3; c++) { 
      p += '='; 
      s += "\0"; 
    } 
  }
 
  // increment over the length of the string, three characters at a time
  for (c = 0; c < s.length; c += 3) {
 
    // these three 8-bit (ASCII) characters become one 24-bit number
    var n = (s.charCodeAt(c) << 16) + (s.charCodeAt(c+1) << 8) + s.charCodeAt(c+2);
 
    // this 24-bit number gets separated into four 6-bit numbers
    n = [(n >>> 18) & 63, (n >>> 12) & 63, (n >>> 6) & 63, n & 63];
 
    // those four 6-bit numbers are used as indices into the base64 character list
    r += charset[n[0]] + charset[n[1]] + charset[n[2]] + charset[n[3]];
  }
   // add the actual padding string, after removing the zero pad
  return r.substring(0, r.length - p.length) + p;
}