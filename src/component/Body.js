import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchedValue, setSearchedValue] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    useEffect(() => {
        fetchData();
    },[]);
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const dataJson = await data.json();
        console.log("dataJson",dataJson);
        console.log(dataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurants(dataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(dataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }
    const filterRestaurant = () => {
        setFilteredRestaurant(filteredRestaurant.filter((res) => res.info.avgRating>4.5)); 
        console.log(listOfRestaurants);
        console.log(resObj);
    }
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return <h1>Looks like u are offline please check ur internet connection.</h1>
    }
    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
                <div className="Search">
                    <div className="Search-box">
                        <input type="text" className="search-box" value = {searchedValue}
                        onChange = {(e) => {
                            setSearchedValue(e.target.value);
                        }}/>
                        <button className="px-4 ml-1 bg-slate-500 rounded-lg"
                        onClick={() => {
                            const filteredRestaurants = filteredRestaurant.filter((res) => 
                                res.info.name.toLowerCase().includes(searchedValue.toLowerCase()));
                            console.log(filteredRestaurant);
                            setFilteredRestaurant(filteredRestaurants);
                            console.log(listOfRestaurants);

                        }}>Search</button>
                    </div>
                    <button className = "filter-btn" onClick={ filterRestaurant}>Top Rated Restaurant</button>
                </div>
            <div className="flex flex-wrap justify-center">
                {
                    filteredRestaurant.map((obj) => <Link to = {"/restaurants/"+obj.info.id}><RestaurantCard key = {obj.info.id} resName = {obj}/></Link>)
                }
            </div>
        </div>
    )
}

export default Body;