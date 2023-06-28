import React from 'react'

const Quote = ({author, quote, background}) => {

    let styles = {
        background: background,
        color: "white"
    }

  return (
    <div className="quoteContainer" style={styles}>
        <h3>{author}</h3>
        <h3>{quote}</h3>
    </div>
  )
}

export default Quote