"use client"

import { Button } from "@/components/Button"
import Link from "next/link"

export default function Home() {
  function handleButtonClick() {
    alert('Good Morning!!')
  }

  return (
    <section className="flex flex-1 flex-col justify-between items-center gap-8">
      <div className="flex flex-col items-center gap-6">
        <h1 className='text-4xl font-bold'>
          Hello Everybody, My Name Is Pedro!!
        </h1>
        <p className="text-2xl">
          And this is my first time making a next project, i will try to learn the most that i can just by developing it!!
        </p>
        <Button OnClickEvent={handleButtonClick}>
          click-me
        </Button>
      </div>

      <div>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href={"/about-me"} className="border-slate-300 hover:border-b-2">
                about-me
              </Link>
            </li>
            <li>
              <Link href={"/my-github"} className="border-slate-300 hover:border-b-2">
                my-github
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}
