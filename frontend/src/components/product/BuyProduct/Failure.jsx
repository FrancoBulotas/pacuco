

const Failure = () => {
  return (
    <div className="failure-page">
      {/* Título */}
      <h1 className="failure-title">¡Ocurrio un error!</h1>

      {/* Mensaje de error */}
      <p className="failure-message">
        Lamentamos informarte que la compra no se pudo completar. Por favor, intenta nuevamente más tarde.
      </p>

      {/* Botón para regresar al inicio */}
      <button className="btn btn-dark" onClick={() => window.location.href = '/'}>
        Volver al Inicio
      </button>
    </div>
  );
};

export default Failure;