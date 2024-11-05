const slaid = document.querySelectorAll('.slaid');
 slaid.forEach((slaid)=>{
   slaid.addEventListener('click',()=>{
     removelastactives();
     slaid.classList.add('active');
   });
 });
 function removelastactives() {
   slaid.forEach(slaid =>{
     slaid.classList.remove('active');
   })
 }