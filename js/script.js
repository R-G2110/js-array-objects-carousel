const images = [
	{
			image: 'img/01.webp',
			title: 'Marvel\'s Spiderman Miles Morales',
			text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	}, {
			image: 'img/02.webp',
			title: 'Ratchet & Clank: Rift Apart',
			text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	}, {
			image: 'img/03.webp',
			title: 'Fortnite',
			text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
	}, {
			image: 'img/04.webp',
			title: 'Stray',
			text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	}, {
			image: 'img/05.webp',
			title: "Marvel's Avengers",
			text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
	}
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

// stampo tutte le immagini, le info e le thumbs
images.forEach((game) =>{
	itemsWrapper.innerHTML += `
	<img class="item hide" src="${game.image}" alt="">
	<div class="image-info hide">
		<h4>Title:</h4>
		<h2>${game.title}</h2>
		<h4>Trama:</h4>
		<h3>${game.text}</h3>
	</div>`

	thumbsWrapper.innerHTML += `<img class="thumb" src="${game.image}" alt="">`;
})


// prendo tutte le immagini
const itemsCollection = document.getElementsByClassName('item');

// mostro la prima immagine
itemsCollection[counterImg].classList.remove('hide');

// prendo tutte le thumb
const thumbsCollection = document.getElementsByClassName('thumb');

// mostro la prima thumb
thumbsCollection[counterImg].classList.add('active');

// prendo tutte le image-info
const imageInfoCollection = document.getElementsByClassName('image-info');

// mostroo la prima image-info
imageInfoCollection[counterImg].classList.remove('hide');




// click next
nextBtn.addEventListener('click', clickNextPrev)

// click prev
prevBtn.addEventListener('click', clickNextPrev)

function clickNextPrev(event){
  if(event.target.id === 'next') doNextPrev(true);
  else doNextPrev(false);
}


/**
 * 
 * @param {boolean} isNext 
 */
function doNextPrev(isNext){
  itemsCollection[counterImg].classList.add('hide');
	imageInfoCollection[counterImg].classList.add('hide');
  thumbsCollection[counterImg].classList.remove('active');
  if(isNext){
    counterImg++;
    if(counterImg === images.length) counterImg = 0;
  }else{
    counterImg--;
    if(counterImg < 0) counterImg = images.length - 1;
  }
  itemsCollection[counterImg].classList.remove('hide');
	imageInfoCollection[counterImg].classList.remove('hide');
  thumbsCollection[counterImg].classList.add('active');
}