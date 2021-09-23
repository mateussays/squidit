const gallery = document.querySelector('.row');


function transformDate (date) {
  const arr = [...date];
  const transformDate = `${[arr[8]]}${[arr[9]]}/${[arr[5]]}${[arr[6]]}/${[arr[0]]}${[arr[1]]}${[arr[2]]}${[arr[3]]}`;
  const transformHour = `${[arr[11]]}${[arr[12]]}:${[arr[14]]}${[arr[15]]}`;
  return `${transformDate} ${transformHour}`;
}

function loading() {
  const load = document.createElement('div');
  load.innerHTML = `<div class="loader bigger border-lilac" role="status">
  <span class="visually-hidden">Loading...</span>
  </div>`;
  load.className = 'loading';
  gallery.appendChild(load);
}

function removeLoading() {
  const selectLoading = document.querySelector('.loading');
  selectLoading.remove();
}


async function getImages () {
  loading()
  const fetchImages = await fetch('https://us-central1-squid-apis.cloudfunctions.net/test-front-basic');
  const result =  await fetchImages.json();
  console.log(result)
  result.forEach((item) =>{
    const { comentarios, criadoEm, link, metadados: { engagement }, imagens: { thumbnail: { url } }, usuario: { username } } = item;
    const createDiv = document.createElement('div');
    createDiv.className = "box";
    createDiv.innerHTML = `<a href=${link} target="_blank">
    <img src=${url} class="img-fluid image" />
    <div class="middle">
    <p>@${username}<p/>
    <p><i class="fas fa-comment">  ${comentarios}</i><p/>
    <p><i class="fas fa-heart">  ${engagement}</i></p>
    <p><i class="fas fa-calendar-alt">  ${transformDate(criadoEm)}</i></p>
    </div></a>`;
    gallery.appendChild(createDiv);
  })
  removeLoading();
}

document.addEventListener("DOMContentLoaded", function() {
  getImages();
});
