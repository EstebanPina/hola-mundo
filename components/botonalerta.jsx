import styles from '../styles/Home.module.css'
const BotonAlerta = () => {
    return ( 
        <div>
            <button className={styles.button} type="button" onClick={()=>alert("Hola")}>Aqui hay una alerta</button>
        </div>
     );
}
 
export default BotonAlerta;