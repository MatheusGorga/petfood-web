import './styles.css'
import Header from '../../components/header'
import Product from '../../components/product/list'

const Checkout = () =>{
  return (
    <div className="h-100">
       <Header hideCart/> 
       <div className="container mt-3">
         <div  className="row">
            <div className="col-6">
                <span className=" d-inline-block  border-bottom border-success ">
                  Dados de entrega</span>
                <div className="row mb-3 mt-3">
                  <div className="col-12">
                    <input type="text" placeholder="CEP" className="form-control form-control-lg" /> 
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-8 ">
                    <input type="text" placeholder="Cidade" className="form-control form-control-lg" /> 
                  </div>
                  <div className="col-4 pl-0">
                    <input type="text" placeholder="UF" className="form-control form-control-lg" /> 
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-8 ">
                    <input type="text" placeholder="Logradouro" className="form-control form-control-lg" /> 
                  </div>
                  <div className="col-4 pl-0">
                    <input type="text" placeholder="Numero" className="form-control form-control-lg" /> 
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-6 ">
                    <input type="text" placeholder="Bairro" className="form-control form-control-lg" /> 
                  </div>
                  <div className="col-6 pl-0">
                    <input type="text" placeholder="Complemento" className="form-control form-control-lg" /> 
                  </div>
                </div>

                <span 
                className="d-inline-block mt-4  d-inline-block   border-bottom border-success "> 
                Dados de Pagamento </span>
                <div className="row mb-3">
                  <div className="col-12">
                    <input type="text" placeholder="Cartão de Credito" className="form-control form-control-lg mt-3" /> 
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-6 ">
                    <input type="text" placeholder="Validade" className="form-control form-control-lg" /> 
                  </div>
                  <div className="col-6 pl-0">
                    <input type="text" placeholder="CVV" className="form-control form-control-lg" /> 
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-6 ">
                    <input type="text" placeholder="Nome do Titular" className="form-control form-control-lg" /> 
                  </div>
                  <div className="col-6 pl-0">
                    <input type="text" placeholder="CPF/CNPJ do Titular" className="form-control form-control-lg" /> 
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12 d-flex justify-content-between align-itens-center">
                    <b>Total:</b>
                    <h3>R$30,00</h3>
                  </div>
                  <div className="col-12 ">
                  <button type="button" className="btn btn-success w-100 p-3" > Finalizar Pedido</button>
                  </div>
                </div>

            </div>
            
            <div className="col-6 ">
              <div className="box col mb-4 box-sidebar">
                <h5>Minha Sacola (itens)</h5>
                <div className="row products">

                    {[1,2,3,4,5,6,7,8,9].map( (p) => (<Product/>))}

                </div>   
              </div>
            </div>
         </div>
       </div>
    </div>
  )
}

export default Checkout