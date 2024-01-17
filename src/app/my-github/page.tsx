"use client"

import meImage from "../../assets/me.png"

import { Button } from "@/components/Button"
import Image from "next/image"
import Link from "next/link"

export default function MyGithub() {

    return (
        <section className="flex flex-col flex-1 justify-center items-center gap-20">
            <p className="text-2xl font-bold">
                If you liked my project and want to see more of my projects fell free to :)
            </p>

            <div className="flex gap-4">
                <Link href={'https://github.com/czzped'} target="_blank">
                    <Button>
                        go to my github
                    </Button>
                </Link>
                <Link href={'/'}>
                    <Button>
                        go back
                    </Button>
                </Link>
            </div>
        </section>
    )
}
