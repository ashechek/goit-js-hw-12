import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export default function addImagesToHtml(images) {
  const gallery = document.querySelector('.gallery');

  const imagesHtml = images
    .map(image => {
      return `<li class="item-ul">
  <a href="${image.largeImageURL}"><img src="${image.webformatURL}" alt="${image.tags}" /></a>
  <div class="about-img-div">
    <p class="description-img">Likes</p>
    <p class="description-img">Views</p>
    <p class="description-img">Comments</p>
    <p class="description-img">Downloads</p>
    <span class="description-value">${image.likes}</span>
    <span class="description-value">${image.views}</span>
    <span class="description-value">${image.comments}</span>
    <span class="description-value">${image.downloads}</span>
  </div>
</li>`;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', imagesHtml);

  const lightBox = new SimpleLightbox('.gallery li a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });

  lightBox.refresh();
}
