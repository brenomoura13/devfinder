import type { NextComponentType } from 'next'
import React, { useEffect, useState } from 'react'

const Stats: NextComponentType = props => {
  const {label, number, duration } = props.data
  const [count, setCount] = useState("0")

  useEffect(() => {
    let start = 0;
    const end = parseInt(number.substring(0,3))
    if (start === end) return;
    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;
    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3))
      if (start === end) clearInterval(timer)       
    }, incrementTime);

  }, [number, duration]);
  return (
    <div className="level-item has-text-centered has-text-black">

      <div>
        <p className="heading has-text-black">{label}</p>
        <p className="title has-text-primary">{count.toLocaleString()}</p>
      </div>
    </div>
  )
}

export default Stats
