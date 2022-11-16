import { useState } from "react";

const Create = () => {
  const [product, setProduct] = useState({name:"",price:0})

  const handleChange = (e) => {
    const inputValue = e.target.value
    const inputName = e.target.name
    console.log({ inputName, inputValue })
    console.log({ product })
    setProduct({ ...product, [inputName]: inputValue })

  }
  console.log({ product })

  const handleClick = (e) => {
    e.preventDefault()
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct({name:"",price:0})
        console.log("Producto creado con exito")
      })
      .catch((err) => {
        console.log({ err })
      })
  }

  return (
    <>
      <div>
        <h1>CREAR NUEVO PRODUCTO</h1>
        <form action="">
          <input type="text" name="name" onChange={handleChange} value={product.name} />
          <input type="number" name="price" onChange={handleChange} value={product.price} />
          <button onClick={handleClick}>Crear producto </button>

        </form>
      </div>
      <style jsx>
        {`
        form{
          display:flex;
          flex-direction: column;
          width:20rem;
          margin: 0 auto;
        }
        h1{
          text-align:center;
          magin: 0 auto;
     
        }

        input{
          margin-bottom: 0.5rem;
        }
         `}
      </style>
    </>
  )
}

export default Create