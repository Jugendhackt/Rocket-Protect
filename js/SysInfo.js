$(document).ready(function(){

  yourOS();
  yourBrowser();

  $.get(

    "http://freegeoip.net/json/",
    {},
    function(data) {

      $("#IP").html(data.ip);
      $("#land").html(data.country_name)
    
    }


    )


});


function yourOS(){ 
  var OSName="Betriebssystem konte nich indeifiziert werden!"; 
  //The below few line of code will find the OS name 
  if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows "; 
  if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS X "; 
  if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX "; 
  if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux "; 

  var OSVer=""; 
   if (navigator.userAgent.indexOf("Mac OS X 10.4")!=-1) OSVer="Tiger"; 
   if (navigator.userAgent.indexOf("Mac OS X 10.5")!=-1) OSVer="Leopard"; 
   if (navigator.userAgent.indexOf("Mac OS X 10.6")!=-1) OSVer="Snow Leopard"; 
   if (navigator.userAgent.indexOf("Mac OS X 10.7")!=-1) OSVer="Lion"; 
   if (navigator.userAgent.indexOf("Mac OS X 10.8")!=-1) OSVer="Snow Lion";
   if (navigator.userAgent.indexOf("Mac OS X 10_9")!=-1) OSVer="Mavericks";
   if (navigator.appVersion.indexOf("NT 5.1")!=-1) OSVer="XP"; 
   if (navigator.appVersion.indexOf("NT 6.0")!=-1) OSVer="Vista"; 
   if (navigator.appVersion.indexOf("NT 6.1")!=-1) OSVer="7"; 
   if (navigator.appVersion.indexOf("NT 6.2")!=-1) OSVer="8"; 
   if (navigator.appVersion.indexOf("NT 6.3")!=-1) OSVer="8.1"; 




  var full_os_name=OSName+' '+OSVer; 
  document.getElementById("OS").innerHTML=full_os_name;

  //document.write(navigator.userAgent);
}


function yourBrowser(){

var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName  = navigator.appName;
var fullVersion  = ''+parseFloat(navigator.appVersion); 
var majorVersion = parseInt(navigator.appVersion,10);
var nameOffset,verOffset,ix;

// In Opera, the true version is after "Opera" or after "Version"
if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
 browserName = "Opera";
 fullVersion = nAgt.substring(verOffset+6);
 if ((verOffset=nAgt.indexOf("Version"))!=-1) 
   fullVersion = nAgt.substring(verOffset+8);
}
// In MSIE, the true version is after "MSIE" in userAgent
else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
 browserName = "Microsoft Internet Explorer";
 fullVersion = nAgt.substring(verOffset+5);
}
// In Chrome, the true version is after "Chrome" 
else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
 browserName = "Chrome";
 fullVersion = nAgt.substring(verOffset+7);
}
// In Safari, the true version is after "Safari" or after "Version" 
else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
 browserName = "Safari";
 fullVersion = nAgt.substring(verOffset+7);
 if ((verOffset=nAgt.indexOf("Version"))!=-1) 
   fullVersion = nAgt.substring(verOffset+8);
}
// In Firefox, the true version is after "Firefox" 
else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
 browserName = "Firefox";
 fullVersion = nAgt.substring(verOffset+8);
}
// In most other browsers, "name/version" is at the end of userAgent 
else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < 
          (verOffset=nAgt.lastIndexOf('/')) ) 
{
 browserName = nAgt.substring(nameOffset,verOffset);
 fullVersion = nAgt.substring(verOffset+1);
 if (browserName.toLowerCase()==browserName.toUpperCase()) {
  browserName = navigator.appName;
 }
}
// trim the fullVersion string at semicolon/space if present
if ((ix=fullVersion.indexOf(";"))!=-1)
   fullVersion=fullVersion.substring(0,ix);
if ((ix=fullVersion.indexOf(" "))!=-1)
   fullVersion=fullVersion.substring(0,ix);

majorVersion = parseInt(''+fullVersion,10);
if (isNaN(majorVersion)) {
 fullVersion  = ''+parseFloat(navigator.appVersion); 
 majorVersion = parseInt(navigator.appVersion,10);
}

document.getElementById("Browser").innerHTML=browserName+" "+majorVersion;
}