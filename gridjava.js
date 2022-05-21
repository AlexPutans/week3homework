var array, fruit, emoji;


fruit = ['banana', 'grapes', 'apple', 'cherry'];
emoji = ['🍌', '🍇', '🍎', '🍒'];


document.getElementById('button').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  while (!!fruit.length) {
    if(--window.LoopTrap <= 0) throw "Infinite loop.";
    let new_li = document.createElement('li');
    new_li.innerText = fruit.shift();
    let new_span = document.createElement('span');
    new_span.innerText = emoji.shift();

    new_li.appendChild(new_span);

    element_list.appendChild(new_li);
  }

});
array;
