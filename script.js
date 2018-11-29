const PICTURES = [];
let countImg = 1;
let id = 0;

let modal = document.getElementById("myModal");
let btn = document.getElementById("btn-modal");
let span = document.getElementsByClassName("close")[0];
let btnSave = document.getElementById("btn-save");//
let container = document.getElementById("modal");
let imgName = document.getElementById("img-src");
let gallery = document.getElementById("gallery");
let galleryFilter = document.getElementById("filter");

displayModal = () => {
  modal.style.display = "block";
}
closeModal = () => {
  modal.style.display = "none";
}
modalOverlay = event => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
filterItem = () => {
   let itemsFilter = [];
   let filterValue = document.getElementById("filter").value;

   for (let i = 0; i < PICTURES.length; i++) {
     let titleItems = PICTURES[i].title;
     if (~titleItems.indexOf(filterValue) != 0) {
      itemsFilter[i] = PICTURES[i];
   }
}
renderPicture(itemsFilter);
}

removeItems = () => {
  let id = event.target.parentNode.dataset.i;
PICTURES.splice(0, 1);
renderPicture(PICTURES);
}

imgName.addEventListener("keyup", event => {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("btn-save").click();
  }
});

btn.addEventListener("click", displayModal);
span.addEventListener("click", closeModal);
container.addEventListener("click", modalOverlay);
galleryFilter.addEventListener("input", filterItem);


addPicture = (fullPath, imgName) => {
  let pictObj = {};
  pictObj.img = fullPath;
  pictObj.title = imgName;
  PICTURES.push(pictObj);
};

handlEnter = event => {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("btn-modal").click();
  }
};

createItem = () => {
  let imgName = document.getElementById("img-src").value;
  document.getElementById("img-src").value = "";
  let fullPath = "https://loremflickr.com/320/240?random=" + id++;
  addPicture(fullPath, imgName);
  renderPicture(PICTURES);


};
btnSave.addEventListener("click", createItem);

renderPicture = arr => {
  let galleryItem = document.createElement("li");
  galleryItem.setAttribute("class", "gallery-item");
  for (let i = 0; i < arr.length; i++) {
    galleryItem.dataset.idItem = i;
    galleryItem.innerHTML = `
    <img class="image" src=${arr[i].img}/>
    <span id="remove" class="remove">&times;</span>
    <p class="title">${arr[i].title}</p>
    </div>`;
    gallery.appendChild(galleryItem);
   
  }
  // let removeBtn = document.getElementById("remove");
  // removeBtn.addEventListener("click", removeItems);
}


console.log(PICTURES);
