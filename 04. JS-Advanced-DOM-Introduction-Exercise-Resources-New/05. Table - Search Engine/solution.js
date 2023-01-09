function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let tableContent = document.querySelectorAll('table')[0];
   tableContent = tableContent.getElementsByTagName('tbody')[0];
   let rows = tableContent.getElementsByTagName('tr');

   function onClick() {
     let searchText = document.getElementById('searchField').value;

     
      for (const row of rows) {
         let innerContent = row.children;
         let match = false;

         for (const el of innerContent) {
            if (el.innerText.includes(searchText)) {
               match = true;
               break;
            }
         }

         if(match){
            row.className += 'select';
         } else{
            row.classList.remove('select');
         }
      }
   }
}