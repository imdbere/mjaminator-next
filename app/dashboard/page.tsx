"use client"

import PlaceSelect from '@/components/PlaceSelect/PlaceSelect'
import RestaurantCard from '@/components/RestaurantCard/RestaurantCard'
import RestaurantList from '@/components/RestaurantList/RestaurantList'
import TabBar from '@/components/TabBar/TabBar'
import TextInput from '@/components/TextInput/TextInput'
import { MagnifyingGlassIcon, HeartIcon, BellIcon } from '@heroicons/react/24/outline'
import {
  MagnifyingGlassIcon as MagnifyingGlassIconSolid,
  HeartIcon as HeartIconSolid,
  BellIcon as BellIconSolid
} from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { useState } from 'react'


export default function Home() {
  const [searchText, setSearchText] = useState("");
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <div className="bg-slate-50 w-full">
        <div className="max-w-3xl mx-auto shadow-md bg-white">

          <main className="flex flex-col h-screen">
            <header className="px-5">
              <div className="pt-6 pb-5 flex items-center justify-between">
                <div className="flex items-center">
                  <MagnifyingGlassIcon className="w-5 mx-2" />
                  <h2 className="text-lg font-bold">Restaurants</h2>
                </div>
                <PlaceSelect />
              </div>
              <TextInput onChange={setSearchText} name="search" placeholder="Search..." icon={MagnifyingGlassIcon} showLabel={false} />
            </header>

            <div className="mt-6 px-5 flex-1 overflow-scroll">
              <RestaurantList searchString={searchText} filterFavourites={tabIndex == 1} filterAlerts={tabIndex == 2} />
            </div>

            <TabBar index={tabIndex} onChange={setTabIndex}/>
          </main>
        </div>
      </div>

    </>
  )
}
