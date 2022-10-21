function parimpar(n){
  if (n % 2 === 0)
  return 'Par!'
  else {
    return 'Impar!'
  }
}
let res = parimpar(11)
console.log(res)
function soma(n1, n2) {
  return n1 + n2
}
let resu = soma(2, 7)
console.log(resu)

function fatorial(n) {
  if (n === 1) {
    return 1
  } else {
    return n * fatorial(n-1)
  }
}
console.log(fatorial(5))