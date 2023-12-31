'use client'

function Slider({images, buttonText, buttonLink}) {
  return (
    <div>
      {images.map(image => {
        return (
          <div key={image}>
            <img src={image} alt={'img-slider'}/>
            <p className="legend">{image}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Slider
