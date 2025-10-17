import React from 'react';
import './App.css';

function App() {
  const nombre = "Daiana Costa";
  const profesion = "Desarrolladora Frontend";
  const edad = 27;
  const ciudad = "Paysandú, Uruguay";
  const habilidades = ["React", "JavaScript", "CSS", "Git"];
  const disponible = true;

  return (
    <div className="fondo">
      <div className="tarjeta">
        
        {/* Parte superior de la tarjeta */}
        <div className="header">
          <div className="avatar">
            DC
          </div>
          <h2>{nombre}</h2>
          <p>{profesion}</p>
        </div>

        {/* Contenido de la tarjeta */}
        <div className="contenido">
          
          {/* Estado disponible/no disponible */}
          <div className="estado">
            {disponible ? '✅ Disponible' : '❌ No disponible'}
          </div>

          {/* Información personal */}
          <div className="info">
            <p>🎂 <strong>Edad:</strong> {edad} años</p>
            <p>📍 <strong>Ciudad:</strong> {ciudad}</p>
          </div>

          {/* Habilidades */}
          <div className="habilidades">
            <h3>💼 Habilidades</h3>
            <div className="tags">
              {habilidades.map((habilidad, index) => (
                <span key={index} className="tag">
                  {habilidad}
                </span>
              ))}
            </div>
          </div>

          {/* Botón */}
          <button className="boton">
            Contactar
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
