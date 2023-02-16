import React, { useEffect, useState } from "react"


const AsyncAwait = () => {
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const data = await fetch("/api/top-tracks")
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <div>
    {data}
    </div>
  )
}

export default AsyncAwait