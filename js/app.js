function generate() {
var numbers = [];
for(var i=0; i<6; i++) {
numbers.push(Math.floor(Math.random() * 45)+1);
}
return numbers;
}
/* 배열 안에 있는 번호가 포함 되어 있는지 확인 */
