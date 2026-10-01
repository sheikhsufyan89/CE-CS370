// import { useState } from "react";
// import { FaGithub, FaTwitter } from "react-icons/fa";
// import "./App.css";
// import UserProfile from "./components/UserProfile";

// function Greeting({ name, age }) {
//   return (
//     <h2 style={{ backgroundColor: "lightblue" }}>
//       Hello {name}, you are {age} years old!
//     </h2>
//   );
// }

// function Book(props) {
//   return (
//     <h2 style={{ backgroundColor: "lightgreen" }}>
//       Book title: {props.title}, Author: {props.author}
//     </h2>
//   );
// }

// function YourCar({ color, brand, ...rest }) {
//   return (
//     <h2 style={{ backgroundColor: "lightgray" }}>
//       Your {brand} {rest.Book} is {color}
//       Registration: {rest.registration}
//     </h2>
//   );
// }

// function MyCar({ color = "blue", brand }) {
//   return (
//     <h2 style={{ backgroundColor: "lightyellow" }}>
//       My car is a {color} {brand}
//     </h2>
//   );
// }

// function App() {
//   return (
//     <div className="app-layout">
//       {/* <Greeting name="Alice" age={25} />
//       <Book title="1984" author="George Orwell" />
//       <YourCar color="red" brand="Toyota" Book="Camry" registration="ABC123" />
//       <MyCar brand="Honda" />
//       <li>
//         <FaGithub />

//       </li>
//       <li>
//         <FaTwitter />

//       </li> */}
//       <UserProfile />
//     </div>
//   );
// }

// export default App;

import "./App.css";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className="app-layout">
      <h1>User Profiles</h1>

      <div className="profiles">
        <UserProfile
          name="Sarah Jenkins"
          role="Frontend Engineer"
          age={28}
          isOnline={true}
          bio="Passionate about building responsive web applications."
          socials={{
            github: "@sarahj",
            twitter: "@sarah_dev",
          }}
        />

        <UserProfile
          name="Alex Rivera"
          role="UI/UX Designer"
          age={32}
          isOnline={false}
          bio="Designing clean interfaces and user experiences."
          socials={{
            github: "@arivera",
            twitter: "@arivera_design",
          }}
        />

        <UserProfile
          name="Chen Wei"
          role="Backend Developer"
          age={25}
          isOnline={true}
          bio="Node.js and database performance fanatic."
          socials={{
            github: "@chenw",
            twitter: "@chen_codes",
          }}
        />
      </div>
    </div>
  );
}

export default App;
