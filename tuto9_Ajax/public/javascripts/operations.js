const form = document.getElementById('form');
const resultParagraph = document.getElementById('result');

form.addEventListener('submit', event => {

    event.preventDefault();

    let jsonInput = serializeForm(form);

    fetch('/operations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonInput)
    })
        .then(response => response.json())
        .then(json => {
            resultParagraph.textContent = json.result;
        });
});

var serializeForm = function (form) {
    var json = {};
    var formData = new FormData(form);
    console.log(formData);
    for (var key of formData.keys()) {
        json[key] = formData.get(key);
    }
    return json;
};