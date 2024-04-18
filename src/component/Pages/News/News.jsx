import style from './News.module.css';
import img from "./../../../img/progress.png";
const News = (props) => {
    return (
        <main className={style.main}>
            <img src={img} alt="" />
            <p>Наразі нових новин не має, поверніться пізніше</p>
           
            
        </main>
    )
}
export {News}