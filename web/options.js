// Saves options to chrome.storage
function save_options() {
 
  var likesName  = document.getElementById('likename').value;
  var likesName2  = document.getElementById('likename2').value;
  var likesName3  = document.getElementById('likename3').value;
  
  //also store it in html5 storage, not chrome storage which i couldnt get working
  localStorage.setItem("likename", likesName);
  localStorage.setItem("likename2", likesName2);
  localStorage.setItem("likename3", likesName3);
  
  
  chrome.storage.sync.set({
   
	likesName:  likesName,
	likesName2: likesName2,
	likesName3: likesName3
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
 
	likesName: 'your name',
	likesName2: 'your email address',
	likesName3: 'your btc number'
  }, function(items) {
  
	document.getElementById('likename').value= items.likesName;
	document.getElementById('likename2').value= items.likesName2;
	document.getElementById('likename3').value= items.likesName3;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);