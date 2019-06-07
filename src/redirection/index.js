
//Redirection to tavernofcho for every subdomain of firebase
var domain = "tavernofcho.com";

if(document.domain !== "https://127.0.0.1:8054/"){
  console.log('Salut les devs');
}else if(document.domain !== domain){
  document.location.href="https://tavernofcho.com/";
}