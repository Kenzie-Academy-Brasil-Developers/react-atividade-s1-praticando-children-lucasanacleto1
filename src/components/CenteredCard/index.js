import "./style.css";
function CenteredCard({ children }) {
  return (
    <div className="Card">
      <span>{children}</span>
    </div>
  );
}

export default CenteredCard;
