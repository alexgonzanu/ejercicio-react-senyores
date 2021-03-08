
function App() {
  const senyores = [
    {
      id: 1,
      nombre: "El Fary",
      profesion: "Influencer",
      foto: "fary.jpg",
      estado: "R.I.P.",
      twitter: "Pendiente",
      marcado: true
    },
    {
      id: 2,
      nombre: "Julio Iglesias",
      profesion: "Youtuber",
      foto: "julio.jpg",
      estado: "Vivo",
      twitter: "@JulyChurchs",
      marcado: false
    },
    {
      id: 3,
      nombre: "Bertín Osborne",
      profesion: "Java Developer",
      foto: "bertin.jpg",
      estado: "Vivo",
      twitter: "@BertinOsborne",
      marcado: true
    }
  ];
  return (
    <div className="contenedor">
      <header className="cabecera">
        <h1>Señores que te apuntan con el dedo</h1>
        <p className="totales"><span className="nmarcados">0</span> señores que te apuntan con el dedo marcados</p>
        <a className="accion-marcar" href="marcar-todos">Marcar todos</a>
      </header>
      <main>
        {
          senyores.map(senyor =>
            <article className="senyor">
              <div className="avatar">
                <img src={`./img/${senyor.foto}`} alt={`${senyor.nombre} señalandote con el dedo`} />
                <span class="inicial">F</span>
              </div>
              <div className="info">
                <h2>{senyor.nombre}</h2>
                <ul>
                  <li><span class="etiqueta">Profesión:</span>{senyor.profesion}</li>
                  <li><span class="etiqueta">Estado:</span> {senyor.estado}</li>
                  <li><span class="etiqueta">Twitter:</span> {senyor.twitter}</li>
                </ul>
              </div>
              <i class="icono fas fa-check"></i>
            </article>)
        }
      </main>
    </div >
  );
}

export default App;
