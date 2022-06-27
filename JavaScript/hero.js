function hero(bullets, dragons){
    return 2*dragons <= bullets? true: false;
}
// Refactored solution
function hero(bullets, dragons){
    return bullets >= dragons * 2
}