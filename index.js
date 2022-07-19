console.log("connected");
let wakeup =
  "<option>10AM-11AM</option><option>12AM-1PM</option><option>4PM-5PM</option><option>9PM-10PM</option>";
document.querySelector("#wakeup").innerHTML = wakeup;
document.querySelector("#lunch_time").innerHTML = wakeup;
document.querySelector("#nap_time").innerHTML = wakeup;
document.querySelector("#night").innerHTML = wakeup;

let now = new Date();

setInterval(updateTime,1000);

function updateTime() {
  let now = new Date();
  let seconds = now.getSeconds();
  let minute = now.getMinutes();
  let hours = now.getHours();
  let am_pm = now.getHours() >= 12 ? "PM" : "AM";


  
console.log(hours)
 
  //------------------- content after 10AM---------------------------------
  
  if (hours >=10 && hours<12) {
    document
    .getElementById("image")
    .setAttribute("src", "gm_image.svg");
  
    document.getElementById("message").innerHTML =
      " Grab Sime Healthy Breakfast!!!";
    document.querySelector("h1").innerText = "GOOD MORNING!! WAKE UP !!";
  }
  // ----------------------content after 12PM------------------------------
  else if (hours>=12 && hours<16) {
    document.getElementById("image").setAttribute("src", "gdafternoon_image.svg");
    document.getElementById("message").innerHTML = " LET'S HAVE SOME LUNCH!!!";
    document.querySelector("h1").innerText =
      "GOOD AFTERNOON !! TAKE SOME SLEEP";
  }
  //-----------------------content after 4PM-------------------------
  else if (hours >= 16 && hours < 22){
    document.getElementById("image").setAttribute("src", "lunch_image.png");
    document.getElementById("message").innerHTML =
      "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    document.querySelector("h1").innerText = "GOOD EVENING !!";
  }
  //-------------------------content after 9 PM---------------------------------
  else if (hours >= 22){
    document.getElementById("image").setAttribute("src", "goodnight_image.svg");
    document.getElementById("message").innerHTML =
      " CLOSE YOUR EYES AND GO TO SLEEP";
    document.querySelector("h1").innerText = "GOOD NIGHT !!";
  }else{
     document.getElementById("image").setAttribute("src", "goodnight_image.svg");
    document.getElementById("message").innerHTML =
      " CLOSE YOUR EYES AND GO TO SLEEP";
    document.querySelector("h1").innerText = "GOOD NIGHT !!";
  }

   hours = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();

  document.getElementById("seconds").innerText =`${seconds} \n sec`;
  document.getElementById("minute").innerText = `${minute} \n min`;
  document.getElementById("hours").innerText = `${hours} \n hour`;
  document.getElementById("am_pm").innerText = am_pm;
}


function setAlarm() {
  document.querySelector("button").innerText = "Set Alarm";
  
}
function partyTime() {
  document.querySelector("button").innerText = "Party Time!!"
}
document.querySelector("button").addEventListener("click", alarmTimings);

function alarmTimings() {
  let morning = document.querySelector("#wakeup").value;
  let afternoon = document.querySelector("#lunch_time").value;
  let evening = document.querySelector("#nap_time").value;
  let night = document.querySelector("#night").value;
  document.getElementById(
    "showtime"
  ).innerText = `Wake Up Time ${morning} \n Lunch Time ${afternoon} \n Nap Time ${evening} \n Night Time ${night}`;
}
