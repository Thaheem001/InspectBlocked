document.addEventListener('keydown', function() {
  if (event.keyCode == 123) {
   
window.event.returnValue = false;
e.preventDefault();
    return false;

  }


  if (event.keyCode == 123) {
   e.preventDefault();
window.event.returnValue = false;
    return false;
  }





else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
 
    e.preventDefault();
window.event.returnValue = false;

    return false;
  } else if (event.ctrlKey && event.keyCode == 85) {
e.preventDefault();
 
window.event.returnValue = false;

    return false;
  }
}, false);

if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e) {
 
    e.preventDefault();
  }, false);
} else {
  document.attachEvent('oncontextmenu', function() {
 
  e.preventDefault();
    window.event.returnValue = false;
  });
}


document.onkeydown = function(e) {

if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
e.preventDefault();
window.event.returnValue = false;

return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
e.preventDefault();
window.event.returnValue = false;

return false;
}
if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
e.preventDefault();
window.event.returnValue = false;

return false;
}
}
