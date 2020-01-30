function check_valid_puzzle() {
    let draft_board = new Array()
    let value_pos = new Array()
    let row = new Array()
    let flag = false
    for (let i of inp) {
        row.push(i.value)
        if (row.length == 9) {
            draft_board.push(row)
            row = new Array()
        }
    }

    for (let row in draft_board) {
        let pos = new Array()
        for (let cel in draft_board[row]) {
            pos = new Array()
            if (draft_board[row][cel] != 0) {
                pos.push(row)
                pos.push(cel)
                value_pos.push(pos)
            }
        }
    }
    for (let v of value_pos) {
        if (check_row(v, get_value_by_pos(v)) == true || check_col(v, get_value_by_pos(v)) || true && check_sub_group(v, get_value_by_pos(v)) == true) {
            flag = true
            break
        }
    }
    return flag
}