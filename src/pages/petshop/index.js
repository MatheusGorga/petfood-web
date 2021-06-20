import './styles.css'
import Header from '../../components/header'
import Product from '../../components/product/card'

const Petshop = () => {
  return (
    <div className="h-100 ">
      <Header/>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src={"https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png"} alt="Logo da Pet" className="img-fluid mb-2 petshop-img" />
            <b >Petlove</b>
            <div className="info-pet">  
            <span className="mdi mdi-star"></span>
              <text>
                <b>4,0</b>
              </text>
              <span className="mdi mdi-cash-usd-outline"></span>
              <text> $$$ </text>
              <span className="mdi mdi-crosshairs-gps" ></span>
              <text>2,9</text>
            </div>
            <label className="badge badge-primary p-2"> Frete Grátis </label>
          </div>
          <div className="col-10">
            <h4 >Produtos</h4>
            <hr />
            <div className="row">
              {[1,2,3,4,5,6,7,8,9,10].map(p => <Product/> )}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Petshop;