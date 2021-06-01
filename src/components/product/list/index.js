import './styles.css'

const Product = () => {
  return (
      <div className="product-list col-12">
          <div className="row">
            <div className="col-3">
              <img src='https://www.petlove.com.br/images/products/210670/large/Ra%C3%A7%C3%A3o_Golden_Formula_Carne_e_Arroz_para_C%C3%A3es_Adultos_de_Ra%C3%A7as_Pequenas_-_1_Kg_1210469.jpg?1562146144' alt="Comida" className="img-fluid" />
            </div>
            <div className="col-6">
              <h6>
                <label className="badge p-1 mb-0 badge-primary"> R$ 30,00 </label>
              </h6>
              <small>
                <b> Nome do produto Nome do produtoNome do produtoNome do </b>
              </small>
            </div>
            <div className="col-3">
              <button className="btn btn-danger rounded-circle "> — </button>
            </div>
          </div>
      </div>
  )
}

export default Product
