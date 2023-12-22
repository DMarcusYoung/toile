'use client'

import { useSearchParams } from 'next/navigation'

export default function Data() {
    const searchParams = useSearchParams()
    const code = searchParams.get('code')
    console.log(code)
    if (!code) {
        return "No code found"
    }
    getAccessToken(code)
    async function getAccessToken(code:string) {
        const res = await fetch('https://drchrono.com/o/token/', {
            method: 'POST',
            // mode: 'no-cors',
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            body: JSON.stringify({
                'code': code,
                'grant_type': 'authorization_code',
                'redirect_uri': 'https://toile-kohl.vercel.app/data',
                'client_id': process.env.CLIENT_ID,
                'client_secret': process.env.CLIENT_SECRET
            })
        });
        const data = await res.json();
        console.log(data)
    }

  return (
     <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen flex flex-col items-center justify-center">
      <header className="text-white text-4xl font-semibold mb-4">Welcome to Toile</header>
      <p className="text-white text-lg mb-8">Getting data</p>
      <div className="flex space-x-4">

      </div>
    </div>
  )
}
