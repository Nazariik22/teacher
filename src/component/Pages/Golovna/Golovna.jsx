import logo from './../../../img/golova/1.jpg';

import img1 from './../../../img/golova/1.png';
import img11 from './../../../img/golova/1_1.png';
import img12 from './../../../img/golova/1_2.png';
import img13 from './../../../img/golova/1_3.png';
import img21 from './../../../img/golova/2_1.png';
import img22 from './../../../img/golova/2_2.png';
import img23 from './../../../img/golova/2_3.png';
import img24 from './../../../img/golova/2_4.png';
import img31 from './../../../img/golova/3_1.png';
import img32 from './../../../img/golova/3_2.png';
import img33 from './../../../img/golova/3_3.png';
import img4 from './../../../img/golova/4.png';
import img41 from './../../../img/golova/4_1.png';
import img42 from './../../../img/golova/4_2.png';
import img5 from './../../../img/golova/5.png';
import img51 from './../../../img/golova/5_1.png';
import img52 from './../../../img/golova/5_2.png';
import img53 from './../../../img/golova/5_3.png';
import img54 from './../../../img/golova/5_4.png';
import { useSelector } from 'react-redux';
import style from './Golovna.module.css';
const Golovna = () => {
    const data = [
        [img5, img51, img52, img53, img54],
        [img1, img11, img12, img13],
        [img21, img22, img23, img24],
        [img31, img32, img33],
        [img4, img41, img42],
       ];
    const state = useSelector(state => state.pages.golova);
    return (
        <main className={style.main}>
            <div className={style.h2}>
                <h2>Вітаю на сайті вчителя </h2>
                <h1>Крутяк Назарій Олегович</h1>
            </div>
            <section className={style.section}>
                <div className={`img ${style.img}`}>
                    <img src={logo} alt="" />
                </div>
                <ul>
                    {state.info.map(item =>
                        <li>{item}</li>
                    )}
                </ul>
            </section>
            <section className={style.section2}>
                <h2>Мета педагогічної діяльності:</h2>
                <hr />
                <ul className="flex">
                    {state.meta.map(item =>
                        <li>{item} </li>
                    )}
                </ul>
            </section>
            <section className={style.section3}>
                <h2>Перелік компетентностей:</h2>
                <hr />
                <ul>
                    {state.kompetention.map(item =>
                        <li>{item}</li>
                    )}
                </ul>
            </section>
            <section className={style.section4}>
                <h2>Сфери інтересів:</h2>
                <hr />
                {state.interes.map((item, index) =>
                    <>
                        <h3>{item}</h3>
                        <div  className={style.flex_wrap}>
                            {data[index].map(item =>
                                <div className={`img ${style.img}`}>
                                    <img src={item} alt='' />
                                </div>)}
                        </div>
                    </>
                )}
            </section>
        </main>
    )
}
export { Golovna }