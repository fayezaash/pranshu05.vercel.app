import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const DiscordStatus = () => {
   const [data, setData] = useState('')
   useEffect(() => {
      axios
         .get('https://api.lanyard.rest/v1/users/754381104034742415')
         .then((res) => {
            setData(res.data)
         })
         .catch((err) => {
            console.log(err)
         })
   }, [data])

   return (
      <span>
         Currently {data.data?.discord_status} on{' '}
         <a
            href="https://discordapp.com/users/754381104034742415"
            aria-label="discord"
            target="_blank"
            rel="noopener noreferrer"
         >
            Discord
         </a>
      </span>
   )
}
