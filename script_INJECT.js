 if (confirm("Press OK to change the url. Press Cancel to apply the current url.")) {
    
  var Ask_url = prompt("Please enter the link to the image (.gif accepted)", "https://www.testsite.com/tree.jpeg");
  sessionStorage.setItem("Url", Ask_url);
  var url = sessionStorage.getItem("Url");
  document.getElementById("change_background").style.backgroundImage = "url(url)";
  document.getElementById("main-content").style.backgroundImage = "url(url)";
   
  } else {
   document.getElementById("change_background").style.backgroundImage = "url(url)";
   document.getElementById("main-content").style.backgroundImage = "url(url)";
  }
