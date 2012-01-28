var STRONG = 'ABCDEFGHJKLMNPQRSTUVWabcdefghijkmnopqrstuvw0123456789+/-_*()[]{}'
var WEAK =   'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

var TIME_UNTIL_EXPIRY = 24 * 7 ; // 7 days
var DEFAULT_LENGTH = "12";
var DEFAULT_CHARSET = STRONG;
  
function generatePassword() {
  var password = "";
  var key = encrypt($('#master').val());
  var data = $('#url').val();
  
  var password = encrypt(key + data);
  password = base64_encode(password, $('#charset').val());
  password = password.substring(0, $('#length').val());

  $('#password').val(password);
}

function encrypt(data) {
  return hex_sha256(data);
}

function getDomain(url) {
  var current_URL = '';
  if (url.indexOf('?') > -1) {
  	current_URL = unescape(url.substr(url.indexOf('?')+1));
  }

  if (current_URL == 'localhost')
    return current_URL;
  if (IsIp(current_URL)) 
    return current_URL;
  if (current_URL == '')
    return current_URL;

  var split = current_URL.split('.'); //location.hostname.split('.');
  var domain = [split.pop()];
  var item;

  while (item = split.pop()) {
    domain.unshift(item);
    if (item.length > 2) {
      break;
    }
  }

  return domain.join('.');
}

function IsIp(ip) {
  var regexp = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/
  return regexp.test(ip);
}

function setCharset(charset) {
  $("charset").value = charset;
}