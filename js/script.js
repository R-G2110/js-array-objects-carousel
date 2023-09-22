const images = [
	'img/01.webp',
	'img/02.webp',
	'img/03.webp',
	'img/04.webp',
	'img/05.webp'
];

let counterImg = 0;

// elements
const itemsWrapper = document.querySelector('.items-wrapper');
const thumbsWrapper = document.querySelector('.thumbs-wrapper');

// buttons
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

// reset
itemsWrapper.innerHTML = '';
thumbsWrapper.innerHTML = '';

// stampo tutte le immagini e le thumbs
for(let i = 0; i < images.length; i++){
  const image = images[i];
  itemsWrapper.innerHTML += `<img class="item hide" src="${image}" alt="">`;

  // non uso questo metodo perché usiamo new image() ma è voalido comunque 
  //thumbsWrapper.innerHTML += `<img class="thumb" src="${image}" alt="">`;

  // creo un nuovo elemento img
  const thumb = new Image();
  thumb.src = image;
  thumb.classList.add('thumb');
  thumbsWrapper.append(thumb);
}

// prendo tutte le immagini
const itemsCollection = document.getElementsByClassName('item');

// mostro la prima immagine
itemsCollection[counterImg].classList.remove('hide');

// prendo tutte le thumb
const thumbsCollection = document.getElementsByClassName('thumb');

// mostro la prima thumb
thumbsCollection[counterImg].classList.add('active');



// click next
nextBtn.addEventListener('click', cliclNextPrev)

// click prev
prevBtn.addEventListener('click', cliclNextPrev)

function cliclNextPrev(event){
  // la funzione richiamata da un listener di eventi riceve l'evento stesso
  // il target dell'evento è l'elemento html che lo genera
  // quindi posso prenderne il suo id e usarlo
  if(event.target.id === 'next') doNextPrev(true);
  else doNextPrev(false);
}


/**
 * 
 * @param {boolean} isNext 
 */
function doNextPrev(isNext){
  itemsCollection[counterImg].classList.add('hide');
  thumbsCollection[counterImg].classList.remove('active');
  if(isNext){
    counterImg++;
    if(counterImg === images.length) counterImg = 0;
  }else{
    counterImg--;
    if(counterImg < 0) counterImg = images.length - 1;
  }
  itemsCollection[counterImg].classList.remove('hide');
  thumbsCollection[counterImg].classList.add('active');
}