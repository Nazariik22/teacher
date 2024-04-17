import style from './Header.module.css'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import img from './../../img/1.png'
const Header = (props) => {
    const state = useSelector(state => state.header)
    return (
        <header className={style.header}>
            <div className={style.header_info}>
                <div className={`img ${style.img}`}><img src={img} alt='' /></div>
                <ul className={style.ul}>
                    {state.map(item => (
                        <li key={item.id}><NavLink to={item.link}>{item.text}</NavLink></li>
                    ))}
                </ul>
            </div>
        </header>
    )
}
export { Header }