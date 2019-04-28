var taskArr = ['aaa'];

function onChangeHandler(e) {
  taskArr = [e.value, ...taskArr];
  renderTasks();
}

function renderTasks() { 
  let element = document.getElementById('tasks');
  element.innerHTML = '';
  for (let i = 0; i < taskArr.length; i++) {
    element.innerHTML += "<div class='task'>" +`<p>${taskArr[i]}</p>` +`<a class='completeBtn' tooltip='Complete' onclick='updateTask(${i})'><img src='./asset/download (1).png'></a>` + `<a class='insertBtn btn' src='./asset/download.png' tooltip='Edit'onclick='insertTask(${i})'><img src='./asset/download.png'></a>`+ `<a class='deleteBtn' tooltip='Delete' onclick='deleteTask(${i})'><img src='./asset/download (2).png'></a>`+ "</div>";
    document.getElementById('txtInp').value = '';
  }
}
renderTasks();
/*<span class='tooltip'>Finish</span>*/
function tooltip(){

}

function updateTask(i){
  let temp =document.getElementsByTagName('p').item(i);
  temp.contentEditable = false; 
  taskArr = taskArr.map((value,index) => {
    if(index === i){ 
      return temp.innerText;
    }else{
      return value;
    }
  })
  console.log(taskArr);
}

function insertTask(i){
  document.getElementsByTagName('p').item(i).contentEditable = 'true';
  document.getElementsByTagName('p').item(i).focus();
}

function deleteTask(i){
  taskArr = taskArr.filter((value,itsIndex) => {
    if (itsIndex === i) {
      return false;
    }else{
      return true;
    }
  });
  renderTasks();
}
