const hourClock = document.querySelector( ".hour" );
const minutClock = document.querySelector( ".minute" );
const secundClock = document.querySelector( ".secund" );
const mSecundClock = document.querySelector( ".mSecundClock" );
const dateClock = document.querySelector( ".data" );


let date, hour, minut, secund, mSecund, year, month, day, week, res;
function getDate() {
  date = new Date();
  hour = +date.getHours();
  minut = +date.getMinutes();
  secund = +date.getSeconds();
  year = +date.getFullYear();
  month = +date.getMonth();
  day = +date.getDate();
  week = +date.getDay();
}
function getInfo() {
  getDate();
  hourClock.textContent = `${hour < 10 ? "0" + hour : hour}:`;
  minutClock.textContent = `${minut < 10 ? "0" + minut : minut}`;
  secundClock.textContent = `${secund < 10 ? "0" + secund : secund}`;
  res = `${year}/${month < 10 ? "0" + month : month}/${day < 10 ? "0" + day : day
    }`;
  dateClock.textContent = res;
}
getInfo();
setInterval( () => {
  getInfo();
}, )


const mode = document.querySelector( "button.mode" );

mode.addEventListener( "click", () => {
  document.body.classList.toggle( "dark" )
} )

const clock = document.querySelector( ".menu .clock" );
const alarmOpen = document.querySelector( ".alarm" );
const closeBtn = document.querySelector( ".alarm button.close" );
clock.addEventListener( "click", () => {
  alarmOpen.classList.toggle( "open" )
} )

closeBtn.addEventListener( "click", () => {
  alarmOpen.classList.toggle( "open" )
} )

const transOpen = document.querySelector( ".kril-content" );
const trasnlate = document.querySelector( ".translate" );
const closeTranslate = document.querySelector( ".close-btn2" )
trasnlate.addEventListener( "click", () => {
  transOpen.classList.toggle( "translate-open" );
} )

closeTranslate.addEventListener( "click", () => {
  transOpen.classList.toggle( "translate-open" );
} )
