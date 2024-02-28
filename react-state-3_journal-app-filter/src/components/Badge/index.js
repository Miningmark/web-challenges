import "./Badge.css";

export default function Badge({ children, isActive }) {
  console.log(children);
  return (
    <span className={`badge${isActive ? " badge--active" : ""}`}>
      {children}
    </span>
  );
}
