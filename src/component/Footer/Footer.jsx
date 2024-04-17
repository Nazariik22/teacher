import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from './Footer.module.css';
import img1 from './../../img/footer/1.png';
import img2 from './../../img/footer/2.png';
import img3 from './../../img/footer/3.webp';
import img4 from './../../img/footer/4.png';
const Footer = (props) => {
    const state = useSelector(state => state.footer);
    const listImg = [img1, img3, img2, img4]
    return (
        <footer>
        <div className={style.contact}>
            {state.map((item, index) => (
                <Link to={item.link} key={item.id}>
                    <img src={listImg[index]} alt='' />
                </Link>
            ))}
        </div>
        <p>Усі права захищені &#169;</p>
    </footer>
    )
}
export { Footer }