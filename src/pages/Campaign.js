import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Card = (props) => {
    const { user: tradeCard } = props;

    return (
        <div>
            <div>Image ID: {tradeCard.id}</div>
            <div>Image Link: <a href={tradeCard.frontimage_thumbnail}>{tradeCard.frontimage_thumbnail}</a></div>
            <div>Video Link: <a href={tradeCard.frontimage}>{tradeCard.frontimage}</a></div>
            <div>Star/Rarity: {tradeCard.rarity}</div>
            <img src={tradeCard.frontimage_thumbnail} />
            <hr />
        </div>
    );
};

export default function Campaign() {

    const { id } = useParams();

    const [tradeCards, setTradeCards] = useState([]);

    useEffect(() => {
        const url = `https://api-helloproject.orical.jp/cardpacks/${id}`;

        console.log(url)

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                // const { results } = json;
                // Only put the results in state, ie, the actual users array
                setTradeCards(json.cards);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {tradeCards.map((tradeCard) => (
                <Card key={tradeCard.id} user={tradeCard} />
            ))}
        </div>
    );
}
