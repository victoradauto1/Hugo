import React, { useEffect, useState } from 'react'

export const useResgate = (url) => {

    const [chamada, setChamada] = useState([])

    useEffect(() => {
        const resgate = async () => {
            const res = await fetch(url)
            const data = await res.json()
            setChamada(data)
        }
        resgate();
    }, []);

  return { chamada, setChamada}
}  