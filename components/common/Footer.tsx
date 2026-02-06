import Link from "next/link";


export default function Footer() {
    return(
    <footer className="py-5 border-gray-700">
        <div className="container mx-auto px-6">
            <div className="flex justify-between">
                <div>
                    <h2>Portfolio</h2>
                    <p>Cebu, City</p>
                </div>

                {/*Quick Links */}
                <div>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                    </ul>
                </div>

                {/*Blogs */}
                <div>
                    <ul>
                        <li><Link href="/">Blog 1</Link></li>
                        <li><Link href="/about">Blog 2</Link></li>
                        <li><Link href="/projects">Blog 3</Link></li>
                    </ul>
                </div>

                {/*Contacts */}
                <div>
                    <ul>
                        <li><Link href="/">Phone: 12321</Link></li>
                        <li><Link href="/about">Email: test@gmail.com</Link></li>
                        <li><Link href="/projects">Github</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

    )
}