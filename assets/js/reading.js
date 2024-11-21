document.getElementById('pdfInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
        const fileURL = URL.createObjectURL(file);
        document.getElementById('pdfViewer').src = fileURL;
    } else {
        alert('Please select a valid PDF file.');
    }
});


const display1=document.getElementById('time');
let time= null;
let starttime=0;
let elapsedtime=0;
let isr=false;

function start(){
    if (!isr) {
        starttime=Date.now()-elapsedtime;
        time=setInterval(update,10);
        isr=true;

}


}
function stop(){
   if(isr) {
    clearInterval(time);
    isr=false;
    elapsedtime=Date.now()-starttime;
   }
}

function reset(){
    clearInterval(time);
    isr=false;
    elapsedtime=0;
    starttime=0;
    display1.textContent="00:00:00";
    

}
function update(){
    const currenttime=Date.now();
    elapsedtime=currenttime-starttime;
    const hours=Math.floor((elapsedtime/1000)/3600);
    const minutes=Math.floor((elapsedtime/1000)/60);
    const seconds=Math.floor((elapsedtime/1000)%60);
    const milliseconds=Math.floor((elapsedtime%1000));
    let hours1=String(hours).padStart(2,"0");
    let minutes1=String(minutes).padStart(2,"0");
    let seconds1=String(seconds).padStart(2,"0");

    display1.textContent=`${hours1}:${minutes1}:${seconds1}`;


}