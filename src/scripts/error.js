// if you're reading this, that link in the homepage of my website is a joke, and there's a jumpscare when the "call" reaches 7 seconds.

var elem = document.documentElement;
let clickEnabled = true; // checks if you're able to click to start the process
let click2 = true;

function getLocalStream() { //asks for vid and mic perms (does nothing)
    navigator.mediaDevices.getUserMedia({video: true, audio: true}).then((stream) => {
        window.localStream = stream; // A
        window.localAudio.srcObject = stream; // B
        window.localAudio.autoplay = true; // C
    }).catch((err) => {
        console.error(`you got an error: ${err}`)
    });
}

window.addEventListener('beforeunload', function(thing) { // asks before leaving page
    thing.preventDefault();
    thing.returnValue = '';
});

function ipLogger(){ // DON'T WORRY, THIS WON'T BE SAVED, just a funny troll
    $.getJSON('https://ipapi.co/json/', function(data) {
           alert(`Local Authorities have located you!\n\nIP: ${data.ip}\nCountry: ${data.country_name}\nState/Province: ${data.region}\nTown/City: ${data.city}\nZip/Postal: ${data.postal}\nCoordinates: ${data.latitude}, ${data.longitude}`);
    });
}

document.getElementById("clickable").addEventListener('click', function(event) {
  if(!clickEnabled) return
  clickEnabled = false;
  alert("You will now be starting the process. Note: If you leave the site right now, you will receive a Criminal Record on your name and your information tracked by GitHub & Microsoft Incorporated via Bruteforce SSH on your IP Address. This will allow local authorities to collect your information. In order to defend yourself, please have a lawyer ready before you start the connection. DO NOT LEAVE THIS SITE.");
  let countdown = 25;
  let ongoing = 0;
  let ongoingm = 0;

  function startCountdown() { //the call countdown (7 sec: jumpscare)
    if(ongoing === 60){
      ongoing = 0;
      ongoingm++;
    } else if(ongoing === 7){
      if(!click2) return;
      document.getElementById('JUMPSCARE').innerHTML = `<img src="https://img.wattpad.com/4009de212dd674200c2f899cfcf4ccf2969b60e3/687474703a2f2f342e62702e626c6f6773706f742e636f6d2f2d7061747570314a6d6973302f557734483534476a5465492f41414141414141414259552f7832595a745752664655772f73313630302f6d617872657364656661756c742e6a7067?s=fit&h=360&w=360&q=80" width="500px" id="JUMPIMAGE"/>`;
      var audio = new Audio('../../assets/jump.mp3');
      audio.play();
      click2 = false;
    }
    switch(ongoing){
      case 0:
        ongoing = "00"
        break;
      case 1:
        ongoing = "01"
        break;
      case 2:
        ongoing = "02"
        break;
      case 3:
        ongoing = "03"
        break;
      case 4:
        ongoing = "04"
        break;
      case 5:
        ongoing = "05"
        break;
      case 6:
        ongoing = "06"
        break;
      case 7:
        ongoing = "07"
        break;
      case 8:
        ongoing = "08"
        break;
      case 9:
        ongoing = "09"
        break;
    }

    document.getElementById('yourmom').innerHTML = `Connected. Please follow the instructions below.<br>Ongoing Call: ${ongoingm}:${ongoing}`;
    ongoing++         
    setTimeout(startCountdown, 1000)
  }

  function reduceCountdown3() { //countdown no3
    if (countdown == 0) {
      startCountdown();
      return
    }
    countdown--;                
    setTimeout(reduceCountdown3, 1000)
  }

  function reduceCountdown2() { //countdown no2
    if (countdown == 0) {
      document.getElementById('yourmom').innerHTML = `Access Point Found. Connecting... Please wait for local authorities to pick up the line and follow the instructions below.`;
      countdown = 14;
      reduceCountdown3();
      return
    } else if (countdown == 12){
      document.getElementById('blood').style.visibility = 'visible';
    }
    countdown--;                
    setTimeout(reduceCountdown2, 1000)
  }

  function reduceCountdown() { //countdown no1
      if (countdown == 0) {
        document.getElementById('yourmom').innerHTML = `The connection tone has started. Initializing bruteforce...`;
        countdown = 20;
        reduceCountdown2();
        return
      } else if (countdown == 20){
        getLocalStream();
      } else if (countdown == 15){
        ipLogger();
      }
      countdown--;
      document.getElementById('yourmom').innerHTML = `The process has started. You have ${countdown} seconds until the connection tone starts.`;
      setTimeout(reduceCountdown, 1000)
    }

  reduceCountdown();
  var audio = new Audio('../../assets/piracy2.mp3');
  audio.play();
  elem.requestFullscreen();
  elem.webkitRequestFullscreen();
  elem.msRequestFullscreen();
});



