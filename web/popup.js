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
  this.button80_ = document.getElementById('button80');
  this.button85_ = document.getElementById('button85');
  this.button15sz_ = document.getElementById('button15_school');
  this.button20sz_ = document.getElementById('button20_school');
  this.button25sz_ = document.getElementById('button25_school');
  this.button30sz_ = document.getElementById('button30_school');
  this.button35sz_ = document.getElementById('button35_school');
  this.button20k_ = document.getElementById('button20k');
  this.button30k_ = document.getElementById('button30k');
  this.button40k_ = document.getElementById('button40k');
  this.button50k_ = document.getElementById('button50k');
  this.button60k_ = document.getElementById('button60k');
  this.button70k_ = document.getElementById('button70k');
  this.button80k_ = document.getElementById('button80k');
  this.button90k_ = document.getElementById('button90k');
  this.button100k_ = document.getElementById('button100k');
  this.button110k_ = document.getElementById('button110k');
  this.button120k_ = document.getElementById('button120k');
  this.button130k_ = document.getElementById('button130k');
  this.button0_ = document.getElementById('button0');
	
  
  this.timeframe_ = document.getElementById('timeframe');
  this.addListeners_();
  this.addLabels_();
  document.getElementById("title").innerHTML = chrome.i18n.getMessage("popTitleLbl");
  document.getElementById("header").innerHTML = chrome.i18n.getMessage("popHeaderLbl");
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
  button80_: null,
  button85_: null,
  button15sz_: null,
  button20sz_: null,
  button25sz_: null,
  button30sz_: null,
  button35sz_: null,
  button20k_: null,
  button30k_: null,
  button40k_: null,
  button50k_: null,
  button60k_: null,
  button70k_: null,
  button80k_: null,
  button90k_: null,
  button100k_: null,
  button110k_: null,
  button120k_: null,
  button130k_: null,
  button0_: null,
	
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
	this.button80_.addEventListener('click', this.handleClick80_.bind(this));
	this.button85_.addEventListener('click', this.handleClick85_.bind(this));
	this.button20k_.addEventListener('click', this.handleClick20k_.bind(this));
	this.button30k_.addEventListener('click', this.handleClick30k_.bind(this));
	this.button40k_.addEventListener('click', this.handleClick40k_.bind(this));
	this.button50k_.addEventListener('click', this.handleClick50k_.bind(this));
	this.button60k_.addEventListener('click', this.handleClick60k_.bind(this));
	this.button70k_.addEventListener('click', this.handleClick70k_.bind(this));
	this.button80k_.addEventListener('click', this.handleClick80k_.bind(this));
	this.button90k_.addEventListener('click', this.handleClick90k_.bind(this));
	this.button100k_.addEventListener('click', this.handleClick100k_.bind(this));
	this.button110k_.addEventListener('click', this.handleClick110k_.bind(this));	
	this.button120k_.addEventListener('click', this.handleClick120k_.bind(this));
	this.button130k_.addEventListener('click', this.handleClick130k_.bind(this));
	this.button15sz_.addEventListener('click', this.handleClick15sz_.bind(this));
	this.button20sz_.addEventListener('click', this.handleClick20sz_.bind(this));
	this.button25sz_.addEventListener('click', this.handleClick25sz_.bind(this));
	this.button30sz_.addEventListener('click', this.handleClick30sz_.bind(this));
	this.button35sz_.addEventListener('click', this.handleClick35sz_.bind(this));
	this.button0_.addEventListener('click', this.handleClick0_.bind(this));
  },
  
  addLabels_: function() {
	this.button20_.innerText = chrome.i18n.getMessage("sendSpeedLbl",["20","MPH"]);
	this.button25_.innerText = chrome.i18n.getMessage("sendSpeedLbl",["25","MPH"]);
	this.button30_.innerText = chrome.i18n.getMessage("sendSpeedLbl",["30","MPH"]);
	this.button35_.innerText = chrome.i18n.getMessage("sendSpeedLbl",["35","MPH"]);
	this.button40_.innerText = chrome.i18n.getMessage("sendSpeedLbl",["40","MPH"]);
	this.button45_.innerText = chrome.i18n.getMessage("sendSpeedLbl",["45","MPH"]);
	this.button50_.innerText = chrome.i18n.getMessage("sendSpeedLbl",["50","MPH"]);
	this.button55_.innerText = chrome.i18n.getMessage("sendSpeedLbl",["55","MPH"]);
	this.button60_.innerText = chrome.i18n.getMessage("sendSpeedLbl",["60","MPH"]);
	this.button65_.innerText = chrome.i18n.getMessage("sendSpeedLbl",["65","MPH"]);
	this.button70_.innerText = chrome.i18n.getMessage("sendSpeedLbl",["70","MPH"]);
	this.button75_.innerText = chrome.i18n.getMessage("sendSpeedLbl",["75","MPH"]);
	this.button80_.innerText = chrome.i18n.getMessage("sendSpeedLbl",["80","MPH"]);
	this.button85_.innerText = chrome.i18n.getMessage("sendSpeedLbl",["85","MPH"]);
	this.button20k_.innerText = chrome.i18n.getMessage("sendSpeedLbl",["20","Km/h"]);
	this.button30k_.innerText = chrome.i18n.getMessage("sendSpeedLbl",["30","Km/h"]);
	this.button40k_.innerText = chrome.i18n.getMessage("sendSpeedLbl",["40","Km/h"]);
	this.button50k_.innerText = chrome.i18n.getMessage("sendSpeedLbl",["50","Km/h"]);
	this.button60k_.innerText = chrome.i18n.getMessage("sendSpeedLbl",["60","Km/h"]);
	this.button70k_.innerText = chrome.i18n.getMessage("sendSpeedLbl",["70","Km/h"]);
	this.button80k_.innerText = chrome.i18n.getMessage("sendSpeedLbl",["80","Km/h"]);
	this.button90k_.innerText = chrome.i18n.getMessage("sendSpeedLbl",["90","Km/h"]);
	this.button100k_.innerText = chrome.i18n.getMessage("sendSpeedLbl",["100","Km/h"]);
	this.button110k_.innerText = chrome.i18n.getMessage("sendSpeedLbl",["110","Km/h"]);
	this.button120k_.innerText = chrome.i18n.getMessage("sendSpeedLbl",["120","Km/h"]);
	this.button130k_.innerText = chrome.i18n.getMessage("sendSpeedLbl",["130","Km/h"]);
	this.button15sz_.innerText = chrome.i18n.getMessage("sendSpeedSchoolZoneLbl",["15","MPH"]);
	this.button20sz_.innerText = chrome.i18n.getMessage("sendSpeedSchoolZoneLbl",["20","MPH"]);
	this.button25sz_.innerText = chrome.i18n.getMessage("sendSpeedSchoolZoneLbl",["25","MPH"]);
	this.button30sz_.innerText = chrome.i18n.getMessage("sendSpeedSchoolZoneLbl",["30","MPH"]);
	this.button35sz_.innerText = chrome.i18n.getMessage("sendSpeedSchoolZoneLbl",["35","MPH"]);
	this.button0_.innerText = chrome.i18n.getMessage("sendStopLbl");
	
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
    success.textContent = chrome.i18n.getMessage("sendSuccess"); //'Send to Wikispeedia Finished.'
    document.body.appendChild(success);

    setTimeout(function() { success.classList.add('visible'); }, 10);
    setTimeout(function() {
      if (close === false)
        success.classList.remove('visible');
      else
        window.close();
    }, 4000);
  },

  
  guts: function(speed_,units_) {
	   		  
	  var xhr = new XMLHttpRequest();
	  //get from html5 storage not the chrome storage which i couldn't get working...
      var tagraw= localStorage.getItem("likename");
      var emailraw= localStorage.getItem("likename2");
      var btcraw= localStorage.getItem("likename3");
	  tag_= encodeURIComponent(tagraw);	  	  	  	  
	  email_= emailraw;
	  btc_= btcraw;
	  if (units_=='M') {
		  mph_=speed_;
		  kph_=69;
	  }
	  else {
		  mph_=69;
		  kph_=speed_;
	  }
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
      this.button20_.innerText = chrome.i18n.getMessage("clearingMsg"); //'Clearing...'
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
  },
  
  handleClick25_: function () {
	  
	  var myurl= this.guts(25,'M');	 

	 
	  //from:   https://developer.chrome.com/extensions/xhr	  
      var xhr = new XMLHttpRequest();
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
           
         }	 
      }	  
      xhr.send();
      
      this.button25_.setAttribute('disabled', 'disabled');
      this.button25_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
  },
  
  handleClick30_: function () {
	  
	  var myurl= this.guts(30,'M');	 

	 
	  //from:   https://developer.chrome.com/extensions/xhr	  
      var xhr = new XMLHttpRequest();
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
           
         }	 
      }	  
      xhr.send();
      
      this.button30_.setAttribute('disabled', 'disabled');
      this.button30_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
  },
  
  handleClick35_: function () {
	  
	  var myurl= this.guts(35,'M');	 

	 
	  //from:   https://developer.chrome.com/extensions/xhr	  
      var xhr = new XMLHttpRequest();
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
           
         }	 
      }	  
      xhr.send();
      
      this.button35_.setAttribute('disabled', 'disabled');
      this.button35_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
  },
  
  handleClick40_: function () {
	  
	  var myurl= this.guts(40,'M');	 

	
	  //from:   https://developer.chrome.com/extensions/xhr	  
      var xhr = new XMLHttpRequest();
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
           
         }	 
      }	  
      xhr.send();
      
      this.button40_.setAttribute('disabled', 'disabled');
      this.button40_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
  },
  
  handleClick45_: function () {
	  
	  var myurl= this.guts(45,'M');	 

	 
	  //from:   https://developer.chrome.com/extensions/xhr	  
      var xhr = new XMLHttpRequest();
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
           
         }	 
      }	  
      xhr.send();
      
      this.button45_.setAttribute('disabled', 'disabled');
      this.button45_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
  },
  
  handleClick50_: function () {
	  
	  var myurl= this.guts(50,'M');	 

	 
	  //from:   https://developer.chrome.com/extensions/xhr	  
      var xhr = new XMLHttpRequest();
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
           
         }	 
      }	  
      xhr.send();
      
      this.button50_.setAttribute('disabled', 'disabled');
      this.button50_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
  },
  
  handleClick55_: function () {
	  
	  var myurl= this.guts(55,'M');	 

	 
	  //from:   https://developer.chrome.com/extensions/xhr	  
      var xhr = new XMLHttpRequest();
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
           
         }	 
      }	  
      xhr.send();
      
      this.button55_.setAttribute('disabled', 'disabled');
      this.button55_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
  },
  
  handleClick60_: function () {
	  
	  var myurl= this.guts(60,'M');	 

	  
	  //from:   https://developer.chrome.com/extensions/xhr	  
      var xhr = new XMLHttpRequest();
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
           
         }	 
      }	  
      xhr.send();
      
      this.button60_.setAttribute('disabled', 'disabled');
      this.button60_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
  },
  
  handleClick65_: function () {
	  
	  var myurl= this.guts(65,'M');	 

	 
	  //from:   https://developer.chrome.com/extensions/xhr	  
      var xhr = new XMLHttpRequest();
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
           
         }	 
      }	  
      xhr.send();
      
      this.button65_.setAttribute('disabled', 'disabled');
      this.button65_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
  },
  
  handleClick70_: function () {
	  
	  var myurl= this.guts(70,'M');	 

	
	  //from:   https://developer.chrome.com/extensions/xhr	  
      var xhr = new XMLHttpRequest();
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
           
         }	 
      }	  
      xhr.send();
      
      this.button70_.setAttribute('disabled', 'disabled');
      this.button70_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
  },
  
  handleClick75_: function () {	  
	  
	  var myurl= this.guts(75,'M');	 
 
	  
	  
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
      this.button75_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
	  
  },
  
  handleClick80_: function () {	  
	  
	  var myurl= this.guts(80,'M');	 
 
	  
	  
	  var xhr = new XMLHttpRequest();
	  //from:   https://developer.chrome.com/extensions/xhr	  
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
            //document.getElementById("resp").innerText = xhr.responseText;	
         }	 
      }	  
      xhr.send();
      
      this.button80_.setAttribute('disabled', 'disabled');
      this.button80_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
	  
  },

  handleClick85_: function () {	  
	  
	  var myurl= this.guts(85,'M');	 
 
	  
	  
	  var xhr = new XMLHttpRequest();
	  //from:   https://developer.chrome.com/extensions/xhr	  
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
            //document.getElementById("resp").innerText = xhr.responseText;	
         }	 
      }	  
      xhr.send();
      
      this.button85_.setAttribute('disabled', 'disabled');
      this.button85_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
	  
  },

  handleClick20k_: function () {	  
	  
	  var myurl= this.guts(20,'K');	 
 
	  
	  
	  var xhr = new XMLHttpRequest();
	  //from:   https://developer.chrome.com/extensions/xhr	  
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
            //document.getElementById("resp").innerText = xhr.responseText;	
         }	 
      }	  
      xhr.send();
      
      this.button20k_.setAttribute('disabled', 'disabled');
      this.button20k_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
	  
  },

  handleClick30k_: function () {	  
	  
	  var myurl= this.guts(30,'K');	 
 
	  
	  
	  var xhr = new XMLHttpRequest();
	  //from:   https://developer.chrome.com/extensions/xhr	  
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
            //document.getElementById("resp").innerText = xhr.responseText;	
         }	 
      }	  
      xhr.send();
      
      this.button30k_.setAttribute('disabled', 'disabled');
      this.button30k_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
	  
  },

  handleClick40k_: function () {	  
	  
	  var myurl= this.guts(40,'K');	 
 
	  
	  
	  var xhr = new XMLHttpRequest();
	  //from:   https://developer.chrome.com/extensions/xhr	  
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
            //document.getElementById("resp").innerText = xhr.responseText;	
         }	 
      }	  
      xhr.send();
      
      this.button40k_.setAttribute('disabled', 'disabled');
      this.button40k_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
	  
  },

  handleClick50k_: function () {	  
	  
	  var myurl= this.guts(50,'K');	 
 
	  
	  
	  var xhr = new XMLHttpRequest();
	  //from:   https://developer.chrome.com/extensions/xhr	  
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
            //document.getElementById("resp").innerText = xhr.responseText;	
         }	 
      }	  
      xhr.send();
      
      this.button50k_.setAttribute('disabled', 'disabled');
      this.button50k_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
	  
  },

  handleClick60k_: function () {	  
	  
	  var myurl= this.guts(60,'K');	 
 
	  
	  
	  var xhr = new XMLHttpRequest();
	  //from:   https://developer.chrome.com/extensions/xhr	  
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
            //document.getElementById("resp").innerText = xhr.responseText;	
         }	 
      }	  
      xhr.send();
      
      this.button60k_.setAttribute('disabled', 'disabled');
      this.button60k_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
	  
  },

  handleClick70k_: function () {	  
	  
	  var myurl= this.guts(70,'K');	 
 
	  
	  
	  var xhr = new XMLHttpRequest();
	  //from:   https://developer.chrome.com/extensions/xhr	  
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
            //document.getElementById("resp").innerText = xhr.responseText;	
         }	 
      }	  
      xhr.send();
      
      this.button70k_.setAttribute('disabled', 'disabled');
      this.button70k_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
	  
  },

  handleClick80k_: function () {	  
	  
	  var myurl= this.guts(80,'K');	 
 
	  
	  
	  var xhr = new XMLHttpRequest();
	  //from:   https://developer.chrome.com/extensions/xhr	  
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
            //document.getElementById("resp").innerText = xhr.responseText;	
         }	 
      }	  
      xhr.send();
      
      this.button80k_.setAttribute('disabled', 'disabled');
      this.button80k_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
	  
  },

  handleClick90k_: function () {	  
	  
	  var myurl= this.guts(90,'K');	 
 
	  
	  
	  var xhr = new XMLHttpRequest();
	  //from:   https://developer.chrome.com/extensions/xhr	  
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
            //document.getElementById("resp").innerText = xhr.responseText;	
         }	 
      }	  
      xhr.send();
      
      this.button90k_.setAttribute('disabled', 'disabled');
      this.button90k_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
	  
  },

  handleClick100k_: function () {	  
	  
	  var myurl= this.guts(100,'K');	 
 
	  
	  
	  var xhr = new XMLHttpRequest();
	  //from:   https://developer.chrome.com/extensions/xhr	  
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
            //document.getElementById("resp").innerText = xhr.responseText;	
         }	 
      }	  
      xhr.send();
      
      this.button100k_.setAttribute('disabled', 'disabled');
      this.button100k_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
	  
  },

  handleClick110k_: function () {	  
	  
	  var myurl= this.guts(110,'K');	 
 
	  
	  
	  var xhr = new XMLHttpRequest();
	  //from:   https://developer.chrome.com/extensions/xhr	  
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
            //document.getElementById("resp").innerText = xhr.responseText;	
         }	 
      }	  
      xhr.send();
      
      this.button110k_.setAttribute('disabled', 'disabled');
      this.button110k_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
	  
  },

  handleClick120k_: function () {	  
	  
	  var myurl= this.guts(120,'K');	 
 
	  
	  
	  var xhr = new XMLHttpRequest();
	  //from:   https://developer.chrome.com/extensions/xhr	  
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
            //document.getElementById("resp").innerText = xhr.responseText;	
         }	 
      }	  
      xhr.send();
      
      this.button120k_.setAttribute('disabled', 'disabled');
      this.button120k_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
	  
  },

  handleClick130k_: function () {	  
	  
	  var myurl= this.guts(130,'K');	 
 
	  
	  
	  var xhr = new XMLHttpRequest();
	  //from:   https://developer.chrome.com/extensions/xhr	  
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
            //document.getElementById("resp").innerText = xhr.responseText;	
         }	 
      }	  
      xhr.send();
      
      this.button130k_.setAttribute('disabled', 'disabled');
      this.button130k_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
	  
  },

  handleClick15sz_: function () {	  
	  
	  var myurl= this.guts(16,'M');	 
 
	  
	  
	  var xhr = new XMLHttpRequest();
	  //from:   https://developer.chrome.com/extensions/xhr	  
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
            //document.getElementById("resp").innerText = xhr.responseText;	
         }	 
      }	  
      xhr.send();
      
      this.button15sz_.setAttribute('disabled', 'disabled');
      this.button15sz_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
	  
  },

  handleClick20sz_: function () {	  
	  
	  var myurl= this.guts(21,'M');	 
 
	  
	  
	  var xhr = new XMLHttpRequest();
	  //from:   https://developer.chrome.com/extensions/xhr	  
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
            //document.getElementById("resp").innerText = xhr.responseText;	
         }	 
      }	  
      xhr.send();
      
      this.button20sz_.setAttribute('disabled', 'disabled');
      this.button20sz_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
	  
  },
  

  handleClick25sz_: function () {	  
	  
	  var myurl= this.guts(26,'M');	 
 
	  
	  
	  var xhr = new XMLHttpRequest();
	  //from:   https://developer.chrome.com/extensions/xhr	  
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
            //document.getElementById("resp").innerText = xhr.responseText;	
         }	 
      }	  
      xhr.send();
      
      this.button25sz_.setAttribute('disabled', 'disabled');
      this.button25sz_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
	  
  },

  handleClick30sz_: function () {	  
	  
	  var myurl= this.guts(31,'M');	 
 
	  
	  
	  var xhr = new XMLHttpRequest();
	  //from:   https://developer.chrome.com/extensions/xhr	  
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
            //document.getElementById("resp").innerText = xhr.responseText;	
         }	 
      }	  
      xhr.send();
      
      this.button30sz_.setAttribute('disabled', 'disabled');
      this.button30sz_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));
      
	  
  },

  handleClick35sz_: function () {	  
	  
	  var myurl= this.guts(36,'M');	 
 
	  
	  
	  var xhr = new XMLHttpRequest();
	  //from:   https://developer.chrome.com/extensions/xhr	  
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
            //document.getElementById("resp").innerText = xhr.responseText;	
         }	 
      }	  
      xhr.send();
      
      this.button35sz_.setAttribute('disabled', 'disabled');
      this.button35sz_.innerText = chrome.i18n.getMessage("clearingMsg");
      chrome.browsingData.remove({ "since" : 0 }, {        
          "webSQL": true
      }, this.handleCallback_.bind(this));   
	  
  },
	

  handleClick0_: function () {	  
	  
	  var myurl= this.guts(-127,'M');	 
 
	  
	  
	  var xhr = new XMLHttpRequest();
	  //from:   https://developer.chrome.com/extensions/xhr	  
	  xhr.open("GET", myurl, true);
	  xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {	
          
            //document.getElementById("resp").innerText = xhr.responseText;	
         }	 
      }	  
      xhr.send();
      
      this.button0_.setAttribute('disabled', 'disabled');
      this.button0_.innerText = chrome.i18n.getMessage("clearingMsg");
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
		if (!(myURL.indexOf("y,")!==-1 &&
			myURL.indexOf("h,")!==-1 &&
			myURL.indexOf("t/data")!==-1 &&
			(myURL.indexOf("maps/@")!==-1 || myURL.indexOf("maps/place")!==-1))) {
			//Hide speed input buttons for invalid URLs and displays an error message
			toggle('speed_button','none');
			var wrongURL = document.createElement('div');
			wrongURL.classList.add('overlay');
			wrongURL.setAttribute('role', 'alert');
			wrongURL.textContent = chrome.i18n.getMessage("wrongURL"); //'Current Tab is not a valid Street View web page';
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
			//i=myURL.length-1;
			li = document.createElement('li');
			p = document.createElement('p');
			em = document.createElement('em');
			//em.textContent = i + 1;		
			//code = document.createElement('code');
			//code.textContent = results[i].url + " debugging";		
			//code.textContent = myURL;
			//text1 = document.createTextNode(
			//  chrome.i18n.getMessage('navigationDescription',
			//    [results[i].numRequests,
			//    results[i].average]));
			//p.appendChild(em);
			//p.appendChild(code);
			//p.appendChild(text1);
			//li.appendChild(p);
			//ol.appendChild(li);
			//section.innerHTML = '';
			//section.appendChild(ol);
			var myguts = myURL;
			var coord_start = myguts.indexOf("/@");
			var str= myguts.substring(coord_start+2,myguts.length);
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
