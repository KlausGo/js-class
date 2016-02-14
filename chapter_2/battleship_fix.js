var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;
var hitTarget = 0;

var isSunk = false;



while (isSunk === false) {
  guess = prompt("준비, 조준, 발사! (0에서 6까지 중 추측한 숫자를 입력하세요):");


  if(guess === null){
    break;
  }

  if (guess < 0 || guess > 6) {
    alert ("올바른 방 번호를 입력하세요");
  } else {
    guesses = guesses + 1;

    if (guess == location1 || guess == location2 || guess == location3) {
      if(guess != hitTarget) {
        alert("명중!");
        hits = hits + 1 ;
        hitTarget = guess;
        console.log(hitTarget);
          if (hits == 3) {
            isSunk = true;
            alert("전함 침몰!");
          }
        } else {
          alert("이미 명중시킨 위치입니다! 다른 위치를 조준하세요.");
        }
      } else {
      alert("실패");
      }
    }

}

if (isSunk === true){
  var stats = "여러분은 전함을 격침시키기 위해" + guesses + "번 발사했습니다." + "따라서 명중률은" + (3/guesses) + "입니다.";
  alert(stats);
}
