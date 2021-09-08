import "./style.css";

const Card = (props) => {
  return (
    <section className={`${props.className ? props.className : ''}`}>
      {props.children}
    </section>
  );
};

export default Card;
