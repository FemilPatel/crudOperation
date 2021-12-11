var selectedRow = null;
let list = [];
console.log(list);

function onFormSubmit () {
  if (validate ()) {
    var formData = readFormData ();
    console.log (selectedRow);
    if (selectedRow !== null) updateRecord (formData);
    else insertNewRecord (formData); 
    resetForm ();
  }
}

function readFormData () {
  var formData = {};
  formData['fullName'] = document.getElementById ('fullName').value;
  formData['empCode'] = document.getElementById ('empCode').value;
  formData['salary'] = document.getElementById ('salary').value;
  formData['city'] = document.getElementById ('city').value;
  return formData;
}

function rendertable() {
  $('#tbody').empty()
  list.forEach((value,index) => {
    let row = "<tr>"
    row +="<td>" + value.fullName + "</td>"
    row +="<td>" + value.empCode + "</td>"
    row +="<td>" + value.salary + "</td>"
    row +="<td>" + value.city + "</td>"
    row +="<td>" 
    row +="<input type='button'  class='btn btn-warning'  value='Edit' onClick='onEdit("+index+")'></input>" 
    
    row +="<input type='button' class='btn btn-danger'  value='Delete' onClick='onDelete("+index+")'></input>"
    row +="</td>" 
    row += "</tr>"

    $('#tbody').append(row)
    
  }
  )
}

function insertNewRecord (data) {
  list.push (data);
  rendertable();
  localStorage.setItem('list',JSON.stringify(list));
}

function resetForm () {
  document.getElementById ('fullName').value = '';
  document.getElementById ('empCode').value = '';
  document.getElementById ('salary').value = '';
  document.getElementById ('city').value = '';
  selectedRow = null;
}

function onEdit (index) { //alret(index
  //console.log(index);
  const newdata = list[index];
  //console.log(newdata);
  document.getElementById ('fullName').value = newdata.fullName;
  document.getElementById ('empCode').value = newdata.empCode;
  document.getElementById ('salary').value = newdata.salary;
  document.getElementById ('city').value = newdata.city;
  selectedRow = index;
}
function updateRecord (formData) {

  list[selectedRow].fullName = formData.fullName;
  list[selectedRow].empCode = formData.empCode;
  list[selectedRow].salary = formData.salary;
  list[selectedRow].city = formData.city;
  selectedRow = null
  localStorage.setItem('list', JSON.stringify(list));
  list = JSON.parse(localStorage.getItem('list'));
  rendertable();
}
function onDelete (index) {
  console.log(index)

  if (confirm ('Are you sure to delete this record ?')) {
    list.splice(index,1)
    localStorage.setItem('list', JSON.stringify(list));
    rendertable();
   // document.getElementById ('employeeList').deleteRow (row.rowIndex);
   resetForm ();
 }
}

function validate () {
  var fl = document.getElementById ('fullName');
  var ec = document.getElementById ('empCode');
  var s = document.getElementById ('salary');
  var c = document.getElementById ('city');
  if (
    fl.value.trim () == '' ||
    ec.value.trim () == '' ||
    s.value.trim () == '' ||
    c.value.trim () == ''
    ) {
    alert ('No blank values allowed so that recorde not inserted.');
  return false;
} else {
  alert ('inserted...');
  return true;
}
}

 //Put the object into storage
 const text = localStorage.getItem("list");
 const c = JSON.parse(text)
 if(c.length !== 0){
  list = c;
}
rendertable();