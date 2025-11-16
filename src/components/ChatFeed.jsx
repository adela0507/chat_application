import React from "react";
import { Channel } from "@sendbird/uikit-react";

const ChatFeed = () => {
  return (
    <Channel
      onMessageReceived={(channel, message) => {
        new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play();
      }}
    />
  );
};

export default ChatFeed;
