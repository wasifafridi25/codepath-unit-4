import React from 'react'

// eslint-disable-next-line react/prop-types
export default function Gallery({ prevImages }) {
  return (
    <div>
      {
        // eslint-disable-next-line react/prop-types
        prevImages.map((image, i) => {
            return (
                <div key={i}>
                    <img src={image}/>
                </div>
            )
        })
      }
    </div>
  )
}
