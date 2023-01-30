import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'

export default function RestaurantCard(
  {name, available, favourite, timeToDelivery, onFavourite} :
  {name: string, available: boolean, favourite: boolean, timeToDelivery: string, onFavourite: (favourite: boolean) => any}
) {
  const availabilityText = available ? "Available" : "Currently unavailable";
  const Icon = favourite ? HeartIconSolid : HeartIcon;

  return (
    <div className="flex w-full">
      <img className="w-20 h-20 object-cover" src="/login_bg.jpg" alt="card"></img>
      <div className="flex flex-1 flex-col justify-between mx-3">
        <div className="flex justify-between">
          <h3 className="text-md font-bold">{name}</h3>
          <a onClick={() => onFavourite(!favourite)}>
            <Icon className="w-6" />
          </a>
        </div>
        <div className="flex justify-between">
          <p className="font-light text-gray-600">{availabilityText}</p>
          <p className="text-sm bg-teal-800 text-white px-2 py-1 rounded-lg">{timeToDelivery}</p>
        </div>
      </div>
    </div>
  )
}