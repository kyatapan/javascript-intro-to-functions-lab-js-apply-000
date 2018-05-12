function shout(string) {
  return string.toUpperCase();
}

function sayHiToGrandma(string) {
  var uppercase = string.toUpperCase;
  var lowercase = string.toLowerCase;
  
  if(string == 'I love you, Grandma.') {
    return 'I love you, too.';
  }
  else if (string == uppercase) {
    return 'YES INDEED!';
  }
}