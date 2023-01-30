import Fuse from "fuse.js";
import { useState } from "react";
import { useImmer } from "use-immer";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

const defaultRestaurants = [
  {
    id: 1,
    name: "Le Burger",
    availability: false,
    favourite: true,
    time: "45 Min"
  },
  {
    id: 2,
    name: "L'Osteria",
    availability: false,
    favourite: false,
    time: "30 Min"
  },
  {
    id: 3,
    name: "Le Pho",
    availability: false,
    favourite: false,
    time: "10 Min"
  },
  {
    id: 4,
    name: "Yak Yeti",
    availability: false,
    favourite: true,
    time: "0 Min"
  },
  {
    id: 5,
    name: "Thai Isaan",
    availability: false,
    favourite: false,
    time: "20 Min"
  },
  {
    id: 6,
    name: "Wok Walk",
    availability: false,
    favourite: false,
    time: "100 Min"
  },
  {
    id: 7,
    name: "Wiki Wiki Poke",
    availability: false,
    favourite: false,
    time: "5 Min"
  }
];

export default function RestaurantList(
  {searchString, filterFavourites = false, filterAlerts = false} :
  {searchString?: string, filterFavourites: boolean, filterAlerts: boolean}
) {
  const [restaurants, setRestaurants] = useImmer(defaultRestaurants);

  let filteredRestaurants = getFilteredRestaurants(restaurants, searchString, filterFavourites);

  const favouriteRestaurant = (id: number, favourite: boolean) => {
    setRestaurants(a => {
      const restaurant = a.find(r => r.id == id);
      if (restaurant)
        restaurant.favourite = favourite;
    })
  }

  return (
    <ul className="divide-y divide-gray-300">
      {
        filteredRestaurants.map((r, i) => (
          <li key={r.id} className="py-4">
            <RestaurantCard name={r.name} available={r.availability} favourite={r.favourite} 
              timeToDelivery={r.time} onFavourite={(f) => favouriteRestaurant(r.id, f)}
            />
          </li>
        ))
      }
    </ul>
  )
}

function getFilteredRestaurants(restaurants: { id: number; name: string; availability: boolean; favourite: boolean; time: string; }[], searchString: string | undefined, filterFavourites: boolean) {
  let filteredRestaurants = restaurants;
  if (searchString) {
    const options = {
      //includeScore: true,
      keys: ['name']
    }

    const fuse = new Fuse(filteredRestaurants, options)
    const result = fuse.search(searchString)
  
    filteredRestaurants = result.map(r => r.item);
    //filteredRestaurants = filteredRestaurants.filter(r => r.name.includes(searchString));
  }
  if (filterFavourites) {
    filteredRestaurants = filteredRestaurants.filter(r => r.favourite);
  }
  return filteredRestaurants;
}
