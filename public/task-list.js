`use strict`;
//HTMLの取得
const taskMonth = document.getElementById('taskmonth');
const taskStatus = document.getElementById('taskstatus');
const taskTitle = document.getElementById('tasktitle');
const taskDetail = document.getElementById('taskdetail');
const submitButton = document.getElementById('submit');
const tasktListTbody = document.getElementById('tasklist');
// タスクを管理する配列を準備する
const tasks = [];

/**
 * タスクリストを表示する
 */
 function displayTaskList(){
  tasktListTbody.innerText = '';
  for(let i = 0; i < tasks.length ;i++){
    const task = tasks[i];
    const taskTr = document.createElement('tr');
    const monthTd = document.createElement('td');
    const statusTd = document.createElement('td');
    const titleTd = document.createElement('td');
    const detailTd = document.createElement('td');
    const deleteTd = document.createElement('td');
    const deleteButton = document.createElement('button');
    monthTd.innerText = task.month;
    taskTr.appendChild(monthTd);
    statusTd.innerText = task.status;
    taskTr.appendChild(statusTd);
    titleTd.innerText = task.title;
    taskTr.appendChild(titleTd);
    detailTd.innerText = task.detail;
    taskTr.appendChild(detailTd);
    deleteButton.innerText = "削除";
    deleteButton.className = "delete-button"
    deleteButton.onclick = function () {
      deleteTask(i);
    }
    deleteTd.appendChild(deleteButton);
    taskTr.appendChild(deleteTd);
    tasktListTbody.appendChild(taskTr);
  }
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
function deleteTask(deleteIndex){
  tasks.splice(deleteIndex,1);
  displayTaskList();
}

// 登録ボタンの click イベントを設定する
submitButton.onclick = function(){
  if(!taskMonth.value  && !taskTitle.value && !taskDetail.value){
    alert("入力されていない項目があります")
    return;
  }
  const task = {
    month: taskMonth.value,
    status: taskStatus.value,
    title: taskTitle.value,
    detail: taskDetail.value
  }
  addTask(task);

}



function addSmaple() {
  // 関数の処理
  const task = {
    month: '2021-07',
    status: '済',
    title: 'A社経営統合プロジェクト',
    detail: '経営統合に伴う業務プロセス統合プロジェクト。\nプロジェクトリーダー（メンバー４人）として担当。\nＱＤＣ目標いずれも達成。ＣＳ評価で５をいただいた。'
  }

  addTask(task);
}

addSmaple();
