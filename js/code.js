let inp = document.querySelectorAll('.form-control')
let clear = document.getElementById('clear')

clear.addEventListener('click', () => {
    for (let i of inp) {
        i.value = ''
    }
})

for (let i of inp) {
    i.addEventListener('input', (e) => {
        var value = parseInt(e.data)
        if (isNaN(value)) {
            e.target.value = ''
        }
    })
}