import './App.css';
import { Aleatorios } from './components/Aleatorios';
import { Alumno } from './components/Alumno';
import { Alumno2 } from './components/Alumno2';
import { FilaColum } from './components/FilaColum';
import { Hora } from './components/Hora';
import { Imprimir } from './components/Imprimir';
import { Matriz } from './components/Matriz';
import { NombreHora } from './components/NombreHora';
import { NuevoNumero } from './components/NuevoNumero';
import { Pagar } from './components/Pagar';
import { RecibaNumeros } from './components/RecibaNumeros';
import { Salario } from './components/Salario';

function App() {
  return ( 
    <div className="App">
      <header className="App-header">
        <h1>Para empezar solo el 3 funcionad</h1>
        <br>
        </br>

<Hora></Hora>

<Pagar></Pagar>

<NombreHora></NombreHora>

<RecibaNumeros></RecibaNumeros>

<NuevoNumero></NuevoNumero>

<Imprimir></Imprimir>

<Salario></Salario>

<Aleatorios></Aleatorios>

<FilaColum></FilaColum>

<Matriz></Matriz>

<Alumno></Alumno>

<Alumno2></Alumno2>


      </header>
    </div>
  );
}

export default App;
