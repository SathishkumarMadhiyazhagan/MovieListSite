import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="bg-white shadow dark:bg-gray-900 mt-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">MovieListSite™</Link>. All Rights Reserved.</span>
        </div>
    </footer>
  )
}
