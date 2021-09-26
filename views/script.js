document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('click', function(e) {
        const respuestaElegida = e.target.innerText;

        fetch('http://localhost:3000/salud', {
            method: "POST",
            body: {respuestaElegida: respuestaElegida}
        }).then(res => res.json())
        .then(data => {
            console.log(data)
        })

    })
})
