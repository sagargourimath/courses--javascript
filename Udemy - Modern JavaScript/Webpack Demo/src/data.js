const users = [
  {
    name: 'mario',
    premium: true,
  },
  {
    name: 'sagar',
    premium: false,
  },
];

export const getPremUsers = (users) => {
  return users.filter((user) => user.premium);
};

export default users;
