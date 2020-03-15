import React from "react"
import containerStyles from "./pdf.module.css"

const PDF = ({ src, title }) => (
  <object className={containerStyles.pdf} type="application/pdf" data={src}>
    <a href={src} target="_blank" rel="noreferrer noopener">
      Download {title}
    </a>
  </object>
)

export default PDF
