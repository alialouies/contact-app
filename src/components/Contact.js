import "./Contact.css";

const name = "Aliki";
const avatar = "https://i.stack.imgur.com/frlIf.png";
const status = "online";

function Contact() {
  return (
    <div className="Contact">
      <img
        src={avatar}
        className="avatar"
        alt=""
      />
      <div>
        <h4 className="name">{name}</h4>
        <p className="status status-text status-online">{status}</p>
      </div>
    </div>
  );
}

export default Contact;
