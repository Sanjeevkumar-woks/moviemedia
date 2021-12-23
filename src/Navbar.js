import { Playground } from "./Playground";
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,useParams} from "react-router-dom";
  import {AddMovies} from "./AddMovies"
  import {About} from "./About"
  import{App} from "./App"
  import { createContext, useContext,useState } from "react";
import { TicTacToeGame } from "./TicTacToeGame";
  

  
// export function Navbar(movieList,setMovieList) {
//   return (
//     <div className="navbar">
//       <img
//         className="logo"
//         src="https://external-preview.redd.it/qzDjXXzximSncp408pCAh5naQJpumUPBqm-THT2kWrQ.png?width=640&crop=smart&auto=webp&s=5a50b6b61f88d5ede36c1e1541e6f19c9a4a4b7d"
//         alt="marvel-studio-logo" />
//     </div>
//   );
// }
const themeCtx = createContext(null);

export  function Navbar(){
  
  const history = useHistory();
  const [movieList, setMovieList] = useState([
    {
      name: "SpiderMan: No Way Home",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-mannowayhome_lob_crd_03.jpg",
      rating: 8.,
      summary:"With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
    },
    {
      name:"Ant-man",
      poster:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/ant-man_lob_crd_01_8.jpg",
      rating:6,
      summary:"Ant-Man is a smaller-scale movie compared to prior installments in the MCU, but it's by no means any less engrossing. With a strong lead performance by Paul Rudd, a more simple, leaner story, and some really impressive visual effects, Ant-Man manages to prove that Marvel doesn't need to have world-ending events for every single conflict."
    },
    
    {
      name: "Black Widow 2021",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackwidow_lob_crd_06.jpg",
      rating: 8.6,
      summary:"Black Widow is a 2021 American superhero film based on Marvel Comics featuring the character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 24th film in the Marvel Cinematic Universe (MCU). The film was directed by Cate Shortland from a screenplay by Eric Pearson, and stars Scarlett Johansson as Natasha Romanoff / Black Widow alongside Florence Pugh, David Harbour, O-T Fagbenle, Olga Kurylenko, William Hurt, Ray Winstone, and Rachel Weisz. Set after the events of Captain America: Civil War (2016), the film sees Romanoff on the run and forced to confront her past."
    },
    {
      name: "Avengers: Endgame year:2019",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05_2.jpg",
      rating: 8.6,
      summary:"Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the direct sequel to Avengers: Infinity War (2018) and the 22nd film in the Marvel Cinematic Universe (MCU). Directed by Anthony and Joe Russo and written by Christopher Markus and Stephen McFeely, the film features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Don Cheadle, Paul Rudd, Brie Larson, Karen Gillan, Danai Gurira, Benedict Wong, Jon Favreau, Bradley Cooper, Gwyneth Paltrow, and Josh Brolin. In the film, the surviving members of the Avengers and their allies attempt to reverse the destruction caused by Thanos in Infinity War."
    },
    {
      name: "Shang-Chi and The Legend of the Ten Rings",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/shangchi_lob_crd_07.jpg",
      rating: 8.6,
      summary:"Shang-Chi and the Legend of the Ten Rings is a 2021 American superhero film based on Marvel Comics featuring the character Shang-Chi. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 25th film in the Marvel Cinematic Universe (MCU). The film was directed by Destin Daniel Cretton, from a screenplay he wrote with Dave Callaham and Andrew Lanham, and stars Simu Liu as Shang-Chi alongside Awkwafina, Meng'er Zhang, Fala Chen, Florian Munteanu, Benedict Wong, Michelle Yeoh, Ben Kingsley, and Tony Leung. In the film, Shang-Chi is forced to confront his past when his father Wenwu (Leung), the leader of the Ten Rings organization, draws Shang-Chi and his sister Xialing (Zhang) into a search for a mythical village."
    },
    {
      name: "Captain Marvel- year : 2019",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainmarvel_lob_crd_06.jpg",
      rating: 9.5,
      summary:"Captain Marvel is the name of several fictional superheroes appearing in American comic books published by Marvel Comics. Most of these versions exist in Marvel's main shared universe, known as the Marvel Universe.In the Marvel Cinematic Universe, Captain Marvel is Carol Danvers, portrayed by Brie Larson in Captain Marvel, Avengers: Endgame (both 2019), and Shang-Chi and the Legend of the Ten Rings (2021). Brie Larson will reprise her role in the sequel The Marvels (2022). Mckenna Grace portrayed a young Carol in Captain Marvel."
    },
    {
      name:"spider-man:far-from-home",
      poster:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manfarfromhome_lob_crd_04_3.jpg",
      rating:8.5,
      summary:"Spider-Man: Far From Home is a 2019 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Homecoming (2017) and the 23rd film in the Marvel Cinematic Universe (MCU). The film was directed by Jon Watts, written by Chris McKenna and Erik Sommers, and stars Tom Holland as Peter Parker / Spider-Man, alongside Samuel L. Jackson, Zendaya, Cobie Smulders, Jon Favreau, J. B. Smoove, Jacob Batalon, Martin Starr, Marisa Tomei, and Jake Gyllenhaal. In the film, Parker is recruited by Nick Fury (Jackson) and Mysterio (Gyllenhaal) to face the Elementals while he is on a school trip to Europe."
    },
    {
      name: "Eternals",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/eternals_lob_crd_03_0.jpg",
      rating: 8.6,
      summary:"“Eternals” is not your typical MCU film. It’s definitely something out of the Marvel norm. Darker and more mature, but without losing the lighter moments that maintain the Marvel magic.Chloé Zhao successfully delivers an emotional and intriguing story complemented by its compelling characters and stellar visuals"
    },
    {
      name:"captain-america:civil-war",
      poster:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainamericacivilwar_lob_crd_01_9.jpg",
      rating:9,
      summary:"Captain America Civil War marks the 3rd and final film in the Captain America trilogy but it plays out more like an Avengers film with the amount of characters and fight scenes.  The world is not at stake, but the Avengers are.  There is a lot going on in this film and if you don't pay attention or haven't seen the previous films then you will get lost... But if you can follow it, you'll find it to be a deep and powerful story with far more at stake than any other MCU movie to date."
    }
  ]);
  return(<div>
  <AppBar position="static" sx={{background:"#0088f8",color:"gold"}}>
    <Toolbar>
      <Button color="inherit" variat="text" onClick={()=>history.push(`/`)} >
         <span >Home</span>
      </Button>
      <Button color="inherit" variant="text" onClick={()=>history.push(`/movies`)} >
         <span >Movies</span> 
      </Button>
      <Button color="inherit" variant="text" onClick={()=>history.push(`/addMovie`)} >
         <span >Add Movies</span>
      </Button>
      <Button color="inherit" variant="text" onClick={()=>history.push(`/films`)} >
         <span >Films</span>
      </Button>
      <Button color="inherit" variant="text" onClick={()=>history.push(`/TicTacToe-Game`)} >
      <span >TicTacToe Game</span> 
      </Button>
    </Toolbar>
  </AppBar>
  <Switch>
         <Route exact path="/">
             <Home/>
         </Route>
         <Route exact path="/movies">
            <App movieList={movieList} setMovieList={setMovieList}/>
         </Route>
         <Route exact path="/films">
              <Redirect to="/movies"/>
         </Route>
         <Route exact path="/about">
            <About/>
         </Route>
         <Route exact path="/addMovie">
         <AddMovies movieList={movieList} setMovieList={setMovieList}/>
         </Route>
         {/* <Route exact path="/TicTacToe-Game">
               <TicTacToeGame/>
         </Route> */}
         <Route path="**">
              <img src="https://i.pinimg.com/originals/a8/12/1a/a8121abee959e18cbad25ad4046f76d8.gif" alt=""></img>
         </Route>
       </Switch>
  </div>)
}
function Home(){
  const [theme, setTheme] = useState("light");
  const styles = { background: theme === "light" ? "black" : "white" };
  return(
    <themeCtx.Provider value={[theme, setTheme]}>
      <div>
      <List setTheme={setTheme} theme={theme} />
      </div>
    <div style={styles} className="home">
    
    <h1 className="home-heading">Welcome To my App</h1>
    <img className="home-img" src="https://thewordcounter.com/wp-content/uploads/2020/05/theatre1-600-x-452.jpg" alt=""/>     
  </div>
  </themeCtx.Provider>)
  
}
const List = () => (
  <ul>
    <ListItem value="💡" />
    <ListItem value="🌙" />
  </ul>
);

const ListItem = ({ value }) => (
    <Buttons value={value} />
  
);

const Buttons = ({ value }) => {
  // subscribing
  const [theme, setTheme] = useContext(themeCtx);
const styles = {
  background: theme === "light" ? "white" : "black",
  color: !(theme === "light") ? "white" : "black"
};
return (
  <Button
    style={styles}
    onClick={() => setTheme(value === "💡" ? "light" : "dark")}
  >
    {value}
  </Button>
);
};