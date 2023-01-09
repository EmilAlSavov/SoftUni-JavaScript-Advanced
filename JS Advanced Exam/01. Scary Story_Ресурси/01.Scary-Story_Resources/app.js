window.addEventListener("load", solve);

function solve() {
    let publishBtn = document.getElementById('form-btn');
    publishBtn.addEventListener('click', publish)

    function publish(){

      let firstName = document.getElementById('first-name').value;
      let lastName = document.getElementById('last-name').value;
      let age = document.getElementById('age').value;
      let storyTitle = document.getElementById('story-title').value;
      let genre = document.getElementById('genre').value;
      let storyText = document.getElementById('story').value;

      if(firstName === '' || lastName === '' || age === '' || storyTitle === '' || storyText === ''){
        return;
      }


      let previewList = document.getElementById('preview-list');

      let li = document.createElement('li');
      li.innerHTML = `<article>
      <h4>Name: ${firstName} ${lastName}</h4>
      <p>Age: ${age}</p>
      <p>Title: ${storyTitle}</p>
      <p>Genre: ${genre}</p>
      <p>${storyText}</p>
      </article>
      <button class="save-btn">Save Story</button>
      <button class="edit-btn">Edit Story</button>
      <button class="delete-btn">Delete Story</button>`;

      li.classList.add('story-info');

      previewList.appendChild(li);

      this.setAttribute('disabled', true);

      document.getElementById('first-name').value = '';
      document.getElementById('last-name').value = '';
      document.getElementById('age').value = '';
      document.getElementById('story-title').value = '';
      document.getElementById('story').value = '';

      let editButton = li.getElementsByClassName('edit-btn')[0];
      editButton.addEventListener('click', edit)

      let saveButton = li.getElementsByClassName('save-btn')[0];
      saveButton.addEventListener('click', save);

      let deleteButton = li.getElementsByClassName('delete-btn')[0];
      deleteButton.addEventListener('click', deletePost);
    }

    function edit(){
      let post = this.parentNode;
      let firstName = post.getElementsByTagName('h4')[0].innerText.split(' ')[1];
      let lastName = post.getElementsByTagName('h4')[0].innerText.split(' ')[2];
      let age = post.getElementsByTagName('p')[0].innerText.split(' ')[1];
      let storyTitle = post.getElementsByTagName('p')[1].innerText.split(' ')[1];
      let genre = post.getElementsByTagName('p')[2].innerText.split(' ')[1];
      let storyText = post.getElementsByTagName('p')[3].innerText;

      document.getElementById('first-name').value = firstName;
      document.getElementById('last-name').value = lastName;
      document.getElementById('age').value = age;
      document.getElementById('story-title').value = storyTitle;
      document.getElementById('genre').value = genre;
      document.getElementById('story').value = storyText;

      publishBtn.removeAttribute('disabled');
      post.remove();
    }

    function save(){
      let mainDiv = document.getElementById('main');

      let h1 = document.createElement('h1');
      h1.innerText = 'Your scary story is saved!'

      mainDiv.innerHTML = '';
      mainDiv.appendChild(h1);
    }

    function deletePost(){
      let post = this.parentNode;
      publishBtn.removeAttribute('disabled')
      post.remove();
    }
}
