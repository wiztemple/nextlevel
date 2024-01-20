const Carousel = ({slides}: {slides: any}) => {
  return (
    <div className="overflow-hidden">
      <div className="flex">{slides}</div>
    </div>
  )
}

export default Carousel;
