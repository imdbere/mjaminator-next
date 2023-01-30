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
  {searchString} :
  {searchString?: string}
) {
  const [restaurants, setRestaurants] = useImmer(defaultRestaurants);
  const filteredRestaurants = searchString ?
    restaurants.filter(r => r.name.includes(searchString)) :
    restaurants;

  const favouriteRestaurant = (id: number, favourite: boolean) => {
    setRestaurants(a => {
      const restaurant = a.find(r => r.id == id);
      if (restaurant)
        restaurant.favourite = favourite;
    })
  }

  return (
    <ul className="divide-y divide-gray-200">
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