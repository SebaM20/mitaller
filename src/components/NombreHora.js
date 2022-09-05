import React, {useState} from 'react';

export const NombreHora = () => {

    //let nombre = "Sebastian";

    const [nombre, setNombre] =useState("Sebastian")

const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre);
}

  return (
    <div>
        <h1>Punto 3</h1>

<p>Mi nombre es: <strong className={nombre.length >= 4 ? 'verde' : 'rojo'}> {nombre}</strong></p>

<input type="cambiar nombre" onChange={e => cambiarNombre(e.target.value)} placeholder></input>

<button onClick={e => {
    console.log("El valor guardado en tu estado es:", nombre)
}}>Mostarr Valor estado</button>

<br>
</br>

<h5>Inserte la Hora</h5>
<input type="text" />
<button type="Hora" > Ir </button>

    </div>

  )
}
