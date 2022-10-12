import Head from 'next/head'
import Image from 'next/image'
import BotonAlerta from '../components/botonalerta'
import styles from '../styles/Home.module.css'
const Mensajes=[
  {
    "urlImagen":"./images/icons8-apple-48.png",
    "NombreProducto":"Manzana"
  },
  {
    "urlImagen":"./images/icons8-bagel-48.png",
    "NombreProducto":"Bagel"
  },
  {
    "urlImagen":"./images/icons8-meat-16.png",
    "NombreProducto":"Carne"
  }

]
export default function Home() {
  return (
    <div>
      <h1>Hola mundo</h1>
      {Mensajes.map(elementos=>(
        <BotonAlerta Nombre={elementos.NombreProducto} Url={elementos.urlImagen} key={elementos}></BotonAlerta>
        )
      )}
    </div>
  )
}
