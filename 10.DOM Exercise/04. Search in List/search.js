function search() {
   let liRefresh = document.querySelectorAll('ul li');
   let li = liRefresh;
   let searchText = document.getElementById('searchText').value;
   let result = document.getElementById('result');

   let numOfRes = 0;
   for (const item of li) {
      if(item.textContent.includes(searchText)){
         item.style.fontWeight = 'bold'
         item.style.textDecoration = 'underline';
         numOfRes++;
      }
   }
   result.innerText = `${numOfRes} matches found`;
}
