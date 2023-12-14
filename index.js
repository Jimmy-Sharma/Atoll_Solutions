const encodeinput = "UTS";

function encode(input) {
    const linear = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const ans = [];

    for (let i = 0; i < input.length; i++) {
        let left = 0;
        let right = linear.length - 1;

        while (left < right) {
            if (input[i] == linear[left] && (left + 1) % 2 == 0) {
                ans.push(input[i], linear[25 - left])
                break;
            } else if (input[i] == linear[left] && (left + 1) % 2 == 1) {
                ans.push(linear[25 - left])
                break;
            } else if (input[i] == linear[right] && (right + 1) % 2 == 0) {
                ans.push(input[i], linear[25 - right])
                break;
            } else if (input[i] == linear[right] && (right + 1) % 2 == 1) {
                ans.push(linear[25 - right])
                break;
            } else {
                left++;
                right--;
            }
        }
    }
    console.log(ans.join(""))
}
encode(encodeinput)


const decodeinput = "ZBYX"

function deencode(input) {
    const linear = "@ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const ans = [];

    for (let i = 0; i < input.length; i++) {
        console.log(i, input[i], linear.length - 1)
        for (let j = 1; j < linear.length; j++) {
            if (input[i] == linear[j] && j % 2 == 1) {
                ans.push(linear[26 - j]);
                break;
            } else if (input[i] == linear[j] && (j % 2 == 0 && input[i + 1] == linear[27 - j])) {
                ans.push(linear[j]);
                console.log(i, j, input[i + 1], linear[27 - j])
                i++;
                break;
            } else if (input[i] == linear[j] && (j % 2 == 0)) {
                ans.push(linear[27 - j]);
                console.log(i, j)
                break;
            }
        }
    }
    console.log(ans.join(""))
}
deencode(decodeinput)