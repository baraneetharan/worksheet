var allusers = JSON.parse(localStorage.getItem("usersList") || "[]");
var updateindex ;
var text="";
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
function setallusers() {
  if (localStorage) {
    localStorage.setItem("usersList", JSON.stringify(allusers));
  } 
  else {
    alert("Sorry, your browser do not support local storage.");
  }
}
function logout() {
  sessionStorage.clear();
  alert("log out..");
  location.href = "login.html";
}
function teamfun() {
  var html = "";
  for (var i = 0; i < allusers.length; i++) {
    var currEdit = "edit(" + i + ")";
    var currDelete = "del(" + i + ")"; 
    html += "<tr>";
    html +=
      "<td>" +
      allusers[i].username +
      "<td>" +
      allusers[i].password +
      "<td>" +
      allusers[i].role;
    html +=
      "<td><a href='#editTaskModal' class='edit' data-toggle='modal'  onclick=" +
      currEdit +
      ">";
    html +=
      "<i    class='material-icons' title='Edit'>&#xE254;</i  ></a>";
    html +=
      "<a  href='#deleteTaskModal' class='delete'  data-toggle='modal'  onclick=" +
      currDelete +
      ">";
    html +=
      "<i    class='material-icons'      title='Delete'    >&#xE872;</i  ></a>      </td>";
    html += "</tr>";
  }
  document.getElementById("teambox").innerHTML = html;
 addOptions();
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
    username: document.getElementById("username").value,
    password: document.getElementById("Password").value,
    role: document.getElementById("userDropdown").value,
  };
  allusers.push(newallusers);
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
$("#profileForm").find('[id="username"]').val(allusers[i].username);
$("#profileForm").find('[id="Password"]').val(allusers[i].password);
$("#profileForm").find('[id="userDropdown"]').val(allusers[i].role);
updateindex=i;
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
  ).text();
  document.getElementById("username").value = "";
  document.getElementById("Password").value = "";
  document.getElementById("userDropdown").value = "";
 setallusers();
 
}