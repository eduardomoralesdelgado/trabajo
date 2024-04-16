
export const PortafolioPage = () => {
  return (
    <div className="portada" style={containerStyle}>
    <img src="/trabajo.jpg" alt="trabajo"/>
    <h1>Proyecto de Sitio Web Interactivo</h1>
    <p>Este proyecto consistió en el desarrollo de un sitio web interactivo para una empresa ficticia llamada "Tech Solutions". El sitio web incluye características como navegación suave, animaciones interactivas y formularios de contacto.</p>
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