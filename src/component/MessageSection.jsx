import React, { useRef, useState } from 'react';
import Navbar2 from './Navbar2';

const MessageSection = () => {
  const inputRef = useRef(null); // Use ref to manage input
  const [messages, setMessages] = useState([]); // State to store messages

  function sendMessage(event) {
    event.preventDefault(); // Prevent form submission
    const messageText = inputRef.current.value;

    if (messageText.trim() !== "") {
      setMessages([...messages, messageText]); // Update messages state
      inputRef.current.value = ""; // Clear input field
    }
  }

  return (
    <> 
    <Navbar2
    title='NanoNest'   
    msg='Message'   
    notification='Notification'
    menu='Menu'
    button ='Profile'
    />
      <div className="list-group container">
        <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small>3 days ago</small>
          </div>
          <p className="mb-1">Some placeholder content in a paragraph.</p>
          <small>And some small print.</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small className="text-body-secondary">3 days ago</small>
          </div>
          <p className="mb-1">Some placeholder content in a paragraph.</p>
          <small className="text-body-secondary">And some muted small print.</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small className="text-body-secondary">3 days ago</small>
          </div>
          <p className="mb-1">Some placeholder content in a paragraph.</p>
          <small className="text-body-secondary">And some muted small print.</small>
        </a>
      </div>

      {/* __________________Offcanvas of Personal Message #chat____________ */}
      <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="staticBackdropLabel">Chat Messages</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="message-area">
            {messages.length === 0 ? (
              <p>No messages yet</p>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className="message sent">
                  <p><strong>You:</strong> {msg}</p>
                </div>
              ))
            )}
          </div>

          <form className="d-flex" onSubmit={sendMessage}>
            <input className="form-control me-2 mt-auto" ref={inputRef} type="text" placeholder="Type your message here..." aria-label="Type message here" />
            <button className="btn btn-outline-warning" type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MessageSection;
