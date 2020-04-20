var Ask_url = prompt("Please enter the link to the image (.gif accepted)", "https://www.testsite.com/tree.jpeg");
sessionStorage.setItem("Url", Ask_url);
var url = sessionStorage.getItem("Url");


document.getElementById("main-content").style.backgroundImage = "url(url)";
