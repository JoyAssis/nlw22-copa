function creteGame(player1,hour,player2 ){
  return `
   <li>
      <img src="./assets/flags/icon=${player1}.svg" alt="">
      <strong>${hour}</strong>
      <img src="./assets/flags/icon=${player2}.svg" alt="">
    </li>
  
  `
}
let  delay = -0.4;
function createCard(date,day,games){
  delay = delay + 0.4;
  return `
     <div class="card" style="animation-delay:${delay}s" >
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  
  `
}

document.querySelector("#cards").innerHTML =  
  createCard("20/11", "quinta", creteGame("qatar", "13:00", "ecuador"))+ createCard( "21/11","segunda", creteGame("england", "10:00", "iran") + creteGame("senegal", "13:00", "Netherlands") + creteGame("united states", "13:00", "wales"))