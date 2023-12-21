import { useSearchParams } from 'next/navigation'

export default function Data() {
    const searchParams = useSearchParams()
    const code = searchParams.get('code')
    console.log(code)

  return (
     <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen flex flex-col items-center justify-center">
      <header className="text-white text-4xl font-semibold mb-4">Welcome to Toile</header>
      <p className="text-white text-lg mb-8">Getting data</p>
      <div className="flex space-x-4">

      </div>
    </div>
  )
}
