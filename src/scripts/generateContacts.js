import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    
    const existingContacts = (await readContacts()) || [];

   
    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );

   
    const updateContacts = [...existingContacts, ...newContacts];

 
    await writeContacts(updateContacts);

    console.log(`Successfully have been added ${number} new contacts`);
  } catch (error) {
    console.error('An error occured:', error);
  }
};

generateContacts(5);