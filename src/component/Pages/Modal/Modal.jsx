import { useSelector } from "react-redux";
import style from './Modal.module.css';
import { NavLink } from "react-router-dom";

const Modal = () => {
    const state = useSelector(state => state.pages.modal)
    return (
        <main className={style.main}>
            {state.map(item => <div className={style.column}>
                <h2>{item.title}</h2>
                <section className={style.section}>
                    <div className={`img ${style.img}`}>
                        <img src={item.img} alt="" />
                    </div>
                    <div className={style.blok}><p>{item.text}</p>
                    <NavLink to={item.link} className={style.button}>Детальніше</NavLink>
                    </div>
                </section>
               
            </div>)}

        </main>
    )
}
export { Modal }