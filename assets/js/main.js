document.addEventListener('DOMContentLoaded', function (event) {
  console.log('Hello world!');

  $form = document.querySelector('#test-form');
  $form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    document.querySelector('#output').innerText = JSON.stringify(data, null, 2);
  })
});
