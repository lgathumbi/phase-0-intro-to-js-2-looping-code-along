// Code your solutions in this file
function writeCards(names, event) {
    return names.map(names => `Thank you, ${names}, for the wonderful ${event} gift!`)
}
function countDown(num) {
    while (num>=0) {
        console.log(num);
        num--;
    }
}