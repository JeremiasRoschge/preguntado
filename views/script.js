document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('click', function(e) {
        const respuestaElegida = e.target.innerText;

        fetch('http://localhost:3000/salud', {

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            method: "POST",
            body: JSON.stringify({ respuestaElegida })
        }).then(res => res.json)
        .then(data => {
            console.log(data)
        })
    })
})