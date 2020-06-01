// import React, { useState, useEffect } from "react";
// import axios from "axios";

// import { apiLink } from '../../List/index';

// import "./Filters.scss";

// const Filters = () => {
//   const [rests, setRests] = useState([]);
//   useEffect(() => {
//     axios
//       .get(apiLink)
//       .then((res) => {
//         setRests(res.data.results);
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   const [selectedPrice, setSelectedPrice] = useState("");
//   const [isOpen, setIsOpen] = useState(false);

//   const filterRestaurantsByPrice = rest => {
//     if (selectedPrice !== "") {
//       return rest.price === selectedPrice;
//     }

//     return rest;
//   };

//   const filterRestaurantsByOpen = rest => {
//     if (isOpen) {
//       return rest.opening_hours.open_now;
//     }

//     return rest;
//   };

//   return (
//     <div className="filterBox">

//       <select name="price" id="price" onChange={(event) => setSelectedPrice(event.target.value)}>
//         <option value="">Show all</option>
//         <option value="$">$</option>
//         <option value="$$">$$</option>
//         <option value="$$$">$$$</option>
//         <option value="$$$$">$$$$</option>
//       </select>
//       <label for="open">Open now</label>
//       <input type="checkbox" id="open" name="open" onChange={() => setIsOpen(!isOpen)} />

//       {rests.filter(filterRestaurantsByPrice).filter(filterRestaurantsByOpen).map((rest) => (
//         <>
//           <h2 key={rest.id}>{rest.name}</h2>
//           <p className="address">{rest.formatted_address}</p>
//           <p className="price">{"$".repeat(rest.price_level)}</p>

//           <div className="isOpen">
//             {rest.opening_hours.open_now ? (
//               <p className="open">Open</p>
//             ) : (
//                 <p className="closed">Closed</p>
//               )}
//           </div>
//           <p className="rating">
//             <span className="rating-number">{rest.rating}</span>
//           </p>
//         </>
//       ))
//       }
//     </div >
//   );
// };

// export default Filters;
