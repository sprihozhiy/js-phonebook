var contacts = [];
var contactIndex = 1;
var fullname = document.getElementById('name');
var phone = document.getElementById('phone');
var zip = document.getElementById('zip');
var addBtn = document.getElementById('add');
var contactsList = document.getElementById('contactsList');
var searchElement = document.getElementById('searchElement');
var search = document.getElementById('search');
var searchResult = document.getElementById('searchResult');

function displayData() {
  contactsList.innerHTML = '';
  for(var i = 0; i < contacts.length; i++) {
    contactsList.innerHTML += '<p>' +       contacts[i].fullname + ' ' + contacts[i].phone + ' ' + contacts[i].zip + '</p>';
  }
}


addBtn.addEventListener('click', addContact);
function addContact(){
  var contact = {
    fullname : fullname.value,
    phone : phone.value,
    zip : zip.value
  };
  contacts.push(contact);
  displayData();
}

search.addEventListener('click', findContact);

function findContact(){
  var text = searchElement.value;
  for(var k = 0; k < contacts.length; k++){
    if (text === contacts[k].fullname || text === contacts[k].phone || text === contacts[k].zip) {
      searchResult.innerHTML += '<p>Match</p>';
    } else {
     searchResult.innerHTML += '<p>No Match</p>';
   }
}
}
