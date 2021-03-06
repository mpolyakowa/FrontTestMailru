export default function Numbers(props) {
  const warns = [];
  const { mask } = props;
  function onKeyPress(event) {
    const { target } = event;
    const warning = document.getElementById('warning');
    const oldStyle = event.target.style;
    if (event.keyCode !== 13) {
      target.value = event.key;
    }
    if (!event.key.match(/[0-9]/)) {
      target.style.border = '1px rgb(255, 0, 0) solid';
      if (!warns.includes(target.id)) {
        warns.push(target.id);
      }
      warning.style.opacity = 1;
    } else {
      target.style = oldStyle;
      if (warns.includes(target.id)) {
        const idx = warns.indexOf(target.id);
        warns.splice(idx, 1);
      }
    }
    if (warns.length === 0) {
      warning.style.opacity = 0;
    }
  }
  const container = document.getElementById('container');
  const elems = mask.split('');
  let len = 0;
  for (let i = 0; i < elems.length; i += 1) {
    const x = elems[i];
    const block = document.createElement('div');
    if (x.match(/\d/)) {
      if (container) {
        block.setAttribute('class', 'greyField');
        block.innerHTML += x;
        container.appendChild(block);
      }
      len += 1;
    } else if (x === 'I') {
      if (container) {
        block.setAttribute('class', 'whiteField');
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', '_');
        input.setAttribute('maxlength', '1');
        input.setAttribute('value', '');
        input.setAttribute('id', i.toString());
        block.appendChild(input);
        container.appendChild(block);
      }
      len += 1;
    } else if (x === 'X') {
      if (container) {
        block.setAttribute('class', 'greyField');
        block.innerHTML += 'X';
        container.appendChild(block);
      }
      len += 1;
    } else if (x === '*') {
      if (container) {
        block.setAttribute('class', 'greyField');
        block.innerHTML += '•';
        container.appendChild(block);
      }
      len += 1;
    } else if (container) {
      container.innerHTML += x;
    }
  }
  const warning = document.createElement('div');
  warning.setAttribute('id', 'warning');
  warning.count = '';
  warning.innerHTML = 'Неверный номер, попробуйте еще раз';
  document.body.appendChild(warning);
  const fields = document.getElementsByTagName('input');
  for (let i = 0; i < fields.length; i += 1) {
    fields[i].onkeypress = onKeyPress;
  }
  if (len !== 11) {
    if (container) {
      container.style.opacity = 0;
      warning.innerHTML = 'Маска некорректна';
      warning.style.opacity = 1;
    }
    return false;
  }
  return true;
}