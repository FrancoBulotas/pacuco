
import React, { useState } from 'react';


import '../../assets/styles/index.scss';

function HomeMaintenance() {  
    return (
<div className="maintenance-wrapper d-flex flex-column justify-content-center align-items-center min-vh-100">
      <div className="maintenance-card text-center p-4 p-md-5 shadow-sm rounded-4">
        {/* Logo */}
        <div className="mb-3">
          <img
            className="maintenance-logo"
            src="https://pacucostorage.blob.core.windows.net/common/logo-pacuco-bien-editado.ico"
            alt="Logo"
          />
        </div>

        {/* Título */}
        <p className="maintenance-status text-uppercase fw-semibold mb-2">
          <span className="maintenance-dot"></span>
          Mantenimiento en curso
        </p>

        <h1 className="h3 h1-md fw-semibold mb-3">
          Estamos haciendo unos ajustes en la tienda
        </h1>

        {/* Texto principal */}
        <p className="text-muted mb-4">
          En este momento estamos realizando tareas de mantenimiento para mejorar tu experiencia de compra.
          Volvemos a estar online en breve. Gracias por tu paciencia 🩷
        </p>

        <p className="text-muted small mb-0">
          Si necesitás algo urgente, escribinos a{' '}
          <a target='_blank' href="mailto:compras@pacuco.com.ar">
            compras@pacuco.com.ar
          </a>
          {/* Cambiá el mail por el tuyo */}
        </p>
      </div>

      <p className="small text-muted mt-3 mb-0">
        © {new Date().getFullYear()} Pacuco Guardapolvos
      </p>
      
    </div>
  )
}

export default HomeMaintenance
