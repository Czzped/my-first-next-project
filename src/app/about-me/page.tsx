"use client"

import meImage from "../../assets/me.png"

import { Button } from "@/components/Button"
import Image from "next/image"
import Link from "next/link"

export default function AboutMe() {

    return (
        <section className="flex flex-1 justify-between items-center gap-8">
            <div>
                <Image src={meImage} alt="meImage" />
            </div>

            <div className="flex flex-col gap-10">
                <p className="text-3xl">
                    My name is Pedro, i'm a frontend developer. Now i'm trying to learn Next to improve my skills,
                    my dream is to one day became a successful fullstack developer
                </p>
                <Link href={'/'}>
                    <Button>
                        go back
                    </Button>
                </Link>
            </div>
        </section>
    )
}
