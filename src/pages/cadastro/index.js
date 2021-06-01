
import Ilustation from '../../assets/illustration.png'
import Header from '../../components/header';

const Cadastro = () => {
return(
  <div className="container-fluid h-100 bg-app" >
      <Header whiteVersion hideCart/>
    <div className="row">

    <section className="col-6 text-right my-auto">
      <img src={Ilustation} alt="Ilustração" className="img-fluid" />
      </section>
      <section className="col-6">
          <div className="box col-9">
                <h2 className="text-center mb-5">Falta pouco para fazer o seu pet feliz</h2>
                <input type="text" 
                className="form-control form-control-lg mb-3" 
                placeholder="Nome Completo" />
                <input type="email" 
                className="form-control form-control-lg mb-3" 
                placeholder="E-mail" />
                <input type="text" 
                className="form-control form-control-lg mb-3" 
                placeholder="Telefone"/>
                <input type="text" 
                className="form-control form-control-lg mb-3 " 
                placeholder="CPF"/>
                <input type="date" 
                className="form-control form-control-lg mb-3" 
                placeholder="Telefone"/>
                
                <button className="btn btn-lg btn-block btn-secondary">
                  Finalizar Pedido
                </button>

          </div>
      </section>
  
    </div>

  </div>
)
}
export default Cadastro;