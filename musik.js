function iOS_audio_start()
{
   // Safari on iOS only plays webaudio after it has been started by clicking a button, so this function must be called from a button's onclick handler
   if (!document.ct) document.ct= new webkitAudioContext();
   var s = document.ct.createBufferSource();
//   var s=document.ct.createOscillator(); s.frequency.setValueAtTime(400,0);
   s.connect(document.ct.destination);
   try { s.start(0); } catch(e) { s.noteOn(0); }
}
ios_audio_start();

   var audio = new Audio('xmas.mp3');
   audio.play();
