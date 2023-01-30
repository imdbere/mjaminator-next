import RestaurantCard from "../RestaurantCard/RestaurantCard";

const restaurants = [
  {
    name: "Le Burger",
    availability: false,
    favourite: true,
    time: "45 Min"
  },
  {
    name: "L'Osteria",
    availability: false,
    favourite: false,
    time: "30 Min"
  },
  {
    name: "Le Pho",
    availability: false,
    favourite: false,
    time: "10 Min"
  },
  {
    name: "Yak Yeti",
    availability: false,
    favourite: true,
    time: "0 Min"
  },
  {
    name: "Thai Isaan",
    availability: false,
    favourite: false,
    time: "20 Min"
  },
  {
    name: "Wok Walk",
    availability: false,
    favourite: false,
    time: "100 Min"
  },
  {
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
  const filteredRestaurants = searchString ?
    restaurants.filter(r => r.name.includes(searchString)) :
    restaurants;

  return (
    <ul className="divide-y divide-gray-200">
      {
        filteredRestaurants.map(r => (
          <li className="py-4">
            <RestaurantCard name={r.name} available={r.availability} favourite={r.favourite} timeToDelivery={r.time} />
          </li>
        ))
      }
    </ul>
  )
}