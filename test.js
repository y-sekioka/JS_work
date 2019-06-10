// 課題1,2{
var answer　=　prompt('数値を入力してください');
if(isNaN(answer)){
  alert('数値を入力してください');
} else if(answer >0){
  alert('正の数です');
} else if(answer <0){
  alert('負の数です');
} else if(answer==0){
  alert('存在しない数値です');
}
//課題1,2 }

//課題3,4,5{
var animals=['パンダ','ライオン','キリン'];
var i = 0;

var answer =prompt('ライオン？');
switch(answer){
 case 'ライオン':
  alert('[1]');
  break;
default:
 while(i<animals.length){
  alert(animals[i]);
  i++ ;}
}
//課題3,4,5 }

//課題6,7{
var animals_2 = [
  {'name':'パンダ','weight':80},
  {'name':'ライオン','weight':200},
  {'name':'キリン','weight':300}
];

var answer = prompt('パンダ？ライオン？キリン？')

if(answer=='パンダ'){
  alert(animals_2[0].weight+'(Kg)');
} else if(answer=='ライオン'){
  alert(animals_2[1].weight+'(Kg)');
} else if(answer=='キリン'){
  alert(animals_2[2].weight+'(Kg)');
}
//課題6,7 }

//課題8{
var x = prompt('円の半径を入力してください')
if(isNaN(x)){
  alert('数値を入力してください');
} else{
function calc(x) {
  return x * x * 3.14;
}
alert(calc(x));
//課題8 }
}
