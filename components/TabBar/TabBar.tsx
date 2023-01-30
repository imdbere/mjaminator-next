"use client"

import { MagnifyingGlassIcon, HeartIcon, BellIcon } from '@heroicons/react/24/outline'
import { 
  MagnifyingGlassIcon as MagnifyingGlassIconSolid, 
  HeartIcon as HeartIconSolid, 
  BellIcon as BellIconSolid} from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { useState } from 'react'

export default function TabBar() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const menu = [
    {
      text: "Search",
      icon: MagnifyingGlassIcon,
      selectedIcon: MagnifyingGlassIconSolid
    },
    {
      text: "Favourites",
      icon: HeartIcon,
      selectedIcon: HeartIconSolid
    },
    {
      text: "Alerts",
      icon: BellIcon,
      selectedIcon: BellIconSolid
    }
  ]

  const onClick = (e: MouseEvent, index: number) => {
    e.preventDefault();
    console.log("Selected index " + index);
    setSelectedIndex(index);
  }

  return (
    <nav className="border-y-2">
      <ul className="flex items-center justify-around h-20">
        {
          menu.map((m, i) => {
            const selected = selectedIndex == i;
            const Icon = selected ? m.selectedIcon : m.icon;
            return (
              <li key={i} className="mx-6">
                <a onClick={(e) => onClick(e, i)} className={clsx("text-sm", { "font-semibold": selected, "text-teal-500": selected })} href="">
                  <Icon className="w-5 mx-auto" />
                  {m.text}
                </a>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}