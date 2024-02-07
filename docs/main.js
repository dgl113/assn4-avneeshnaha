'use strict';

(() => {
  window.addEventListener('load', (event) => {
    const updateUI = () => {
      document.getElementById('totalCost').textContent =
        '$' + getOrderTotal().toFixed(2);
    };

    document.getElementById('addItem').addEventListener('click', (event) => {
      addItem(quantity.value, size.value, description.value);

      const newRow = document.createElement('tr');
      newRow.appendChild(document.createElement('td')).textContent =
        quantity.value;
      newRow.appendChild(document.createElement('td')).textContent = size.value;
      newRow.appendChild(document.createElement('td')).textContent =
        description.value;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.setAttribute('type', 'button');
      newRow
        .appendChild(document.createElement('td'))
        .appendChild(deleteButton);
      list.appendChild(newRow);

      updateUI();
    });

    list.addEventListener('click', (event) => {
      if (event.target.tagName == 'BUTTON') {
        list.querySelectorAll('button').forEach((value, index) => {
          if (value == event.target) {
            deleteItem(index);
            value.parentElement.parentElement.parentElement.removeChild(
              value.parentElement.parentElement
            );
          }
        });
        updateUI();
      }
    });

    updateUI();
  });
})();
