
export const PerfilPage = () => {
    return (
      <div className="portada" style={containerStyle}>
        <img src="/fotomia.jpg" alt="Tu cara" style={imageStyle} />
        <h1>Eduardo Morales</h1>
        <p>Desarrollador de software apasionado por la creación de soluciones innovadoras y eficientes. Con experiencia en desarrollo web y móvil utilizando tecnologías como React, Node.js y React Native.</p>
      </div>
    );
  };
  
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: '40px',
    borderRadius: '8px',
    maxWidth: '600px',
    margin: 'auto',
  };
  
  const imageStyle = {
    width: '200px',
    borderRadius: '50%',
    marginBottom: '20px',
  };
  
  
