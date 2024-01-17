"use client"

import githubImage from "../../assets/github.png"

import { Button } from "@/components/Button"
import Image from "next/image"
import Link from "next/link"

export default function MyGithub() {

    return (
        <section className="flex flex-col flex-1 items-center gap-16">
            <div className="flex flex-col items-center gap-6">
                <Image src={githubImage} alt="githubImage" className="w-96" />

                <p className="text-2xl font-bold">
                    If you liked my project and want to see more of my projects fell free to :)
                </p>
            </div>

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
