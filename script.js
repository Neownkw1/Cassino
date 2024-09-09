let valor = Number(window.prompt("qual o valor da aposta apostas apatir de 1 real ate 50 reais"))
while(valor<0 || valor>50){
valor = Number(window.prompt("qual o valor da aposta apostas apatir de 1 real ate 50 reais"))
}
//um pequeno sistema para fazer voce nao pode aposta muito dinheiro e nem dinheiro negativo
let c1 = Math.random()*100
let c2 = Math.random()*100
let c3 = Math.random()*100
c1 = Number(c1.toFixed(0))
c2 = Number(c2.toFixed(0))
c3 = Number(c3.toFixed(0))
//literalmente o coraçao do codigo ele q gera os numeros aleatorios para fazer o codogo funcionar 
let res = c1+c2+c3
if(res>300){
  console.log("voce ganhou o premio maximo ")
}else if (res>200){
  bonus= (20/100)*20
}else if(res>100 && res<199){
  bonus=20/100*10 
}else{
  bonus = 0
}
//toda essa parte e responsavel por calcular oa bonus q vao ser somados ao premio final //vao ter 6 recompesas q por enquanto vao ser os numeros do um ate o seis 
let p1,p2,p3
if(c1<20){
  p1 = 0
}else if(c1>=21 && c1<40){
  p1=1
}else if(c1>=41 && c1<60){
  p1=2
}else if(c1>=61 && c1<80){
  p1=3
}else if(c1>=81 && c1<99){
  p1=4
}else if(c1>=99){
  p1=5
}

if(c2<=20){
  p2 = 0
}else if(c2>=21 && c2<40){
  p2=2
}else if(c2>=41 && c2<60){
  p2=3
}else if(c2>=61 && c2<80){
  p2=4
}else if(c2>=81 && c2<99){
  p2=4
}else if(c2>=99){
  p2=5
}

if(c3<=20){
  p3 = 0
}else if(c3>=21 && c3<40){
  p3=1
}else if(c3>=41 && c3<60){
  p3=2
}else if(c3>=61 && c3<80){
  p3=3
}else if(c3>=81 && c3<99){
  p3=4
}else if(c3>=99){
  p3=5
}
let d=Math.random()*100
let cdg=Number(d.toFixed(0))
if(cdg>=30){
  console.log("voce nao ganhou nada")
}else{
console.log(`voce ganhou ${(p1+p2+p3+bonus)*(valor/4)} reais`)
}