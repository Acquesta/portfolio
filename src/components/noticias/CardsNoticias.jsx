import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import Card from "./Card";

function CardsNoticias({ cards, barWidth, cardTarget, ref}) {

    return (
        <>
            <div ref={ref} className="mx-8 mt-[-70px] flex gap-4">
                {cards.map((card) => (
                    <Card 
                        key={card.id}
                        data={card.data}
                        descricao={card.descricao}
                        target={card.id === cardTarget}
                        barWidth={barWidth}
                    />
                ))}
            </div>
        </>
    );
}

export default CardsNoticias;
