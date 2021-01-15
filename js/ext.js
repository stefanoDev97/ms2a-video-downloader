let webSite = window.location.host.split('.');
let currentSite = '';
if (webSite.length == 2) {
    currentSite = webSite[0];
} else if (webSite.length == 3) {
    currentSite = webSite[1];
} else {
    //send window.location to my database
    alert('contact me to add this site :D');
}
switch(currentSite){
    case 'facebook' : facebook();
        break;
    case 'youtube' : youtube();
}
async function facebook(){
    window.open(`http://localhost:5000?fb=${window.location.href}`);
}
function youtube(){
    window.open(`http://localhost:5000?yt=${window.location.href}`);
}

