import './App.css'
import Progress from './components/Progress';
import { Colors } from './constants/Colors';

function App() {

  const cursos = [
    {
      name: 'Curso Python',
      videos: 79,
      vistos: 3,
      colorPrimary: Colors.pythonPrimary,
      colorSecondary: Colors.pythonSecondary,
    },
    {
      name: 'Curso API-REST con TS y Express',
      videos: 6,
      vistos: 0,
      colorPrimary: Colors.expressPrimary,
      colorSecondary: Colors.expressSecondary,
    },
    {
      name: 'Curso Angular',
      videos: 46,
      vistos: 0,
      colorPrimary: Colors.angularPrimary,
      colorSecondary: Colors.angularSecondary,
    },
    {
      name: 'Curso React Native',
      videos: 383,
      vistos: 4,
      colorPrimary: Colors.reactPrimary,
      colorSecondary: Colors.reactSecondary,
    },
    {
      name: 'Curso Dart Flutter',
      videos: 95,
      vistos: 0,
      colorPrimary: Colors.dartPrimary,
      colorSecondary: Colors.dartSecondary,
    },
    {
      name: 'Curso IA',
      videos: 10,
      vistos: 0,
      colorPrimary: Colors.pythonSecondary,
      colorSecondary: Colors.pythonPrimary,
    },
  ]

  localStorage.setItem('cursos', JSON.stringify(cursos));
  const miObjetoAlmacenado = localStorage.getItem('cursos');
  const miObjeto = JSON.parse(miObjetoAlmacenado ?? '');
  console.log(miObjeto)

  return (
    <div className="App">
      <h1>PROGRESS 2023</h1>
      
      {cursos.map((curso,index)=>
      <Progress 
        key={index}
        name={curso.name}
        videos={curso.videos}
        colorPrimary={curso.colorPrimary}
        colorSecondary={curso.colorSecondary}
        watched={curso.vistos}
      />)}
    </div>
  )
}

export default App
