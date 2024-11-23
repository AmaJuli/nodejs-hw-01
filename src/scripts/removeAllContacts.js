import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]); 
    console.log('All contacts have been successfully added.');
  } catch (error) {
    console.error('An error occured:', error);
  }
};

removeAllContacts();