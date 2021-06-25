const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

// add todos
const generateTemplate = (todo) => {
  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center text-light">
  <span>${todo}</span>
  <i class="far fa-trash-alt delete"></i></li>`;

  list.innerHTML += html;
};

addForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const todo = addForm.add.value.trim();

  if (todo.length > 0) {
    generateTemplate(todo);
    addForm.reset();
  }
});

// delete todos
list.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

// search todos
const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => {
      return !todo.textContent.includes(term);
    })
    .forEach((todo) => {
      todo.classList.add('filtered');
    });

  Array.from(list.children)
    .filter((todo) => {
      return todo.textContent.includes(term);
    })
    .forEach((todo) => {
      todo.classList.remove('filtered');
    });
};

search.addEventListener('keyup', (e) => {
  const term = e.target.value.trim();
  filterTodos(term);
});
