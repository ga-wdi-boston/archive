x = 0;
function animateMegaman() {
  var megaman = document.getElementById("megaman");
  x = x+1;
  if (x==1) {
    megaman.style.backgroundPositionX = "-162px";
    megaman.style.width = "190px";
    megaman.style.marginLeft = "-15px";
  } else if (x==2) {
    megaman.style.backgroundPositionX = "-352px";
    megaman.style.width = "116px";
    megaman.style.marginLeft = "22px";
  } else if (x==3) {
    megaman.style.backgroundPositionX = "-468px";
    megaman.style.width = "170px";
    megaman.style.marginLeft = "-6px";
  } else if (x==4) {
    megaman.style.backgroundPositionX = "-1px";
    megaman.style.width = "160px";
    megaman.style.marginLeft = "0px";
    x = 0;
  }
  window.setTimeout(animateMegaman, 100);
}

left = 0;
function moveMegaman() {
  var megaman = document.getElementById("megaman")
  left += 50;
  megaman.style.left = left + "px";
}

function startup() {
  animateMegaman();
}

