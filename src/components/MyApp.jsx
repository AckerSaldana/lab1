
export  default function MyApp(){
    const nombre = 'Jorge';
    const apellido = 'Gonzalez';

    // const nombreCompleto = nombre + '' + apellido;

    const nombreCompleto = `${nombre} ${apellido}`;
    console.log(getSaludo(nombreCompleto));

  }

  function getSaludo(nombre){
    return 'Hola ' + nombre;
  }

  const saludo = function(nombre){
    return nombre;
  }

  const saludo2 = (nombre) => {
    return nombre;
  }

    const saludo3 = (nombre) => nombre;


