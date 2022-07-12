import "./search-box.styles.css";

const searchBox = (props) => {
  return (
    <input
      className={`search-box ${props.className}`}
      type="search"
      placeholder={props.placeHolder}
      onChange={props.onChangeHandler}
    />
  );
};

export default searchBox;
