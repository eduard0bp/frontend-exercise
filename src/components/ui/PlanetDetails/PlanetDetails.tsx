const PlanetDetails = ({ planet }: { planet: any }) => {
  return (
    <div>
      <h1>{planet?.name}</h1>
    </div>
  )
}

export default PlanetDetails