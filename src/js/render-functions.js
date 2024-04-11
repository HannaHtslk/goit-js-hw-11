   export  const renderPhotos = pictures => {
      return pictures.map(picture =>
          `
 <li class="gallery-item">
  <a class="gallery-link" href="${picture.largeImageURL}">
    <img
      class="gallery-image"
      src="${picture.webformatURL}"
      alt="${picture.tags}"
    />
    </a>
    <div class="content">
       <h3 class="title">Likes</h3>
       <p class="quantity">${picture.likes}</p>
       <h3 class="title">Views</h3>
       <p class="quantity">${picture.views}</p>
       <h3 class="title">Comments</h3>
       <p class="quantity">${picture.comments}</p>
       <h3 class="title">Downloads</h3>
       <p class="quantity">${picture.downloads}</p>
    </div>
</li> 
        `).join('');
          
   }

   

    


