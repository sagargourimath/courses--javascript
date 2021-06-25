import { styleBody, addTitle, contact } from './dom';
import my_users, { getPremUsers } from './data';

console.log('index file');

styleBody();
addTitle('Hello World! From the index file');
console.log(contact);

console.log(my_users);

const premUsers = getPremUsers(my_users);
console.log(premUsers);
