export function setupCounter(element) {
  let counter = 0;

  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };

  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}

document.addEventListener('DOMContentLoaded', () => {
  var enlaces = document.querySelectorAll('.box ul li a');
  enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function (event) {
      event.preventDefault();
      console.log('Se hizo clic en el enlace:', enlace.textContent);
    });
  });
});