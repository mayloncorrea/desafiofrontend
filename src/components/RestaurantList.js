
import { Link } from "react-router-dom";
import Loading from "./Loading";

function RestaurantList(props) {

  // if (props.loading) {
  //   return <Loading></Loading>;
  // }

  // if(!props.list.length) {
  //   return (
  //     <>
  //       <p>Nenhum resultado encontrado.</p>
  //     </>
  //   );
  // }

  return (
    <>
      <div className="restaurants-content">
        {props.list ? props.list.map((item, i) => {
          return (
            <Link to={`restaurant/${item.id}`} className="restaurant-item" key={i} style={{backgroundImage: `url(${item.logo})`}}>
                <p className="white">{item.name}</p>
            </Link>
          );
        }) : ''} 
      </div>
      {props.loading ? <Loading></Loading> : ''}
    </>
  );
}

export default RestaurantList;