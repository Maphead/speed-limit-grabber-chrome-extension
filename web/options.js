
// Saves options to chrome.storage
function save_options() {
 
  var likesName  = document.getElementById('likename').value;
  var likesName2  = document.getElementById('likename2').value;
  var likesName3  = document.getElementById('likename3').value;
  
  if (likesName2==chrome.i18n.getMessage("yourEmailTxt")){
	  likesName2 = "";
  }
  
  if (likesName3==chrome.i18n.getMessage("yourBTCTxt")){
	  likesName3 = "";
  }
  
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
    status.textContent = chrome.i18n.getMessage("optionsSavedLbl");
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
 
	likesName: chrome.i18n.getMessage("yourNameTxt"),// 'your name',
	likesName2: chrome.i18n.getMessage("yourEmailTxt"),// 'your email address',
	likesName3: chrome.i18n.getMessage("yourBTCTxt")// 'your btc number'
  }, function(items) {
  
	document.getElementById('likename').value= items.likesName;
	document.getElementById('likename2').value= items.likesName2;
	document.getElementById('likename3').value= items.likesName3;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
document.getElementById('title').innerHTML = chrome.i18n.getMessage("optionsLbl");
document.getElementById('optional').innerHTML = chrome.i18n.getMessage("optionalLbl");
document.getElementById('option-name').innerHTML = chrome.i18n.getMessage("nameLbl");
document.getElementById('option-payment').innerHTML = chrome.i18n.getMessage("getPaidLbl");
document.getElementById('option-email').innerHTML = chrome.i18n.getMessage("emailLbl");
document.getElementById('option-btc').innerHTML = chrome.i18n.getMessage("orBTCLbl");
document.getElementById('save').innerHTML = chrome.i18n.getMessage("saveLbl");
