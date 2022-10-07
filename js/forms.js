const handleSubmit = (event) => {
    event.preventDefault();

    const Nome = document.querySelector('input[name=name]').value;
    const Email = document.querySelector('input[name=email]').value;

    fetch('https://api.sheetmonkey.io/form/rrdaFboJrp4SBLrGLpM98V', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Nome, Email }),
    }).then(() => location.href = "subSuccess.html");
}

document.querySelector('form').addEventListener('submit', handleSubmit);