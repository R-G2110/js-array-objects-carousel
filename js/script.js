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
		<h2>${game.title}</h2>
		<h3>${game.text}</h3>
	</div>`
})

	for (let i=0;i<images.length;i++){
		const thumb = thumbsCreation(i);

		//bonus 3
  	thumb.addEventListener('click', function(){
			for (let i=0; i<thumbsCollection.length; i++){
				itemsCollection[i].classList.add('hide');
				imageInfoCollection[i].classList.add('hide');
				thumbsCollection[i].classList.remove('active');
				console.log('giri: '+i);
			}
			itemsCollection[i].classList.remove('hide');
			imageInfoCollection[i].classList.remove('hide');
			this.classList.add('active');
 	 })
 	 thumbsWrapper.append(thumb);
	}
	
	function thumbsCreation (index){
		const newThumbs = document.createElement('img');
		newThumbs.className = 'thumb';
		newThumbs._squareID = index;
		newThumbs.src = images[index].image;
		return newThumbs;
	}

// prendo tutte le immagini, le thumb e le image-info
const itemsCollection = document.getElementsByClassName('item');
const thumbsCollection = document.getElementsByClassName('thumb');
const imageInfoCollection = document.getElementsByClassName('image-info');

// mostro la prima immagine, la prima thumb e la prima image-info
itemsCollection[counterImg].classList.remove('hide');
thumbsCollection[counterImg].classList.add('active');
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