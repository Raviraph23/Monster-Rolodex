import Card from "./Card.component";

import "./card-list.styles.css";

const CardList = (props) => {
  const { monsters } = props;

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monsterObj={monster} />;
      })}
    </div>
  );
};

export default CardList;
