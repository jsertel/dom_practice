

function upDate(previewPic){
  var galleryImage = document.getElementById('image');
  galleryImage.style.backgroundImage = 'url(' + previewPic.src + ')';
  galleryImage.innerHTML = previewPic.alt;
  }

  function unDo(){
    var galleryImage = document.getElementById('image');
    galleryImage.style.backgroundImage = "url(' ')";
    galleryImage.innerHTML = 'Hover over an image below to display here.';
  }
