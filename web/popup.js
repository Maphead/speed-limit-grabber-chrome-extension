// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var myURL = null;

var PopupController = function () {
  this.button20_ = document.getElementById('button20');
  this.button25_ = document.getElementById('button25');
  this.button30_ = document.getElementById('button30');
  this.button35_ = document.getElementById('button35');
  this.button40_ = document.getElementById('button40');
  this.button45_ = document.getElementById('button45');
  this.button50_ = document.getElementById('button50');
  this.button55_ = document.getElementById('button55');
  this.button60_ = document.getElementById('button60');
  this.button65_ = document.getElementById('button65');
  this.button70_ = document.getElementById('button70');
  this.button75_ = document.getElementById('button75');
  
  this.timeframe_ = document.getElementById('timeframe');
  this.addListeners_();
};

PopupController.prototype = {
  /**
   * A cached reference to the button element.
   *
   * @type {Element}
   * @private
   */
  button_: null,
  button20_: null,    
  button25_: null,  
  button30_: null,  
  button35_: null,  
  button40_: null,  
  button45_: null,  
  button50_: null,  
  button55_: null,  
  button60_: null,  
  button65_: null,
  button70_: null,  
  button75_: null,  

  /**
   * A cached reference to the select element.
   *
   * @type {Element}
   * @private
   */
  timeframe_: null,
  
  lat_: null,
  lon_: null,

  kph_: null,
  tag_: null,
  cog_: null,
  	  
	  
  /**
   * Adds event listeners to the button in order to capture a user's click, and
   * perform some action in response.
   *
   * @private
   */
  addListeners_: function () {
	  
	this.button20_.addEventListener('click', this.handleClick20_.bind(this));
	this.button25_.addEventListener('click', this.handleClick25_.bind(this));
	this.button30_.addEventListener('click', this.handleClick30_.bind(this));
	this.button35_.addEventListener('click', this.handleClick35_.bind(this));
	this.button40_.addEventListener('click', this.handleClick40_.bind(this)); 
	this.button45_.addEventListener('click', this.handleClick45_.bind(this));	   
	this.button50_.addEventListener('click', this.handleClick50_.bind(this));
	this.button55_.addEventListener('click', this.handleClick55_.bind(this));
	this.button60_.addEventListener('click', this.handleClick60_.bind(this));
	this.button65_.addEventListener('click', this.handleClick65_.bind(this));
	this.button70_.addEventListener('click', this.handleClick70_.bind(this)); 
	this.button75_.addEventListener('click', this.handleClick75_.bind(this));
	 
  },


  /**
   * Handle a success/failure callback from the `browsingData` API methods,
   * updating the UI appropriately.
   *
   * @private
   */
  handleCallback_: function () {
    var success = document.createElement('div');
    success.classList.add('overlay');
    success.setAttribute('role', 'alert');
    success.textContent = 'Send to Wikispeedia Finished.';
    document.body.appendChild(success);

    setTimeout(function() { success.classList.add('visible'); }, 10);
    setTimeout(function() {
      if (close === false)
        success.classList.remove('visible');
      else
        window.close();
    }, 4000);
  },

  
  guts: function(mph_) {
	   		  
	  var xhr = new XMLHttpRequest();
	  //get from html5 storage not the chrome storage which i couldn't get working...
      var tagraw= localStorage.getItem("likename");
      var emailraw= localStorage.getItem("likename2");
      var btcraw= localStorage.getItem("likename3");
	  tag_= encodeURIComponent(tagraw);	  	  	  	  
	  email_= emailraw;
	  btc_= btcraw;
      var myurl= "http://www.wikispeedia.org/a/process_submit_bb6.php?name=all"+
	  "&mlat="+lat_+
	  "&mlon="+lon_+
	  "&mmph="+mph_+
	  "&mkph="+kph_+
	  "&mtag="+tag_+
	  "&memail="+email_+
	  "&mbitcoin="+btc_+
	  "&mcog="+cog_+
	  ""
	  ;
	  
	  return myurl;
  },
  
  
  
  handleClick20_: function () {
	  
	  var myurl= this.guts(20);	 

	 
	  //from:   https://developer.chrome.com/extensions/xhr	  
      var xhr = new XMLHttpRequest();
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
           
         }	 
      }	  
      xhr.send();
      
      this.button20_.setAttribute('disabled', 'disabled');
      this.button20_.innerText = 'Clearing...';
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
  },
  
  handleClick25_: function () {
	  
	  var myurl= this.guts(25);	 

	 
	  //from:   https://developer.chrome.com/extensions/xhr	  
      var xhr = new XMLHttpRequest();
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
           
         }	 
      }	  
      xhr.send();
      
      this.button25_.setAttribute('disabled', 'disabled');
      this.button25_.innerText = 'Clearing...';
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
  },
  
  handleClick30_: function () {
	  
	  var myurl= this.guts(30);	 

	 
	  //from:   https://developer.chrome.com/extensions/xhr	  
      var xhr = new XMLHttpRequest();
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
           
         }	 
      }	  
      xhr.send();
      
      this.button30_.setAttribute('disabled', 'disabled');
      this.button30_.innerText = 'Clearing...';
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
  },
  
  handleClick35_: function () {
	  
	  var myurl= this.guts(35);	 

	 
	  //from:   https://developer.chrome.com/extensions/xhr	  
      var xhr = new XMLHttpRequest();
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
           
         }	 
      }	  
      xhr.send();
      
      this.button35_.setAttribute('disabled', 'disabled');
      this.button35_.innerText = 'Clearing...';
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
  },
  
  handleClick40_: function () {
	  
	  var myurl= this.guts(40);	 

	
	  //from:   https://developer.chrome.com/extensions/xhr	  
      var xhr = new XMLHttpRequest();
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
           
         }	 
      }	  
      xhr.send();
      
      this.button40_.setAttribute('disabled', 'disabled');
      this.button40_.innerText = 'Clearing...';
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
  },
  
  handleClick45_: function () {
	  
	  var myurl= this.guts(45);	 

	 
	  //from:   https://developer.chrome.com/extensions/xhr	  
      var xhr = new XMLHttpRequest();
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
           
         }	 
      }	  
      xhr.send();
      
      this.button45_.setAttribute('disabled', 'disabled');
      this.button45_.innerText = 'Clearing...';
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
  },
  
  handleClick50_: function () {
	  
	  var myurl= this.guts(50);	 

	 
	  //from:   https://developer.chrome.com/extensions/xhr	  
      var xhr = new XMLHttpRequest();
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
           
         }	 
      }	  
      xhr.send();
      
      this.button50_.setAttribute('disabled', 'disabled');
      this.button50_.innerText = 'Clearing...';
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
  },
  
  handleClick55_: function () {
	  
	  var myurl= this.guts(55);	 

	 
	  //from:   https://developer.chrome.com/extensions/xhr	  
      var xhr = new XMLHttpRequest();
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
           
         }	 
      }	  
      xhr.send();
      
      this.button55_.setAttribute('disabled', 'disabled');
      this.button55_.innerText = 'Clearing...';
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
  },
  
  handleClick60_: function () {
	  
	  var myurl= this.guts(60);	 

	  
	  //from:   https://developer.chrome.com/extensions/xhr	  
      var xhr = new XMLHttpRequest();
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
           
         }	 
      }	  
      xhr.send();
      
      this.button60_.setAttribute('disabled', 'disabled');
      this.button60_.innerText = 'Clearing...';
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
  },
  
  handleClick65_: function () {
	  
	  var myurl= this.guts(65);	 

	 
	  //from:   https://developer.chrome.com/extensions/xhr	  
      var xhr = new XMLHttpRequest();
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
           
         }	 
      }	  
      xhr.send();
      
      this.button65_.setAttribute('disabled', 'disabled');
      this.button65_.innerText = 'Clearing...';
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
  },
  
  handleClick70_: function () {
	  
	  var myurl= this.guts(70);	 

	
	  //from:   https://developer.chrome.com/extensions/xhr	  
      var xhr = new XMLHttpRequest();
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
           
         }	 
      }	  
      xhr.send();
      
      this.button70_.setAttribute('disabled', 'disabled');
      this.button70_.innerText = 'Clearing...';
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
  },
  
  handleClick75_: function () {	  
	  
	  var myurl= this.guts(75);	 
 
	  
	  
	  var xhr = new XMLHttpRequest();
	  //from:   https://developer.chrome.com/extensions/xhr	  
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
            //document.getElementById("resp").innerText = xhr.responseText;	
         }	 
      }	  
      xhr.send();
      
      this.button75_.setAttribute('disabled', 'disabled');
      this.button75_.innerText = 'Clearing...';
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
	  
  }
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
};

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. When the popup is opened, there is certainly a window and at least
    // one tab, so we can safely assume that |tabs| is a non-empty array.
    // A window can only have one active tab at a time, so the array consists of
    // exactly one tab.
    var tab = tabs[0];

    // A tab is a plain object that provides information about the tab.
    // See https://developer.chrome.com/extensions/tabs#type-Tab
    var url = tab.url;

    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });

}


/**
 * Toggles visibility for all the elements of the same class.
 * Added by Alirio Arevalo
 *
 * @param {string} element_class - class to be toggled
 * @param {string} displayState - set display style's value (block: visible - none: invisible)
 */

function toggle(element_class, displayState){
    var elements = document.getElementsByClassName(element_class)

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = displayState;
    }
}

document.addEventListener('DOMContentLoaded', function () {
  window.PC = new PopupController();  
  //Added by Alirio Arevalo to replace not working URL method 
  //(see commented call to chrome.runtime.sendMessage below)
  
  //Activate plugin functionality using current tab URL (included in manifest permission)
  getCurrentTabUrl(function(url) {
		myURL = url;
		//Checks URL is a valid Street View string
		if (!(myURL.indexOf("y,")!==-1 ||
			myURL.indexOf("h,")!==-1 ||
			myURL.indexOf("t/data")!==-1 ||
			myURL.indexOf("maps/@")!==-1)) {
			//Hide speed input buttons for invalid URLs and displays an error message
			toggle('speed_button','none');
			var wrongURL = document.createElement('div');
			wrongURL.classList.add('overlay');
			wrongURL.setAttribute('role', 'alert');
			wrongURL.textContent = 'Current Tab is not a valid Street View web page';
			document.body.appendChild(wrongURL);
			setTimeout(function() { wrongURL.classList.add('visible'); }, 10);
			setTimeout(function() {
			  if (close === false)
				wrongURL.classList.remove('visible');
			  else
				window.close();
			}, 4000);			
			}
		else {
			//Show speed input buttons to allow normal pop up funcionality
			toggle('speed button','block');
			var section = document.querySelector('body>section');
			//var results = response.result;
			var ol = document.createElement('ol');
			var li, p, em, code, text1;
			var i;	  
			i=myURL.length-1;
			li = document.createElement('li');
			p = document.createElement('p');
			em = document.createElement('em');
			em.textContent = i + 1;		
			code = document.createElement('code');
			//code.textContent = results[i].url + " debugging";		
			code.textContent = myURL;
			//text1 = document.createTextNode(
			//  chrome.i18n.getMessage('navigationDescription',
			//    [results[i].numRequests,
			//    results[i].average]));
			//p.appendChild(em);
			p.appendChild(code);
			//p.appendChild(text1);
			li.appendChild(p);
			ol.appendChild(li);
			section.innerHTML = '';
			section.appendChild(ol);
			var myguts = code.textContent;
			var coord_start = myguts.indexOf("/@");
			var str= myguts.substring(coord_start+2,75);
			var res = str.split(",");
			lat_= res[0];
			lon_= res[1];
			var cogh= res[4];
			var n = cogh.length;
			cog_= cogh.substring(0,n-1);
			kph_= "69";  				
		}
  });

  
});















/**
 * @filedescription Initializes the extension's popup page.
 */

// chrome.runtime.sendMessage(
    // {'type': 'getMostRequestedUrls'},
    // function generateList(response) {
      // var section = document.querySelector('body>section');
      // var results = response.result;
      // var ol = document.createElement('ol');
      // var li, p, em, code, text1;
      // var i;	  
      // i=results.length-1;
        // li = document.createElement('li');
        // p = document.createElement('p');
        // em = document.createElement('em');
        // em.textContent = i + 1;		
        // code = document.createElement('code');
        // //code.textContent = results[i].url + " debugging";		
		// code.textContent = myURL;
        // text1 = document.createTextNode(
          // chrome.i18n.getMessage('navigationDescription',
            // [results[i].numRequests,
            // results[i].average]));
        // p.appendChild(em);
        // p.appendChild(code);
        // p.appendChild(text1);
        // li.appendChild(p);
        // ol.appendChild(li);
      
      // section.innerHTML = '';
      // section.appendChild(ol);
	  
	  
	 
	  
	 

	  // var myguts = code.textContent;
      // var str= myguts.substring(29,75);
      // var res = str.split(",");
      // lat_= res[0];
      // lon_= res[1];
      // var cogh= res[4];
      // var n = cogh.length;
      // cog_= cogh.substring(0,n-1);
	  // kph_= "69";
	  
	  

	  
	  
	  
    // });