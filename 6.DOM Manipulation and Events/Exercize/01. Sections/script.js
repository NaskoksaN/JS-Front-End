function create(words) {
   const divEl = document.getElementById('content');
   function createHtml(word){
         let pEl = document.createElement('p');
         pEl.textContent=word;
         pEl.style.display='none'
         let secondDivEl = document.createElement('div');
         secondDivEl.append(pEl);
         return secondDivEl;
   }
  
   
   for (const word of words) {
      const tempDivEl = createHtml(word);
      tempDivEl.addEventListener('click', (e)=>{
         tempDivEl.children[0].style.display='block';
         //e.target.querySelector('p').style.display='block';
         //e.target/children[0].style.display ='block';
      });

      divEl.append(tempDivEl);
   }
   
}