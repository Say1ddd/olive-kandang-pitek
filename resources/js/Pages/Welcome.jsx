import { Link } from "@inertiajs/react"

const Welcome = () => {
return (
        <section className="flex flex-col items-center">
                <div className="text-center font-bold text-xl">
                        <p>Olive enak</p>
                </div>
                <div className="text-center">
                        <Link href={route('register')}>
                                Register
                        </Link>
                <div>
                        <Link href={route('login')}>
                                Login
                        </Link>
                </div>
                </div>
        </section>
)
}

export default Welcome