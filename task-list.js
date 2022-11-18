`use strict`;
//HTMLの取得
const taskMonth = document.getElementById('taskmonth');
const taskStatus = document.getElementById('taskstatus');
const taskTitle = document.getElementById('tasktitle');
const taskDetail = document.getElementById('taskdetail');
const submitButton = document.getElementById('submit');
const tasktListTbody = document.getElementById('tasklist');
// タスクを管理する配列を準備する
let tasks = [];
// 登録ボタンの click イベントを設定する
submitButton.onclick = function(){
  const task = {
    month: taskMonth.value,
    status: taskStatus.value,
    title: taskTitle.value,
    detail: taskDetail.value
  }
  addTask(task);
}

/**
 * タスクを登録する
 * @param {Object} task タスク
 */
function addTask(task){
    tasks.push(task);
    displayTaskList();
}

/**
 * タスクを削除する
 * @param {number} deleteIndex 削除するタスクの番号
 */
function deleteTask(deletedIndex){
  tasks.splice(deleteIndex,1);
  displayTaskList();
}

/**
 * タスクリストを表示する
 */
function displayTaskList(){
  tasktListTbody.innerText = '';
  for(let i = 0; i < tasks.length ;i++){
    const task = tasks[i];


  }
}
