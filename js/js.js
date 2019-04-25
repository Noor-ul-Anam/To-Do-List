var taskArr = ['aaa'];

function onChangeHandler(e) {
  taskArr = [e.value, ...taskArr];
  renderTasks();
}

function renderTasks() { 
  let element = document.getElementById('tasks');
  element.innerHTML = '';
  for (let i = 0; i < taskArr.length; i++) {
    element.innerHTML += "<div class='task'>" +`<p>${taskArr[i]}</p>` + `<input class='insertBtn'type='image' src='./asset/download.png' onclick=' insertTask(${i})'>`+`<input class='completeBtn'type='image' src='./asset/download (1).png' onclick='finishEdit()' >` + `<button class='btn' onclick='deleteTask(${i})'>x</button>` + "</div>";
  }
  document.getElementById('txtInp').value = ''; 
}
renderTasks();

function insertTask(i){
  document.getElementsByTagName('p').item(i).contentEditable = 'true';
  document.getElementsByTagName('p').item(i).focus();
  updateTaskArr = (i) => {
    taskArr = taskArr.map((value,index) => {
      if(index===i){
        return document.getElementsByTagName('p').item(i).innerText;
      }else{
        return value;
      }
    });
  }
}
function finishEdit(i){
  document.getElementsByTagName('p').item(i).contentEditable = false;  
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
