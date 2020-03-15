import React from "react"
import containerStyles from "./pills.module.css"
import { rhythm } from "../utils/typography"

function pillModifier(str) {
  let modifier
  switch (str) {
    case "ember.js":
      modifier = "orange"
      break
    case "engineering":
      modifier = "blue"
      break
    case "personal":
      modifier = "pink"
      break
    default:
      modifier = "grey"
  }
  return containerStyles[
    `pill${modifier.toLocaleLowerCase().replace(/^\w/, c => c.toUpperCase())}`
  ]
}

const Pills = ({ items }) => {
  return (
    <div className={containerStyles.pills}>
      {items.map((item, idx) => (
        <span
          className={`${containerStyles.pill} ${pillModifier(item)}`}
          key={idx}
          style={{ marginRight: rhythm(1 / 4) }}
        >
          {item}
        </span>
      ))}
    </div>
  )
}

export default Pills
