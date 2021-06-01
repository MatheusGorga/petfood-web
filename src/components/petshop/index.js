import './styles.css'

const Petshop = () => {
  return(
    <li className="petshop d-inline-block">
      <div className="d-inline-block">
            <img src={"https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png"} alt="Logo da Pet" className="img-fluid petshop-img" />
      </div>
          <div className="d-inline-block pl-3 align-bottom">
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
            <label className="badge badge-primary p-1"> Frete Grátis </label>
          </div>  
    </li>
  )
}

export default Petshop