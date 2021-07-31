import './App.css';
import axios from 'axios';
import {useState} from 'react';
import RecipeTile from './RecipeTile';

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabel, sethealthLabel] = useState("vegan");

  const YOUR_APP_KEY = "ec25740ff4dede4027c00dca1211a5e9";
  const YOUR_APP_ID = "464a4b1d";

  var url = `https://api.edamam.com/search?q=
  ${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}
  &health=${healthLabel}`;

  async function getRecipes(){
    //getting info from api is gonna take some time. await waits till it is done.
    var result = await axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className="App">
      <h1>Food Recipes Haven🍔</h1>
      <form className="app_searchForm" onSubmit={onSubmit}>
        <input type="text"
        className="app_input"
         placeholder="Enter ingredient"
         value={query}
         onChange={(e) => setQuery(e.target.value)}
         />
         <input className="app_submit"
         type="submit"
         value="Search"
         />
         <select className="app_healthLabels">
           <option onClick={()=> sethealthLabel("vegan")}>vegan</option>
           <option onClick={()=> sethealthLabel("vegetarian")}>vegetarian</option>
           <option onClick={()=> sethealthLabel("paleo")}>paleo</option>
           <option onClick={()=> sethealthLabel("dairy-free")}>dairy-free</option>
           <option onClick={()=> sethealthLabel("gluten-free")}>gluten-free</option>
           <option onClick={()=> sethealthLabel("wheat-free")}>wheat-free</option>
           <option onClick={()=> sethealthLabel("low-sugar")}>low-sugar</option>
           <option onClick={()=> sethealthLabel("egg-free")}>egg-free</option>
           <option onClick={()=> sethealthLabel("peanut-free")}>peanut-free</option>
           <option onClick={()=> sethealthLabel("tree-nut-free")}>tree-nut-free</option>
           <option onClick={()=> sethealthLabel("soy-free")}>soy-free</option>
           <option onClick={()=> sethealthLabel("fish-free")}>fish-free</option>
           <option onClick={()=> sethealthLabel("shellfish-free")}>shellfish-free</option>
          </select>
      </form>

      <div className="app_recipes">
        {recipes.map(recipe =>{
          return <RecipeTile recipe={recipe}/>;
        })}
      </div>
    </div>
  );
}

export default App;
