let contacts = [];
let nameCon = document.getElementById(`contact-name`);
let phoneCon = document.getElementById(`contact-phone`);
let emailCon = document.getElementById(`contact-email`);
let btnCon = document.getElementById(`btn-add`);
let listCon = document.getElementById(`contact-tbody`);
let data = localStorage.getItem("myContacts");
if(data){
    contacts = JSON.parse(data);
    display(contacts);
}
btnCon.addEventListener(`click`,function(e){
    e.preventDefault();
    addContact();
});
function addContact(){
    let id = contacts.length + 1;
    let newContact = {
        id,
        name: nameCon.value,
        phone: phoneCon.value,
        email: emailCon.value,
    }
    nameCon.value =``;
    phoneCon.value =``;
    emailCon.value=``;
    contacts.push(newContact);
    console.log(contacts)
    localStorage.setItem(`myContacts`,JSON.stringify(contacts));
    display(contacts);
}

function display(list){
    listCon.innerHTML = ``
    list.forEach(contact => {
        listCon.innerHTML += `
        <tr>
            <td>${contact.id}</td>
            <td>${contact.name}</td>
            <td>${contact.phone}</td>
            <td>${contact.email}</td>
            <td>
                <div class="action-buttons">
                <button class="btn-edit">Sửa</button>
                <button class="btn-delete" onclick="deleteOnly(${contact.id})">Xóa</button>
                </div>
            </td>
        </tr>
        `
    });
}
function deleteOnly(id){
    let contact = contacts.findIndex(c => c.id === id);
    contacts.splice(contact,1);
    for(let i = 0; i < contacts.length; i++){
        contacts[i].id = i + 1;
    }
    display(contacts);
}
