let solve = document.getElementById('solve')
let blank_pos = new Array()

solve.addEventListener('click', () => {
    main()
})

function make_board() {
    for (let i of inp) {
        if (i.value == '') {
            i.value = 0
        }
    }
}

function main() {
    get_blank_space()
    make_board()
    for (let b = 0; b < blank_pos.length && b >= 0; b++) {
        let num = get_value_by_pos(blank_pos[b]) + 1
        while (num < 10) {
            if (check_row(blank_pos[b], num) == false && check_col(blank_pos[b], num) == false && check_sub_group(blank_pos[b], num) == false) {
                put_value_by_pos(blank_pos[b], num)
                break
            } else {
                num++
            }
        }
        if (num >= 10) {
            put_value_by_pos(blank_pos[b], 0)
            b = b - 2
        }
    }
}

function put_value_by_pos(pos, num) {
    let v = document.getElementsByName(`${pos[0]}${pos[1]}`)
    v[0].value = 0
    v[0].value = num
}

function get_value_by_pos(pos) {
    let v = document.getElementsByName(`${pos[0]}${pos[1]}`)
    return parseInt(v[0].value)
}

function check_row(pos, num) {
    for (let i of inp) {
        if (pos[0] == i.name[0] && i.value == num) {
            return true
        }
    }
    return false
}

function check_col(pos, num) {
    for (let i of inp) {
        if (pos[1] == i.name[1] && i.value == num) {
            return true
        }
    }
    return false
}

function check_sub_group(pos, num) {
    for (let i of inp) {
        if ((Math.floor(pos[0] / 3) == Math.floor(i.name[0] / 3)) && (Math.floor(pos[1] / 3) == Math.floor(i.name[1] / 3))) {
            if (i.value == num) {
                return true
            }
        }
    }
    return false
}

function get_blank_space() {
    blank_pos = new Array()
    for (let i of inp) {
        if (i.value == '') {
            let pos = new Array()
            pos.push(i.name[0])
            pos.push(i.name[1])
            blank_pos.push(pos)
        }
    }
}