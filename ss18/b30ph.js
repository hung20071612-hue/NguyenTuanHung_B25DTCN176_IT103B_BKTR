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
                <button class="btn-delete">Xóa</button>
                </div>
            </td>
        </tr>
        `
    });
}