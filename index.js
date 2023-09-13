let btnReception = document.getElementById('reception'),
    btnMariage = document.getElementById('mariage'),
    btnPregnant = document.getElementById('pregnancy'),
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

    // Remove the old images from the container  
    ul.innerHTML="";
    // Loop through the images and create a new image element for each one
    for (let  i = 0; i < mariageP.length; i++) {
      let   img = document.createElement('img');

      // Set the image source
      img.src = mariageP[i];
     // Add the image to the container
      ul.append(img);

  }
}); 



btnPregnant.addEventListener('click', ()=>{
      
      ul.innerHTML="";

    for (let j = 0; j < pregnantP.length ;j++){
      const img2 =document.createElement("img");
      img2.src = pregnantP[j];
      ul.append(img2)
      }

}); 

btnFamily.addEventListener('click',() =>{
  ul.innerHTML="";
  for (let k = 0;k<familyP.length;++k){
    const img3 =document.createElement ("img");
    img3.src = familyP [k];
    ul.append(img3)
    }
    });

    btnBaby.addEventListener('click', ()=>{
      ul.innerHTML="";
      for (let l=0;l<babyP.length;++l ){
        const img4 =document.createElement ('img');
        img4.src = babyP [l];
        ul.append(img4)
      }
        
    });
    btnCouple.addEventListener('click', ()=>{
      ul.innerHTML="";
      for (let n=0;n<coupleP.length;++n ) {
        const img5 =document.createElement ('img');
        img5.src = coupleP [n];
        ul.append(img5)
        }
    });

    btnDew.addEventListener('click', ()=>{
      ul.innerHTML="";
      for (let m=0;m<dewP.length;++m ) {
        const img6 = document.createElement ('img');
        img6.src = dewP [m];
        ul.appendChild(img6)
        }
    });

    btnFace.addEventListener('click', ()=>{
      ul.innerHTML="";
      for (let o=0;o<faceP.length;++o ) {
        const img7 = document.createElement ('img');
        img7.src = faceP [o];
        ul.appendChild(img7);
        }
    });
    
