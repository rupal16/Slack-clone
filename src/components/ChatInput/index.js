import React, { useState } from "react";
import { useStateValue } from "../../stateProvider";
import firebase from "firebase";

import "./style.css";
import db from "../../config/firebase";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const submitMessage = (e) => {
    e.preventDefault();
    console.log(user);
    console.log("submitted msg");
    console.log(channelId);

    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImg: user.photoURL,
      });
    }
    setInput("");
  };

  return (
    <div className="chatinput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName?.toLowerCase()}`}
        ></input>
        <button type="submit" onClick={submitMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
