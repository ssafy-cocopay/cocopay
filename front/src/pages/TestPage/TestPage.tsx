import React, { useEffect } from "react";
import ParticleMove from "../PayOnlineCompletePage/ParticleMove";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { onBackgroundMessage } from "firebase/messaging/sw";


const TestPage = () => {

  return (
    <>
      <ParticleMove></ParticleMove>
    </>
  );
};

export default TestPage;
