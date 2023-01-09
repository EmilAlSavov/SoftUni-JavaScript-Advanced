window.addEventListener("load", solve);

function solve(){

    let sendButton = document.getElementsByTagName('button')[0];
    sendButton.addEventListener('click', send);

    function send(e){
        e.preventDefault();
        let productType = document.getElementById('type-product').value;
        let description = document.getElementById('description').value;
        let clientName = document.getElementById('client-name').value;
        let phoneNumber = document.getElementById('client-phone').value;

        if(description === '' || clientName === '' || phoneNumber === ''){
            return;
        }

        let div = document.createElement('div');
        div.classList.add('container');

        let h2 = document.createElement('h2');
        h2.innerText = `Product type for repair: ${productType}`;
        let h3 = document.createElement('h3');
        h3.innerText = `Client information: ${clientName}, ${phoneNumber}`;
        let h4 = document.createElement('h4');
        h4.innerText = `Description of the problem: ${description}`;

        let startButton = document.createElement('button');
        startButton.classList.add('start-btn');
        startButton.innerText = 'Start repair';

        let finishButton = document.createElement('button');
        finishButton.setAttribute('disabled', true);
        finishButton.classList.add('finish-btn');
        finishButton.innerText = 'Finish repair';

        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(startButton);
        div.appendChild(finishButton);

        let section = document.getElementById('received-orders');
        section.appendChild(div); 

        document.getElementById('description').value = '';
        document.getElementById('client-name').value = '';
        document.getElementById('client-phone').value = '';

        let startButtons = document.getElementsByClassName('start-btn');

        for (const stButton of startButtons) {
            stButton.addEventListener('click', start);
        }
    }

    function start(){
        let post = this.parentNode;

        let finishBtn = post.getElementsByClassName('finish-btn')[0];
        
        finishBtn.removeAttribute('disabled');

        this.setAttribute('disabled', true);

        finishBtn.addEventListener('click', finish);
    }

    function finish(){
        let post = this.parentNode;

        let article = post.parentNode;
        article.removeChild(post);

        let button1 = post.getElementsByTagName('button')[0];
        let button2 = post.getElementsByTagName('button')[1];
        post.removeChild(button1);
        post.removeChild(button2);

        let completedSection = document.getElementById('completed-orders');
        completedSection.appendChild(post);

        let clearButton = completedSection.getElementsByClassName('clear-btn')[0];
        clearButton.addEventListener('click', clear);
    }

    function clear(){
        let article = this.parentNode;
        let posts = article.getElementsByClassName('container');


        while(posts.length > 0){
            posts[0].remove();
        }

    }
}