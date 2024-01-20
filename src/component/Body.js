import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resObj);
    let filteredRestaurant = [];
    const filterRestaurant = () => {
        setListOfRestaurants(listOfRestaurants.filter((res) => res.info.avgRating>4.5)); 
        console.log(listOfRestaurants);
        console.log(resObj);
    }
    return(
        <div className="body">
            <div className="Search">Search</div>
            <button className = "filter-btn" onClick={ filterRestaurant}>Top Rated Restaurant</button>
            <div className="res-container">
                {
                    listOfRestaurants.map((obj) => <RestaurantCard key = {obj.info.id} resName = {obj}/>)
                }
            </div>
        </div>
    )
}

export default Body;