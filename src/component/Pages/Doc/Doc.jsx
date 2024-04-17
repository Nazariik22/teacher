import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import style from './Doc.module.css';
const Doc = (props) => {
    
    const state = useSelector(state => state.pages.doc)
    return (
        <main className={style.doc}>
            <h2>На сайті ви можете ознайомитися з актуальною документацією:</h2>
            <ul>
                {state.map((item, index) => <li><NavLink to={`/doc/${index}`}>{item.title}</NavLink></li>)}
            </ul>
        </main>
    )
}
export { Doc }