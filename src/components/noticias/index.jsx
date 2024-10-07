
import { useInView } from "react-intersection-observer";
import Noticia1 from "../../assets/image/noticia1.png";
import Noticia2 from "../../assets/image/Noticia2.png";
import Noticia3 from "../../assets/image/Noticia3.png";
import Noticia4 from "../../assets/image/Noticia4.png";
import CardsNoticias from "./CardsNoticias";
import ImagemNoticia from "./ImagemNoticia";
import { useEffect, useState } from "react";

function Noticias() {

    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const cards = [
        { id: 0, data: '24 março 2023', descricao: 'A criação de um circuito de Fórmula E' },
        { id: 1, data: '30 junho 2024', descricao: 'Da Costa makes it three wins in a row after sensational Portland showdown ' },
        { id: 2, data: '24 julho 2024', descricao: 'Rowland pride at targets "more than met" after maiden home win' },
        { id: 3, data: '21 julho 2024', descricao: "Porsche's Pascal Wehrlein races through the drama to seal Formula E Drivers' World Championship..." },
    ];

    const noticias =[
        {id: 0, img: Noticia1, title: cards[0].descricao, path: 'https://www.fiaformulae.com/pt-br/news/17969'},
        {id: 1, img: Noticia2, title: cards[1].descricao, path: 'https://www.fiaformulae.com/pt-br/news/502496'},
        {id: 2, img: Noticia3, title: cards[2].descricao, path: 'https://www.fiaformulae.com/pt-br/news/504373'},
        {id: 3, img: Noticia4, title: cards[3].descricao, path: 'https://www.fiaformulae.com/pt-br/news/504132'},
    ]

    const [barWidth, setBarWidth] = useState(0);
    const [cardTarget, setCardTarget] = useState(0);

    useEffect(() => {
        let interval;
        if (inView) {
            console.log('Na tela');
            setBarWidth(0); 
            progressToNextCard();
            interval = setInterval(progressToNextCard, 10000);
        }
        return () => clearInterval(interval);
    }, [inView]);

    const progressToNextCard = () => {
        setBarWidth(100); 
        setTimeout(() => {
            setCardTarget((prev) => (prev + 1) % cards.length); 
            setBarWidth(0); 
        }, 9000); 
    };


    return ( 
        <div ref={ref} className="my-10 transition-all ease-in-out delay-1000">
            <div className="flex justify-between text-azulMahindra p-8">
                <h2 className="text-4xl font-extrabold">Notícias</h2>
                <a href="https://www.fiaformulae.com/pt-br/news" target="blank" className="border-azulMahindra border-3 px-10">Site de notícias oficial Fórmula E</a>
            </div>
            <ImagemNoticia
                img={noticias[cardTarget].img}
                title={noticias[cardTarget].title}
                path={noticias[cardTarget].path}
            />
            <CardsNoticias
                cards={cards}
                barWidth={barWidth}
                cardTarget={cardTarget}
            />
        </div>
     );
}

export default Noticias;