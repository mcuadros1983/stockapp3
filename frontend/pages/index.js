import { useState, useEffect } from "react";


const initialState = { name: "", price: 0 }

export default function Home() {

  const [product, setProduct] = useState(initialState)
  const [products, setProducts] = useState([])

  const handleChange = (e) => {
    const inputValue = e.target.value
    const inputName = e.target.name
    // console.log({ inputName, inputValue })
    // console.log({ product })
    setProduct({ ...product, [inputName]: inputValue })

  }
  // console.log({ product })

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      })
      // .then((res) => res.json())
      const data = await res.json()
      setProduct(initialState)
      console.log({ data  })
      const newProducts = [data.product, ...products]
      setProducts(newProducts)
      // fetchProducts()
      // console.log("Producto creado con exito")
    } catch (error) {
      console.log({ error })
    }



  }

  const fetchProducts = () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`)
      .then((res) => res.json())
      .then(({ products }) => { //la promesa nos devuelve un objeto que es el arreglo de datos que viene de la base
        // console.log(products)
        setProducts(products)
      })
  }

  useEffect(() => {
    fetchProducts()
  }, [])



  return (
    <>
      <div className="container df jcsb ">
        <div className="df fdc">
          <h2 style={{ margin: "0.3rem" }}>CREAR NUEVO PRODUCTO</h2>
          <form action="">
            <input type="text" name="name" onChange={handleChange} value={product.name} className="onone" />
            <input type="number" name="price" onChange={handleChange} value={product.price} className="onone" />
            <button onClick={handleClick} className="cursorp">Crear producto </button>

          </form>
        </div>
        <div className="products-container">
          {products.map(({ _id, name, price }) => (
            <div className="product db aic jcsb p5 mb5 br5" key={_id}>
              <span>{name}</span>
              <span>{price}</span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>
        {`
        form{
          display:flex;
          flex-direction: column;
          width:20rem;
          margin: 0 auto;
        }

        .onone{
          outline:none;
        }

        .cursorp{
          cursor:pointer;
        }

        h1{
          text-align:center;
          magin: 0 auto;
     
        }

        input{
          margin-bottom: 0.5rem;
        }
        
        .container{
          background-color:white;
          width:50rem;
          margin:0 auto;
          border-radius: 0.5rem;
          padding: 1rem;
        }
        .df{
          display:flex
        }

        .p5{
          padding: 0.5rem;
          
        }

        .br5{
          border-radius:0.5rem;
        
        }

        .mb5{
          margin-bottom:0.5rem;
        }

        .product{
          box-shadow:2px 4px 6px rgba(0,0,0,0.1)
        }
        .fdc{
          flex-direction: column;
        }

        .aic{
          align-items: center;
        }

        .jcc{
          justify-content:center;
        }

        .jcsb{
          justify-content:space-between;
        }
        .products-container{
          overflow:hidden;
          overflow-y: auto;
          max-height: 20rem;
          padding:0.5rem;
        }

        input{
          padding:0.5rem 0.75rem;
          border:1px solid lightgrey;
          border-radius:0.5rem;
        }

        button{
          padding:0.5rem 0.75rem;
          border-radius:0.5rem;
          border:none;
          background-color:rgba()

        }
         `}
      </style>
    </>
  )
}
