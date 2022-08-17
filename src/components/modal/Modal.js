import "./modal.css";

const Modal = (props) => {
  return (
    <>
      {props.show ? (
        <div className="openModal modal">
          <section>{props.children}</section>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Modal;
