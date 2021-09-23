const gallery = document.querySelector('.row');

async function getImages () {
  const fetchImages = await fetch('https://us-central1-squid-apis.cloudfunctions.net/test-front-basic');
  const result =  await fetchImages.json();
  console.log(result)
  result.forEach((item) =>{
    const { imagens: { thumbnail: { url } } } = item;
    let image = document.createElement('img');
    let createDiv = document.createElement('div');
    createDiv.className = "col";
    createDiv.className = "box";
    image.className = "img-fluid";
    image.src = url;
    createDiv.appendChild(image);
    gallery.appendChild(createDiv);
  })
}

getImages();