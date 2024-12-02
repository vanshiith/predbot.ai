import React from 'react'
import { Fugaz_One } from 'next/font/google'

// Define the font
const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] })

// Define the props type
interface ButtonProps {
  text: string
  dark?: boolean
  full?: boolean
  clickHandler?: () => void // Optional function type for the click handler
}

const Button: React.FC<ButtonProps> = ({ text, dark = false, full = false, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      className={
        "rounded-full overflow-hidden border-2 duration-200 hover:opacity-60 border-solid border-indigo-600 " +
        (dark ? "text-white bg-indigo-600" : "text-indigo-600") +
        (full ? " grid place-items-center w-full" : "")
      }
    >
      <p className={"px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 " + fugaz.className}>
        {text}
      </p>
    </button>
  )
}

export default Button
