import LogoWhite from '../../assets/logo-white.png'
import Logo from '../../assets/logo.png'
import './styles.css'

const Header = ({whiteVersion, hideCart}) =>{

  const openDrawer = () => {
    const event = new CustomEvent('openCart');
    window.dispatchEvent(event);
  }

  return(
    <div className="col-12">

      <header className="p-5 text-center">
        <img 
        className="img-fluid"
        src={whiteVersion ? LogoWhite : Logo} 
        alt="Imagem da Logo"   />
      </header>
      {!hideCart && (<button 
       onClick={() => openDrawer()}
       className="btn btn-secondary cart-button">
        <span className="mdi mdi-cart" ></span>
        2 Itens
      </button>)}
    </div>
  )
}

export default Header;