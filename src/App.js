import { useState, useEffect } from "react";
// import logo from "./logo.svg";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-Box/search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log("render");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monster-Rolodex</h1>

      <SearchBox
        className="monsterSearch-box"
        onChangeHandler={onSearchChange}
        placeHolder="Search Monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }
// componentDidMount() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) =>
//       this.setState(() => {
//         return {
//           monsters: users,
//         };
//       })
//     );
// }
// onSearchChange = (event) => {
//   const searchField = event.target.value.toLocaleLowerCase();

//   this.setState(() => {
//     return { searchField };
//   });
// };
//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

// const searchMonsters = monsters.filter((monster) => {
//   return monster.name.toLocaleLowerCase().includes(searchField);
// });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monster-Rolodex</h1>
//         <SearchBox
//           className="monsterSearch-box"
//           onChangeHandler={onSearchChange}
//           placeHolder="Search Monsters"
//         />
//         <CardList monsters={searchMonsters} />
//       </div>
//     );
//   }
// }

export default App;
