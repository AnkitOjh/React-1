import { CDN_URL } from "../utils/constant";

const styleCard = {
    backgroundColor: "#0f0f0f",
    
}
const RestaurantCard = (props) => {
    const {resName} = props;
    const {name, cloudinaryImageId, sla, avgRating, cuisines, costForTwo} = resName?.info;
    console.log(resName.info.sla.slaString);
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src={CDN_URL +resName.info.cloudinaryImageId}
            />
            <h3 className = "res-name">{name}</h3>
            <h3 className = "res-name">{avgRating}  {sla.slaString}</h3>
            <h4 className = "res-name">{cuisines.join(", ")}</h4>
        </div>
    )
}
export default RestaurantCard;