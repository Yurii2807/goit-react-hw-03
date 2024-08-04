import { FaUserAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import css from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={css.div}>
      <p className={css.p}>
        <FaUserAlt />

        {contact.name}
      </p>
      <p className={css.p}>
        <FaPhoneVolume />
        {contact.number}
      </p>
      <button
        className={css.btn}
        type="button"
        onClick={() => onDelete(contact.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
