"use client"

import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { ChangeEvent, ForwardRefExoticComponent, useState } from 'react'

export default function TextInput( 
    { name, icon, placeholder="", showLabel: showText = true, onChange }: 
    { name: string, icon: ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>, placeholder: string, showLabel?: boolean, onChange: (text: string) => any }) 
    {
  
  const [text, setText] = useState("");
  const Icon = icon;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    onChange?.(e.target.value);
  }
  return (
    <div className="mx-auto">
      {showText && 
        <label className="text-sm font-medium text-gray-700" htmlFor="email">{name}</label>
      }
      <div className="relative">
        <div className="absolute inset-y-0 flex items-center pl-2">
          <Icon className="h-5 w-5 text-gray-700" />
        </div>
        <input value={text} onChange={handleChange} className="w-full pl-8 border-gray-400 hover:border-indigo-600/50 rounded-md text-sm" type="email" id="email" placeholder={placeholder} />
      </div>
    </div>
  )
}