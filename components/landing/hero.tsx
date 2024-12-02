import React from 'react'
import { Fugaz_One } from 'next/font/google'
import Button from 'components/landing/button'
import Link from 'next/link'

// Define the ButtonProps type for the Button component if it doesn't already have a type
interface ButtonProps {
  text: string
  dark?: boolean
}

// Ensure the Button component accepts these props
const Hero: React.FC = () => {
  return (
    <div className="py-4 md:py-10 flex flex-col gap-4 sm:gap-8">
      <h1
        className={
          "text-5xl sm:text-6xl md:text-7xl text-center "
        }
      >
        <span className="textGradient">PRED</span> helps you decide how to put
        your <span className="textGradient">money</span> to work!
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]">
        Historic Price change, Stock Market News,{' '}
        <span className="font-semibold">
          Price Prediction, and News Sentiment
        </span>
      </p>
      <div className="grid grid-cols-2 gap-4 w-fit mx-auto">
        <Link href="/dashboard">
          <Button text="Sign Up" />
        </Link>
        <Link href="/dashboard">
          <Button text="Log In" dark />
        </Link>
      </div>
    </div>
  )
}

export default Hero
