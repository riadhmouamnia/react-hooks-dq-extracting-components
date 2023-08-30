import React from "react";
import Message from "./Message";
import Form from "./Form";

function MainContent({ messages }) {
  return (
    <main>
      <h2>Messages</h2>
      <section className="messages">
        <ul>
          {messages.map(({ id, type, name, content }) => (
            <Message key={id} type={type} name={name} content={content} />
          ))}
        </ul>
      </section>
      <Form />
    </main>
  );
}

export default MainContent;
