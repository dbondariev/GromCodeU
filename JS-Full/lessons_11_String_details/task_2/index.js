// сортировать по имени

const contacts = [
  {
    name: 'Tom',
    phoneNumber: '666-66-66',
  },
  {
    name: 'Lonh',
    phoneNumber: '555-55-55',
  },
  {
    name: 'Ann',
    phoneNumber: '333-33-33',
  },
  {
    name: 'Stephan',
    phoneNumber: '444-44-44',
  },
  {
    name: 'Suzy',
    phoneNumber: '222-22-22',
  },
  {
    name: 'Adel',
    phoneNumber: '111-11-11',
  },
];


// option 1
const sortContacts = (contact, isAsc = true) => {
  if (!Array.isArray(contact)) {
    return null;
  }
  return contact.sort((a, b) => {
    if (isAsc) {
      return a.name.localeCompare(b.name);
    } 
      return b.name.localeCompare(a.name);
  });
};

// option 2
// const sortContacts = (contact, isAsc = true) => {
//   if (!Array.isArray(contact)) {
//     return null;
//   }
//   return contact.sort((a, b) => isAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
// }

console.log(sortContacts(contacts));
