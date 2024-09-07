function search() {
   const liEl = document
      .querySelectorAll('#towns li')
   const searchEl =document
      .getElementById('searchText');

   const resultEl = document
         .getElementById('result');

   function resetDisplay() {
      for (let li of liEl) {
         li.style.fontSize = 'initial';
         li.style.textDecoration = 'none';
         li.style.fontWeight = 'normal';
      };
  }

   resetDisplay();
   
   function displayMatches(input) {
      let cc=0;
      for (let li of liEl) {
         if (li.textContent.includes(input)) {
            li.style.fontSize = 'initial';
            li.style.textDecoration = 'underline';
            li.style.fontWeight = 'bold';
            cc++;
         }
      };
      return cc;
   }
   const text = searchEl.value;
   let count = displayMatches(text);
   resultEl.textContent=`${count} matches found`;
   searchEl.value='';
}

