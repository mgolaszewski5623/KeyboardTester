const keys = document.querySelectorAll('.key');

// Mapa specjalnych klawiszy
const specialKeys = {
  'Backspace': 'Backspace',
  'Tab': 'Tab',
  'Enter': 'Enter',
  'CapsLock': 'CapsLock',
  'Shift': 'Shift',
  'Control': 'Control',
  'Alt': 'Alt',
  'Meta': 'Meta',
  ' ': 'Space',
  'ArrowUp': '↑',
  'ArrowDown': '↓',
  'ArrowLeft': '←',
  'ArrowRight': '→'
};

document.addEventListener('keydown', (e) => {
  const keyPressed = e.key;
  let foundKey = null;

  keys.forEach(key => {
    if (key.textContent.toLowerCase() === keyPressed.toLowerCase()) {
      foundKey = key;
    }
    
    const dataKey = key.getAttribute('data-key');
    if (dataKey && dataKey === specialKeys[keyPressed]) {
      foundKey = key;
    }
  });

  if (foundKey) {
    foundKey.classList.add('active');
  }
});

document.addEventListener('keyup', (e) => {
  keys.forEach(key => {
    key.classList.remove('active');
  });
});

keys.forEach(key => {
  key.addEventListener('mousedown', () => {
    key.classList.add('active');
  });
  
  key.addEventListener('mouseup', () => {
    key.classList.remove('active');
  });
  
  key.addEventListener('mouseleave', () => {
    key.classList.remove('active');
  });
});