import { useSelector } from "react-redux";
import style from './Publick.module.css'
const Publick = (props) => {
    const state = useSelector(state => state.pages.publick).reverse();
    console.log(state)
    return (
        <main className={style.publick}>
            <i>У закладі освіти функціонують гуртки для розвитку цифрових навичів учнів. Щоб  дізнатися детальніше перегляньте  модулі</i>
        {state.map(item =>
            <div key={item.id} className={style.big}>
                <h2>{item.info}</h2>
                <h3>{item.olimp.title}</h3>
                <ul>
                    <h4>ТГ</h4>
                    {item.olimp.text[0].map(element => {
                        return <li key={element}>{element}</li>; 
                    })}
                    <h4>Район</h4>
                    {item.olimp.text[1].map(element => {
                        return <li key={element}>{element}</li>; 
                    })}
                    <h4>Область</h4>
                    {item.olimp.text[2].map(element => {
                        return <li key={element}>{element}</li>; 
                    })}
                </ul>
                <h3>{item.man.title}</h3>
                <ul>
                    {item.man.text.map(element => {
                        return <li key={element}>{element}</li>; 
                    })}
                </ul>
            </div>
        )}
    </main>
    )
}
export { Publick }