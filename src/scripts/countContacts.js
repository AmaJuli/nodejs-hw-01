import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = (await readContacts()) || [];

    const contactCount = contacts.length;
    console.log('A nember of contacts:', contactCount);
    return contactCount;
  } catch (error) {
    console.error('An error occured:', error);
    return 0;
  }
};

console.log(await countContacts());