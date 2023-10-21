
function newElement(){

    let ulDom = document.querySelector("#list")
    let liDom = document.createElement("li")
    let value = document.querySelector("#task").value

    if(value.length <= 0 || value==" "){
        $("#liveToast2").toast('show');
        document.querySelector('#task').value =" "
    }

    else{
               
        ulDom.appendChild(liDom)
        document.querySelector('#task').value =" "
        $('#liveToast').toast('show')



        let deleteButton = document.createElement('button')
        let chechkButton = document.createElement('button')

        deleteButton.style.float = 'right';
        deleteButton.style.backgroundColor = 'orange'
        deleteButton.style.borderRadius = '6px';
        chechkButton.style.float = 'right';
        chechkButton.style.backgroundColor = '#6B8E23'
        chechkButton.style.borderRadius = '6px';

        deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>'; // Delete düğmesinin içeriğini ayarla
        chechkButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>'
        liDom.innerHTML = value



        deleteButton.onclick = () => {
            
            liDom.style.opacity= 0.5
            liDom.style.color = 'orange'

        }

        
        chechkButton.onclick = () => {
            
            liDom.style.color = 'green'
            liDom.style.opacity= 0.5

        }
        liDom.appendChild(deleteButton);
        liDom.appendChild(chechkButton);
    }



}