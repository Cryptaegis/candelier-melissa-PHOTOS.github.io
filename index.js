let btnReception = document.getElementById('reception'),
    btnGalerie = document.getElementById('galerie'),
    boxPicture= document.getElementById('picture-box');    

/**btnReception.addEventListener('click', function(){
                
      // Get all the images on the page

      let img = document.createElement("img");
           for (var i = 0; i < images.length; i++) {
            img.src = images[i].src;

            };
            images.style.visibility = 'visible';


      // Create a new element to hold all the images
     let  boxPicture= document.getElementById('picture-box');
     // Add an image inside that div

      // Add the images to the container
        boxPicture.appendChild(img);
      // Add the container to the document
      document.body.appendChild(boxPicture);
      console.log(boxPicture);
});
*/


  /*btnReception.addEventListener('click', function( images){
    // Create a new image element
    let img = document.createElement('img');
    images = 'images/pregnant-6.jpg';
    // Set the image source
    img.src = images ;
    // Add the image to the container
    boxPicture.appendChild(img);
  });
  */
  let images = ['images/pregnant-1.jpg', 'images/pregnant-2.jpg', 'images/pregnant-4.jpg','images/pregnant-5.jpg', 'images/pregnant-6.jpg'];

  btnReception.addEventListener('click', function() {
    // Loop through the images and create a new image element for each one

    for (let  i = 0; i < images.length; i++) {
      let img = document.createElement('img');
      // Set the image source
      img.src = images[i];
     // Add the image to the container
      boxPicture.appendChild(img);
        btnReception.preventDefault();
        break;
  }}); 

