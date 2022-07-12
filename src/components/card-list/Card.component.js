import "./cards.styles.css";

const Card = (props) => {
  const { name, email, id } = props.monsterObj;
  return (
    <div className="card-container" key={id}>
      <img alt={`monster${name}`} src={`https://robohash.org/${id}?set=set2`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
