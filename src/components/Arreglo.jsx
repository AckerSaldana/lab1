export default function Arreglo(){
    const arreglo = [1,2,3,4];
    console.log(arreglo);
    arreglo.push(5);
    console.log(arreglo);

    let arreglo2 = [...arreglo, 6];
    console.log(arreglo2);

    const doubles = arreglo2.map(function(i){
        return i * 2;
    })
    console.log(doubles);
}