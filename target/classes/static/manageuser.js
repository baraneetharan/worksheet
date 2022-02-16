const uri = "http://localhost:8080/api/users/";

var allusers;
// = JSON.parse(localStorage.getItem("usersList") || "[]");
var updateindex = 0;
var text = "";
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
function setallusers() {
  if (localStorage) {
    localStorage.setItem("usersList", JSON.stringify(allusers));
  } else {
    alert("Sorry, your browser do not support local storage.");
  }
}
function logout() {
  sessionStorage.clear();
  alert("log out..");
  location.href = "login.html";
}
function teamfun() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      allusers = JSON.parse(xhttp.responseText);
      _displayItems();
    }
  };
  xhttp.open("GET", uri, true);
  xhttp.send();
}

function _displayItems() {
  var html = "";
  for (var i = 0; i < allusers.length; i++) {
    var currEdit = "edit(" + allusers[i].id + ")";
    var currDelete = "del(" + allusers[i].id + ")";
    html += "<tr>";
    html +=
      "<td>" +
      allusers[i].id +
      "<td>" +
      allusers[i].name +
      "<td>" +
      allusers[i].password +
      "<td>" +
      allusers[i].role;
    html +=
      "<td><a href='#editTaskModal' class='edit' data-toggle='modal'  onclick=" +
      currEdit +
      ">";
    html += "<i    class='material-icons' title='Edit'>&#xE254;</i  ></a>";
    html +=
      "<a  href='#deleteTaskModal' class='delete'  data-toggle='modal'  onclick=" +
      currDelete +
      ">";
    html +=
      "<i    class='material-icons'      title='Delete'    >&#xE872;</i  ></a>      </td>";
    html += "</tr>";
  }
  document.getElementById("teambox").innerHTML = html;
  // addOptions();
}

function addOptions() {
  document.getElementById("userDropdown").innerHTML = "";
  $("#profileForm #userDropdown").length = 0;
  var jsonArray = JSON.parse(localStorage.getItem("usersList") || "[]");
  var userOnly = jsonArray.filter((person) => person.role === "U");
  var select = document.getElementById("userDropdown");
  var option;
  for (var i = 0; i < userOnly.length; i++) {
    option = document.createElement("option");
    option.text = userOnly[i]["username"];
    select.add(option);
  }
  console.log(addOptions);
}

function save() {
  var newallusers = {
    id: 0,
    name: document.getElementById("username").value,
    password: document.getElementById("Password").value,
    role: document.getElementById("userDropdown").value,
  };
  allusers.push(newallusers);

  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", uri, true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(JSON.stringify(newallusers));

  setallusers();
  teamfun();
}

function del(i) {
  // alert("deleting...."+" "+i);
  allusers.splice(i, 1);
  teamfun();
  setallusers();
}

function edit(i) {
  // alert("EDITING"+" "+i);
  // $("#profileForm #userDropdown").length = 0;
  // $("#profileForm #userDropdown").empty();
  var selectElem = document.getElementById("userDropdown");

  const item = allusers.find((item) => item.id === i);
  $("#profileForm").find('[id="username"]').val(item.name);
  $("#profileForm").find('[id="Password"]').val(item.password);
  $("#profileForm").find('[id="userDropdown"]').val(item.role);

  updateindex = i;
  

  console.log(item);
  $.each(userDropdown, function (index, value) {
    $("<option/>", {
      value: index,
      text: userDropdown[index].name,
    }).appendTo(selectElem);

    // if (allusers[index].role === item.role.slice(0,1) ){
    //   console.log(allusers[index].role + " = " + item.role);
    //   $("#userDropdown option")
    //     // .val(allusers[index].role.slice(0,1))
    //     .text(allusers[index].role)
    //     .prop({ selected: true });
    // }

    $("<option/>", {
      value: index,
      text: userDropdown[index].name,
    }).appendTo(selectElem);

    // if(item.role==="A"){
    if (allusers[index].role === item.role) {
      console.log(allusers[index].role + " = " + item.role);
      $("#userDropdown option").val(allusers[index].role).prop({ selected: true });
    } else {
      $("#userDropdown option").val(allusers[index].role).prop({ selected: true });
    }
  });
}

function update() {
  console.log("update " + updateindex);
  //e1 = document.getElementById("username");
  allusers[updateindex].username = $("#profileForm")
    .find('[id="username"]')
    .val();
  allusers[updateindex].password = $("#profileForm")
    .find('[id="Password"]')
    .val();
  allusers[updateindex].role = $(
    "#profileForm #userDropdown option:selected"
  ).val();
  document.getElementById("username").value = "";
  document.getElementById("Password").value = "";
  document.getElementById("userDropdown").value = "";
  setallusers();
}
