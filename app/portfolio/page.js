'use client'
import {useEffect, useState} from "react";
import { LoadingSkeleton } from "@/app/portfolio/loading-skeleton";

function Portfolio() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setData("burak1")
      setLoading(false)
    }, 2000)
  }, [])

  return <>{loading || !data ? <LoadingSkeleton /> : <div>PORTFOLIO</div>}</>
}

export default Portfolio;
