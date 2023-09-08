const task=document.querySelector("input[type='text']");
const add=document.querySelector('.add');
const container=document.querySelector('.container');
const popup= document.querySelector('.popup');

function addTask(e){
    let taskNumber=container.childElementCount-2;
    if(taskNumber>9){
        task.value=""
        alert('Finish your current tasks first ')
    }else if(task.value==""){
        alert('Enter a valid task')
    }else{
    let bigDiv=document.createElement('div');
    bigDiv.classList.add('tasks');

    let insideDiv=document.createElement('div');
    insideDiv.classList.add("task");

    let img=document.createElement('img');
    img.src="images/unchecked.png";
    let para=document.createElement('p');
    para.appendChild(document.createTextNode(task.value));


    insideDiv.appendChild(img)
    insideDiv.append(para)

    let btn=document.createElement('button');
    btn.classList.add('dlt');
    btn.innerHTML='<i class="fa fa-close"></i>';
    bigDiv.appendChild(insideDiv);
    bigDiv.appendChild(btn);
    container.appendChild(bigDiv);
    task.value=""
}}
add.addEventListener("click",addTask);

container.addEventListener('click',(e) =>{
    let target=e.target
    if(target.tagName=='P' || target.tagName=="IMG" || target.classList.contains('task')){
        if(target.tagName=='IMG'){
            p=target.nextElementSibling;
        }else if(target.tagName=='DIV'){
            p=target.lastChild;
        }else{
            p=target
        }
        if(p.classList.contains('done')){
            p.classList.remove('done')
            p.previousSibling.src="images/unchecked.png";
        }else{
            p.classList.add('done');
            p.previousSibling.src="images/checked.png";
        }
    }
})
container.addEventListener('click',(e)=>{
    let target=e.target;
    if(target.className=="dlt" || target.tagName=='I'){
        if(target.parentElement.tagName=="BUTTON"){
            div=target.parentElement.parentElement;
        }
        else{
            div=target.parentElement;
        }
        popup.classList.add('reveal');
        container.classList.add('remove');
        popbtns=popup.querySelectorAll('button');
        popbtns.forEach(function (popbtn) {
            popbtn.addEventListener('click',()=>{
                popup.classList.remove('reveal');
                container.classList.remove('remove');
                if(popbtn.className=="confirm"){
                    div.remove()
                }
          });
        });

    }})