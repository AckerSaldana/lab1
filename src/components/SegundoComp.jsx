
export default function SegundoComp(){
    const estudiante = {
        matricula: '123456',
        nombre: 'Jorge',
        edad: 55,
    };

    console.log(estudiante);

    const estudiante2 = {...estudiante};
    estudiante2.matricula = '654321';
    estudiante2.nombre = 'Pepe';
    estudiante2.edad = 1000;
    console.log(estudiante2);
}
