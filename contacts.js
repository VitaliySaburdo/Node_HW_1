const uuid = require("uuid");
const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath, "utf-8");
  const contacts = JSON.parse(data);
  return contacts;
}

async function getContactById(contactId) {
  const data = await fs.readFile(contactsPath, "utf-8");
  const contacts = JSON.parse(data);
  const contact = contacts.find((contact) => contact.id === contactId);
  return contact;
}

async function removeContact(contactId) {
  const data = await fs.readFile(contactsPath, "utf-8");
  const contacts = JSON.parse(data);
  const idx = contacts.findIndex((contact) => contact.id === contactId);
  const deletingContact = contacts[idx];
  if (idx !== -1) {
    contacts.splice(idx, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
  }
  return "Your contact has been successfully removed";
}

async function addContact(name, email, phone) {
  const data = await fs.readFile(contactsPath, "utf-8");
  const contacts = JSON.parse(data);
  const newContact = {
    id: uuid.v4(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
