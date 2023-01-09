window.addEventListener("load", solve)

function solve() {
    document.getElementById('published-list').innerHTML = '';
    let publishButton = document.getElementById('publish-btn');

    publishButton.addEventListener('click', publish)

    let clearButton = document.getElementById('clear-btn');
    clearButton.addEventListener('click', clear);


    function publish(){
      
        let titleText = document.getElementById('post-title').value;
        let categoryText = document.getElementById('post-category').value;
        let contentText = document.getElementById('post-content').value;
    
        if(titleText === '' || categoryText === '' || contentText === ''){
            return;
        }
    
        let reviewUl = document.getElementById('review-list');
    
        let li = document.createElement('li')
        li.innerHTML = `<article>
        <h4>${titleText}</h4>
        
        <p>Category: ${categoryText}</p>
        
        <p>Content: ${contentText}</p>
        </article>
        <button class="action-btn edit">Edit</button>
        <button class="action-btn approve">Approve</button>`;
    
        li.classList.add('rpost');
    
        reviewUl.appendChild(li);
    
        document.getElementById('post-title').value = '';
        document.getElementById('post-category').value = '';
        document.getElementById('post-content').value = '';
    
        let editButtons = document.getElementsByClassName('action-btn edit');
    
        for (const editButton of editButtons) {
            
            editButton.addEventListener('click', edit);
        }
    
        let approveButtons = document.getElementsByClassName('action-btn approve');
        for (const approveButton of approveButtons) {
            
            approveButton.addEventListener('click', approve);
        }
    }
    
    function edit(){
        let li = this.parentNode;
    
        let titleText = li.getElementsByTagName('h4')[0].innerText;
        let categoryText = li.getElementsByTagName('p')[0].innerText;
        let contentText = li.getElementsByTagName('p')[1].innerText;
    
        categoryText = categoryText.substring(9);
        contentText = contentText.substring(9);
    
        document.getElementById('post-title').value = titleText;
        document.getElementById('post-category').value = categoryText;
        document.getElementById('post-content').value = contentText;
    
        li.remove();
    }
    
    function approve(){
        let li = this.parentNode;
    
        let titleText = li.getElementsByTagName('h4')[0].innerText;
        let categoryText = li.getElementsByTagName('p')[0].innerText;
        let contentText = li.getElementsByTagName('p')[1].innerText;
    
        categoryText = categoryText.substring(10);
        contentText = contentText.substring(9);
    
        let ul = document.getElementById('published-list');
    
        let approvedLi = document.createElement('li');
    
        approvedLi.innerHTML = `<article>
        <h4>${titleText}</h4>
        
        <p>Category: ${categoryText}</p>
        
        <p>Content: ${contentText}</p>
        </article>`;
    
        approvedLi.classList.add('rpost');
        ul.appendChild(approvedLi);
    
    
        li.remove();
    
    }
    
    function clear(){
        let container = this.parentNode;
    
        let ul = container.childNodes[3];
    
        ul.innerHTML = '';
    }
}


