
import './App.css'

function App() {
  // Variables con información
  const nombre = "Daiana Costa"
  const profesion = "Desarrolladora Frontend"
  const edad = 27
  const ciudad = "Paysandú, Uruguay"
  const habilidades = ["React", "JavaScript", "CSS", "Git"]
  const disponible = true

  return (
    <div>
      <h1>Perfil Profesional</h1>

      <div>
        <h2>{nombre}</h2>
        <p><strong>Profesión:</strong> {profesion}</p>
        <p><strong>Edad:</strong> {edad} años</p>
        <p><strong>Ciudad:</strong> {ciudad}</p>

        <p>
          <strong>Estado:</strong> {disponible ? '✅ Disponible' : '❌ No disponible'}
        </p>

        <h3>Habilidades:</h3>
        <p>{habilidades[0]}, {habilidades[1]}, {habilidades[2]}</p>
      </div>
    </div>
  )
}

export default App

