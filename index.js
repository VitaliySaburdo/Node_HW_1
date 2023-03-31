const operatons = require("./contacts");

const argv = require("yargs").argv;

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const list = await operatons.listContacts();
      console.log(list);
      break;

    case "get":
      const contact = await operatons.getContactById(id);
      console.log(contact);
      break;

    case "add":
      const newContact = await operatons.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const deleteContact = await operatons.removeContact(id);
      console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "drsAJ4SHPYqZeG-83QTVW" });
// invokeAction({ action: "remove", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({
//   action: "add",
//   name: "John Coner",
//   email: "John@mail.com",
//   phone: "1234567890",
// });
