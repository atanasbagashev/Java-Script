var findMissing = function (list) {
    let commonDiff = (list[list.length - 1] - list[0]) / list.length;

    for (let i = 0; i < list.length - 1; i++) {
        if (list[i + 1] - list[i] !== commonDiff) {
            console.log(list[i] + commonDiff);
            return;
        }
    }
}

findMissing([4, 5, 6, 7, 8, 9, 11, 12, 13]);
