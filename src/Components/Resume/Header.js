import './Resume.css';

function Header({fullName}) {
  return (
    <div className="template-header">
      <h1>{fullName}</h1>
    </div>
  )
}

export default Header;