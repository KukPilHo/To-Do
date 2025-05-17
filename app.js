// app.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('todo-input');
  const list = document.getElementById('todo-list');

  form.addEventListener('submit', event => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    const li = document.createElement('li');
    li.textContent = text;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = '🗑️';
    removeBtn.addEventListener('click', () => {
      list.removeChild(li);
    });

    li.appendChild(removeBtn);
    list.appendChild(li);
    input.value = '';
    input.focus();
  });
});