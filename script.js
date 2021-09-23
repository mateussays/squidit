const gallery = document.querySelector('.row');

async function getImages () {
  const fetchImages = await fetch('https://us-central1-squid-apis.cloudfunctions.net/test-front-basic');
  const result =  await fetchImages.json();
  console.log(result)
  result.forEach((item) =>{
    const { comentarios, link, metadados: { engagement }, imagens: { thumbnail: { url } }, usuario: { username } } = item;
    const createDiv = document.createElement('div');
    createDiv.className = "box";
    createDiv.innerHTML = `<a href=${link} target="_blank">
    <img src=${url} class="img-fluid image" />
    <div class="middle">
    <p>@${username}<p/>
    <p>${comentarios}<p/>
    <p>${engagement}</p>
    </div></a>`;
    gallery.appendChild(createDiv);
  })
}

getImages();