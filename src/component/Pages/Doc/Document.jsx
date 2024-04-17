import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from './Doc.module.css';

const Document = (props) => {
    const url = Number(useParams().document);
    console.log(url)
    const state = useSelector(state => state.pages.doc[url])
    return (
        <main className={style.document}>
            <h2>{state.title}</h2>
            <p>{state.text}</p>
            <iframe src={state.link} frameborder="0"
                 allowfullscreen title="-_-"></iframe>
        </main>
    )
}
export { Document }