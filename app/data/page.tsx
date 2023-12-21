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
        const res = await fetch('', {
            method: 'POST',
            body: JSON.stringify({
                'code': code,
                'grant_type': 'authorization_code',
                'redirect_uri': 'http://mytestapp.com/redirect_uri',
                'client_id': 'abcdefg12345',
                'client_secret': 'abcdefg12345'
            })
        });
        const data = await res.json();
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
