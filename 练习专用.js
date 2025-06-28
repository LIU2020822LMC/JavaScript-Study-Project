
async function fetchaData(){
  try{
    const pokemon = document.getElementById("image").value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    if(!response.ok){
      throw new Error("这玩意压根连接不了");
    }
    const data  =await response.json();
    const pokemonSprite = data.sprites.front_default;
    const pokemonimage = document.getElementById("pokemon");
    pokemonimage.src = pokemonSprite;
    pokemonimage.style.display = "block";
  }
  catch(error){
    console.error(error);
  }
}

