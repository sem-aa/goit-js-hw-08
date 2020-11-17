import images from './gallery-items.js';

const jsGalleryContainer = document.querySelector('.js-gallery');
const modalWindow = document.querySelector('.js-lightbox');
const closeButtonModal = document.querySelector('[data-action="close-lightbox"]');
const imageInModal = document.querySelector('.lightbox__image');

const imagesGallery = creatJsGallery(images);

jsGalleryContainer.insertAdjacentHTML('beforeend', imagesGallery);

jsGalleryContainer.addEventListener('click', onImageActive);
closeButtonModal.addEventListener('click', offModalWindow);

function creatJsGallery(images) {
	return images
		.map(({ preview, original, description }) => {
			return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`;
		})
		.join('');
}

function onImageActive(event) {
	event.preventDefault();
	if (!event.target.classList.contains('gallery__image')) {
		return;
	}
	modalWindow.classList.add('is-open');
	imageInModal.src = event.target.dataset.source;
}

function offModalWindow(event) {
	modalWindow.classList.remove('is-open');
	imageInModal.src = '';
}
