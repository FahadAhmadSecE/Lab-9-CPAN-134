const filterDrop = document.getElementById("drop");
let filterValue;

$("#apply").on("click", () => {
  const filterValue = $("#drop").val();

  if (filterValue === "none") {
    $("img").show();
  } else {
    $("img").hide();
    $(`img[data-filter="${filterValue}"]`).show();
  }
});

//lightbox
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const images = document.querySelectorAll("img");
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    const img = document.createElement("img");
    img.id = "showing";
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
    $(lightbox).fadeIn(400, "swing");
  });
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) {
    return;
  }
  $(lightbox).fadeOut(400, "swing");
});
