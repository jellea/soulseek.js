'use strict';

window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem; 
window.directoryEntry = window.directoryEntry || window.webkitDirectoryEntry;

var testFileSend = function (file){
  var reader = new window.FileReader();
  reader.readAsDataURL(file);
  reader.onload = onReadAsDataURL;
}
