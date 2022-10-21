let num = [5, 3, 2, 4, 1]
// num.sort() // sort coloca em ordem os numeros
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
for(let pos=0; pos<num.length; pos++) {
  console.log(num[pos])
}
let valores = [0, 2, 4, 6, 9]
for(let index=0; index < valores.length; index++) {
  console.log(`A posição ${index} tem o valor ${valores[index]} `)
}

let arra = [3, 5, 7, 9]
for(let i in arra) {
  console.log(`Posição ${i} tem o valor ${arra[i]} `)
}
let caba = arra.indexOf(2)
console.log(`O valor é ${caba}`)
