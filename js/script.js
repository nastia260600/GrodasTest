async function getResponse() {
   let response = await fetch('js/data.json')
   let content = await response.json()
   let featuredContent = content.slice(0)
   let lastContent = content.slice(0)

   let maxRating = featuredContent.sort((a, b) => b.rating - a.rating)
   let featured = maxRating.splice(0, 5)
   let featuredImages = document.querySelector('.featured__images')

   let newImages = lastContent.sort((a, b) => a.age - b.age)
   let lastImage = newImages.splice(0, 2)
   let lastImages = document.querySelector('.last__images')

   let key;
   for (key in featured) {
      featuredImages.innerHTML += `
         <div class="featured__images-img">
            <svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
               </path>
            </svg>
            <img src="${featured[key].image}" alt="${featured[key].title}" class="featured__image">
            <div class="featured__img-info img-info">
               <h3 class="featured__img-title img-title">${featured[key].title}</h3>
               <div class="featured__img-tags img-tags">
                  ${featured[key].tags.map((a) => `#${a}`)}
               </div>
            </div>
         </div>
      `
   }

   for (key in lastImage) {
      lastImages.innerHTML += `
         <div class="last__img">
            <svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z">
               </path>
            </svg>
            <img src="${lastImage[key].image}" alt="${lastImage[key].title}">
            <h3 class="last__img-title">${lastImage[key].title}</h3>
            <div class="last__tags">
               ${lastImage[key].tags.map((a) => `#${a}`)}
            </div>
         </div>
      `
   }
}
getResponse()



