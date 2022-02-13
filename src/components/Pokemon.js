export default function Pokemon(props) {
    const { pokemon } = props
    console.log(pokemon)
  return (
    <div className="characters">
        <h1>{ pokemon.species.name.toUpperCase() }</h1>

        <div className="character-container">
           
            <img src={ pokemon.sprites.front_default } className="center" />
        </div>
    </div>
  )
}
