import "./InternetCard.scss"
export default function InternetCard({titulo, url}) {
  return (
    
<div className="blog-card">
    <div className="meta">
      <div className="photo" style={{backgroundImage:`url(${url})`}}></div>
      
    </div>
    <div className="description">
      <h1>Learning to Code</h1>
      <h2>{titulo}</h2>
      <p> s! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p className="read-more">
        <a href="#">Contacto</a>
      </p>
    </div>
  </div>
  );
}
