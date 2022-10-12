import styles from '../styles/Home.module.css'
const BotonAlerta = ({Url,Nombre}) => {
    return ( 
        <div className={styles.card}>
            <img src={Url}></img>
            <h2>{Nombre}</h2>
        </div>
     );
}
 
export default BotonAlerta;