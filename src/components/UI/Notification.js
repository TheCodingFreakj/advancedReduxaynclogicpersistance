import "./style.css";

export const Notification = (props) => {
  let cssClass = "";
  let notification = "";
  if (props.status === "error") {
    cssClass = "error";
  }
  if (props.status === "pending") {
    cssClass = "pending";
  }
  if (props.status === "success") {
    cssClass = "success";
  }

  if (!props.status) {
    cssClass = "nothing";
  }

  return (
    <section className={`${notification} ${cssClass}`}>
      <h2 className="heading">{props.title}</h2>
      <p className="para">{props.message}</p>
    </section>
  );
};
