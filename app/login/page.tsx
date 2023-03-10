
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <img className="w-full h-2/5 object-cover" src="/login_bg.jpg" alt="BG"></img>
      <div className="rounded-t-2xl w-full -mt-5 relative bg-white pt-6 px-5">
        <h1 className="text-3xl font-bold text-gray-900">Welcome</h1>
        <h3 className="text-xl text-gray-500 antialiased my-2">Sign in with Email or Socials</h3>
        <div className="mt-5">
          
        </div>
        <Link href="/dashboard" passHref>
          <button className="w-full my-3 p-2 rounded-md shadow-md bg-teal-800 outline-teal-600 outline-2 outline-offset-2 active:outline text-white text-sm cursor-pointer">Sign In</button>
        </Link>
        <div className="flex justify-center mt-5">
          <div>
            <p className="text-sm text-gray-700 antialiased">Or continue with</p>
            <svg
              className="mx-auto mt-2 fill-teal-800"
              height={40}
              width={40}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 210 210"
              xmlSpace="preserve"
            >
              <path d="M0 105C0 47.103 47.103 0 105 0c23.383 0 45.515 7.523 64.004 21.756l-24.4 31.696C133.172 44.652 119.477 40 105 40c-35.841 0-65 29.159-65 65s29.159 65 65 65c28.867 0 53.398-18.913 61.852-45H105V85h105v20c0 57.897-47.103 105-105 105S0 162.897 0 105z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}
