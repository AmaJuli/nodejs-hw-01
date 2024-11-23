import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, undefined, 2), {
      encoding: 'utf-8',
    });
    console.log('All data has been succesffully added to the file');
  } catch (error) {
    console.error('An error occured:', error);
  }
};