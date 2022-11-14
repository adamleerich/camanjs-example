var dropArea = document.getElementById("drop-area")

// Prevent default drag behaviors
;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false);
  document.body.addEventListener(eventName, preventDefaults, false);
})

// Highlight drop area when item is dragged over it
;['dragenter', 'dragover'].forEach(eventName => {
  dropArea.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, unhighlight, false);
});

// Handle dropped files
dropArea.addEventListener('drop', handleDrop, false);

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

function highlight(e) {
  dropArea.classList.add('highlight');
}

function unhighlight(e) {
  dropArea.classList.remove('active');
}

function handleDrop(e) {
  var dt = e.dataTransfer;
  var f = dt.files;
  handleFiles(f);
}


// $(document).ready(function() {
//     var tmpImg = new Image() ;
//     tmpImg.src = $('#img').attr('src') ;
//     tmpImg.onload = function() {
//         // Run onload code.
//     } ;
// }) ;


function handleFiles(f) {
  let reader = new FileReader();
  // Only uses the first file
  reader.readAsDataURL(f[0]);

  reader.onloadend = function () {
    let img = document.getElementById("drop-data");
    img.src = reader.result;
    var tmpImg = new Image();
    tmpImg.src = img.src;
    tmpImg.onload = function(e) {
      setOriginal();
    };
  };
  
}

