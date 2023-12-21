import Link from 'next/link'

export default function Home() {
  return (
     <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen flex flex-col items-center justify-center">
      <header className="text-white text-4xl font-semibold mb-4">Welcome to Toile</header>
      <p className="text-white text-lg mb-8">Click to login to Dr. Chrono</p>
      <div className="flex space-x-4">
        <Link className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded" href='https://drchrono.com/o/authorize/?redirect_uri=https://toilehealth.com/&response_type=code&client_id=EFDpsPJohVgzfes3kxmHENwf3PqPYx7kvbGekiG7'>
          Login
        </Link>
      </div>
    </div>
  )
}
