let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    let employees = JSON.parse(xhr.responseText);
    let statusHTML = '<ul class="bulleted">';
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
   }
};
xhr.open('GET', 'data/employees.json');
xhr.send();

//Json request for the meeting rooms
let meeting = new XMLHttpRequest();
meeting.onreadystatechange = function () {
  if (meeting.readyState === 4) {
    let rooms = JSON.parse(meeting.responseText);
    let statusHTML = '<ul class="rooms">';
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].available === true) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }
      statusHTML += rooms[i].room;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML;
   }
};
meeting.open('GET', 'data/rooms.json');
meeting.send();