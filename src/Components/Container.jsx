import classes from "../styles/container.module.css";
export default function Container({ children }) {
  return (
    <>
      <div className={classes.container}>{children}</div>
    </>
  );
}
