function coinFlip() {
  return Math.random() >= 0.5 ? 'heads' : 'tails';
}
var appDOM = document.getElementById('app');
var coinImg = document.getElementById('coinImg');
var scoresDOM = document.getElementById('scores');
var headsDOM = document.getElementById('heads');
var tailsDOM = document.getElementById('tails');
var heads = 0;
var tails = 0;

coinImg.addEventListener('click', function(e) {
  e.target.className === 'trigger' ? e.target.className = 'none': e.target.className = 'trigger';
  heads = 0;
  tails = 0;
  while (heads < 5 && tails < 5) {
    var flip = coinFlip();
    flip === 'heads' ? heads ++ : tails ++;
    console.log(flip);
  }
  scoresDOM.style.display = 'block';
  headsDOM.innerHTML = heads;
  tailsDOM.innerHTML = tails;

  tailsDOM.style.color = 'rgb(233, 214, 37)';
  headsDOM.style.color = 'rgb(233, 214, 37)';

  if (tails > heads) {
    tailsDOM.style.color = 'red';
  } else {
    headsDOM.style.color = 'red';
  }


});
