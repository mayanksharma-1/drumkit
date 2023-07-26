window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key=${e.code}]`);
    if (audio){ audio.play();}
});