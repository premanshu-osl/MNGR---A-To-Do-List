document.getElementById('subtn').addEventListener('click', addtodo);

function addtodo() {
  let todo = document.getElementById('todo-item-field').value;
  let toDate = new Date();
  let year = toDate.getFullYear();
  let month = toDate.getMonth() + 1;
  let date = toDate.getDate();

  let fullDate = year + "-" + appendLeadingZeroes(month) + "-" + appendLeadingZeroes(date);
  let enteredDate = document.getElementById('todo-date').value;

  if(todo !== "" && enteredDate >= fullDate) {
    let todoListing = document.getElementById('mngr-list--todo');

    let card = document.createElement('div');
    card.setAttribute('class', 'todo-item');

    let cardContent = document.createElement('p');
    cardContent.setAttribute('class', 'todo-desc')
    cardContent.innerHTML = todo;

    let cardInfo = document.createElement('div');
    cardInfo.setAttribute('class', 'todo-details d-flex justify-content-between');

    let priority = document.createElement('small');
    priority.setAttribute('class', 'priority');
    priority.innerHTML = "High";

    let status = document.createElement('small');
    status.setAttribute('class', 'status');
    status.innerHTML = "Active";

    let date = document.createElement('small');
    date.setAttribute('class', 'date');
    date.innerHTML = enteredDate;

    cardInfo.appendChild(priority);
    cardInfo.appendChild(status);
    cardInfo.appendChild(date); 

    todoListing.appendChild(card);
    card.appendChild(cardContent);
    card.appendChild(cardInfo);
    
  } else if(todo === "") {
    alert("Please Add a task. You can't do something if you don't know what to do.");
  } else if(enteredDate < fullDate) {
    alert("This is not a Time Machine. It won't allow you to do things in the Past.");
  }
}

function appendLeadingZeroes(n){
  if(n <= 9){
    return "0" + n;
  }
  return n
}