let btnReception = document.getElementById('reception'),
    btnMariage = document.getElementById('mariage'),
    btnPregnant = document.getElementById('pregnacy'),
    btnBaby = document.getElementById('baby'),
    btnFamily = document.getElementById('family'),
    btnDew = document.getElementById('dew'),
    btnCouple = document.getElementById('couple'),
    btnFace = document.getElementById('face'),
    boxPicture= document.getElementById('picture-box'),
    ul = document.querySelector(".pictures-liste");


// Array of image paths
  let mariageP = ['images/wedding-1.jpg', 'images/wedding-2.jpg','images/wedding-3.jpg','images/wedding-4.jpg','images/wedding-5.jpg','images/wedding-6.jpg' ],
      pregnantP=['images/pregnant-1.jpg','images/pregnant-2.jpg','images/belly-3.jpg','images/pregnant-4.jpg','images/pregnant-5.jpg','images/pregnant-6.jpg'],
      babyP=['images/baby-1.jpg','images/baby-2.jpg','images/baby-3.jpg','images/baby-4.jpg','images/baby-5.jpg','images/baby-6.jpg'],
      familyP=['images/family-1.jpg','images/family-2.jpg','images/family-3.jpg','images/family-4.jpg','images/family-5.jpg','images/family-6.jpg'],
      dewP=['images/dew-1.jpg','images/dew-2.jpg','images/dew-3.jpg','images/dew-4.jpg','images/dew-5.jpg','images/dew-6.jpg'],
      coupleP=['images/couple-1.jpg','images/couple-2.jpg','images/couple-3.jpg','images/couple-4.jpg','images/couple-5.jpg','images/couple-6.jpg'],
      faceP=['images/portrait-1.jpg','images/portrait-2.jpg','images/portrait-3.jpg','images/portrait-4.jpg','images/portrait-5.jpg','images/portrait-6.jpg'];


// Add a click event listener to the button Mariage
btnMariage.addEventListener('click', ()=>{

    // Remove the class from the container  
    ul.remove();
    // Loop through the images and create a new image element for each one
    for (let  i = 0; i < mariageP.length; i++) {
      let   img = document.createElement('img');

      // Set the image source
      img.src = mariageP[i];
     // Add the image to the container
      boxPicture.appendChild(img);
      btnMariage.style.pointerEvents = "none";

  }
}); 



btnPregnant.addEventListener('click', ()=>{
  // Remove the class from the container  
 // mariageP.parentNode.removeChild('mariageP');
 //btnMariage.parentNode.style.display ='none';
  ul.remove();
  // Loop through the images and create a new image element for each one
  for (let  i = 0; i < pregnantP.length; i++) {
   let img = document.createElement('img');
    // Set the image source
    img.src = pregnantP[i];
   // Add the image to the container
    boxPicture.appendChild(img);
    btnPregnant.style.pointerEvents = "none";
}
}); 

