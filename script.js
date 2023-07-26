window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key=${e.code}]`);
    if (!audio){ return;} // to prevent error if a key that doesn't have a data-key assigned to it is pressed 
    else{
        audio.currentTime = 0; // reset the sound currently playing when another is clicked
        audio.play();
        }
    const drum = document.querySelector(`.drum[data-key=${e.code}]`);
    drum.classList.add('playing');
    const drums = document.querySelectorAll('.drum');

    function removeGlow(e){
        if (e.propertyName !== 'transform') return;
        this.classList.remove('playing');
    }

    drums.forEach(drum => drum.addEventListener('transitionend',removeGlow));
});