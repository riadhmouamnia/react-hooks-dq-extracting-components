import React from "react";

function SideNav({ contacts }) {
  return (
    <nav>
      <h2>Contacts</h2>
      <ul className="contacts">
        {contacts.map(({ name, id }) => (
          <li
            key={id}
            className={`contact ${name === "Pamela" ? "active" : ""}`}
          >
            <div className="icon">{name[0]}</div>
            {name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideNav;
