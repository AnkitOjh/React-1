import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constant";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    // console.log(params);

    useEffect(() => {
        const data = fetchMenu();
    },[]);
    const fetchMenu = async () =>
    {
        const res = await fetch(MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER");
        // console.log("sjdnd",data);
        const dataJson = await res.json();
        console.log("dataJson",dataJson.data);
        setResInfo(dataJson.data);
        console.log("resInfo",resInfo);
    }
    if(resInfo === null) return <Shimmer/>;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    console.log("itemCards", itemCards);
    const information = resInfo?.cards[0]?.card?.card?.info;
    const {name} = resInfo?.cards[0]?.card?.card?.info;
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3 className = "cuisines">{information?.cuisines.join(",")}</h3>
            <ul>
                {
                    itemCards.map((item) => (
                        <li>{item?.card.info.name} - {item.card.info.price}</li>
                    ))
                }
                <li>{itemCards[0].card.info.name}</li>
            </ul>
        </div>
    )

}

export default RestaurantMenu;