import './styles.css'
import Dock from 'react-dock'
import {useEffect, useState} from 'react'
import Product from '../product/list'


const Sidebar = () => {
  const [opened, setOpened] = useState (false)
  
  useEffect( () => {
    window.addEventListener('openCart', () => {
      console.log('deu ruim')
      setOpened(true)
    })
  },[])

  return(
    <Dock
      isVisible={opened}
      onVisibleChange={(visible) => {
        setOpened(visible)
      }}
      position='right'
    >
        <div className='container-fluid  h-100 pt-4 sidebar'>
            <h5>Minha Sacola (5)</h5>
            <div className='row products' >
            {[1,2,3,4,5,6,7,8,9,10,11,12].map( (p) => (<Product/>))}
            </div>
            
            <div className='row footer align-itens-end'>
                <div className="mt-4 col-12 d-flex justify-content-between align-itens-center">
                    <h4 className='d-inline-block'>Total</h4>
                    <h3 className='d-inline-block'>R$ 90,00</h3>
                </div>
                <button className="btn btn-block  btn-primary rounded-0 p-3 align-itens-center  botao">Finalizar Compra </button>
            </div>
        </div>
    </Dock>
  )
}

export default Sidebar