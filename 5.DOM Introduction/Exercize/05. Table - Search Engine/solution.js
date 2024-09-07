function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const dataEl = document
         .querySelectorAll('table.container tbody tr');
      const searchEl = document
         .getElementById('searchField');

      
      function makeDefaultColorSchema(){
         dataEl.forEach(element=> {
            element.classList.remove('select');
         })
      }
      function makeColorLines(input){
         for (const line of dataEl) {
            if(line.textContent.toLowerCase().includes(input)){
               line.classList.add('select');
            }
         }
      }
      makeDefaultColorSchema();
      const tempSearch = searchEl.value.toLowerCase();
      makeColorLines(tempSearch);
     
      searchEl.value='';
   }
}