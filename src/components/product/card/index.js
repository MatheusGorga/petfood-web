import './styles.css'

const Product = () =>{
  return (
    <div className="col-3" >  
      <div className="product" >
        <img src='https://www.petlove.com.br/images/products/210670/large/Ra%C3%A7%C3%A3o_Golden_Formula_Carne_e_Arroz_para_C%C3%A3es_Adultos_de_Ra%C3%A7as_Pequenas_-_1_Kg_1210469.jpg?1562146144' className="img-fluid align-center" alt="ração" />
        <button className="btn btn-primary rounded-circle">
          +
        </button>
        <h4>
          <label className="badge badge-primary">R$ 90,00</label>
        </h4>
        <small>
          <b>Nome do Produto</b>
          </small>
      </div>
    </div>
  )
}

export default Product