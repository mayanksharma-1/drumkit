window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key=${e.code}]`);
    if (!audio){ return;} // to prevent error if a key that doesn't have a data-key assigned to it is pressed 
    else{
        audio.currentTime = 0; // reset the sound currently playing when another is clicked
        audio.play();
        }
});