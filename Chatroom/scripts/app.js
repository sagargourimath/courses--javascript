const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMessage = document.querySelector('.update-msg');
const rooms = document.querySelector('.chat-rooms');

const chatUI = new ChatUI(chatList);

rooms.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    chatUI.clear();

    chatroom.updateRoom(e.target.getAttribute('id'));

    chatroom.getChats((data) => {
      chatUI.render(data);
    });
  }
});

const username = localStorage.username ? localStorage.username : 'anon';

const chatroom = new Chatroom('general', username);

chatroom.getChats((data) => {
  chatUI.render(data);
});

newChatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const message = newChatForm.message.value.trim();
  chatroom
    .addChat(message)
    .then(() => {
      newChatForm.reset();
    })
    .catch((err) => {
      console.log(err);
    });
});

newNameForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newName = newNameForm.name.value.trim();
  chatroom.updateName(newName);

  newNameForm.reset();

  updateMessage.innerHTML = `Your name was updated to ${newName}`;

  setTimeout(() => {
    updateMessage.innerHTML = '';
  }, 3000);
});
