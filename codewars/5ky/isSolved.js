function isSolved(boardadam) {

    for (let i = 0; i < 3; i++) {
        if (boardadam[i][0] !== 0 && boardadam[i][0] === boardadam[i][1] && boardadam[i][1] === boardadam[i][2]) {
            return boardadam[i][0];
        }
    }

    for (let i = 0; i < 3; i++) {
        if (boardadam[0][i] !== 0 && boardadam[0][i] === boardadam[1][i] && boardadam[1][i] === boardadam[2][i]) {
            return boardadam[0][i];
        }
    }

    if (boardadam[0][0] !== 0 && boardadam[0][0] === boardadam[1][1] && boardadam[1][1] === boardadam[2][2]) {
        return boardadam[0][0];
    }
    if (boardadam[0][2] !== 0 && boardadam[0][2] === boardadam[1][1] && boardadam[1][1] === boardadam[2][0]) {
        return boardadam[0][2];
    }

    for (const row of boardadam) {
        if (row.includes(0)) {
            return -1;
        }
    }

    return 0;
}