import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('No contacts found.');
      return;
    }
    
    contacts.pop();

    
    await writeContacts(contacts); 
    console.log('The last contact has been deleted.');
  } catch (error) {
    console.error('An error occured:', error);
  }
};

removeLastContact();