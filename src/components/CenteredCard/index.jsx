import "./style.css";
const CenteredCard = ({ children }) => {
  return (
    <div className="Card">
      <span>{children}</span>
    </div>
  );
};

export default CenteredCard;
