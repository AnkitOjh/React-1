import { CDN_URL } from "../utils/constant";

const styleCard = {
    backgroundColor: "#0f0f0f",
    
}
const RestaurantCard = (props) => {
    const {resName} = props;
    const {name, cloudinaryImageId, sla, avgRating, cuisines, costForTwo} = resName?.info;
    console.log(resName.info.sla.slaString);
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg" style={styleCard}>
            <img className=" rounded-lg" src={CDN_URL +resName.info.cloudinaryImageId}
            />
            <h3 className=" text-cyan-800 color">{name}</h3>
            <h3 className=" text-cyan-800 color">{avgRating}  {sla.slaString}</h3>
            <h4 className=" text-cyan-800 color">{cuisines.join(", ")}</h4>
        </div>
    )
}
export default RestaurantCard;