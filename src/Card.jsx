const Card = ({ number, type }) => {
  return (
    <div className="card">
      <span className="bold">{number}</span>
      <span>{type}</span>
    </div>
  );
};

export default Card;
