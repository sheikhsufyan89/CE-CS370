import { FaGithub, FaTwitter } from "react-icons/fa";

export default function UserProfile(props) {
  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
        padding: "25px",
        borderRadius: "10px",
        border: "2px solid black",
        margin: "15px",
        width: "350px",
      }}
    >
      <h2>{props.name}</h2>

      <p>
        <strong>Role:</strong> {props.role}
      </p>

      <p>
        <strong>Age:</strong> {props.age}
      </p>

      <p>
        <strong>Bio:</strong> {props.bio}
      </p>

      {props.isOnline ? (
        <p style={{ fontWeight: "bold" }}>● Online</p>
      ) : (
        <p style={{ color: "gray", fontWeight: "bold" }}>● Offline</p>
      )}

      <div>
        <strong>Socials:</strong>

        <ul>
          <li>
            <FaGithub /> GitHub: {props.socials.github}
          </li>

          <li>
            <FaTwitter /> Twitter: {props.socials.twitter}
          </li>
        </ul>
      </div>
    </div>
  );
}
