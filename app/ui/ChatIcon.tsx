"use client";

import { useEffect } from "react";

const ChatIcon = () => {
  useEffect(() => {
    // Create chatbot container div if it doesn't exist
    if (!document.getElementById("aichatbot")) {
      const div = document.createElement("div");
      div.id = "aichatbot";
      document.body.appendChild(div);
    }

    // Ensure the script logic is added on the client side
    (function (
      w: Window & { chatbotConfig?: [string, string, { apiHost: string }] },
      d,
      s,
      ...args
    ) {
      // Assign chatbotConfig to window
      w.chatbotConfig = args as [string, string, { apiHost: string }];
      // Locate the first script tag and insert the chatbot script
      const f = d.getElementsByTagName(s)[0];
      const j = d.createElement(s) as HTMLScriptElement;
      j.defer = true;
      j.type = "module";
      j.src = "https://aichatbot.sendbird.com/index.js";
      f.parentNode?.insertBefore(j, f);
    })(
      window,
      document,
      "script",
      "0ACAF912-3DFF-4C62-AF09-6D54B8A1B695",
      "onboarding_bot",
      {
        apiHost:
          "https://api-0ACAF912-3DFF-4C62-AF09-6D54B8A1B695.sendbird.com",
      }
    );

    return () => {
      // Cleanup: Remove chatbot script but keep div
      const chatbotScript = document.querySelector(
        'script[src="https://aichatbot.sendbird.com/index.js"]'
      );
      if (chatbotScript) chatbotScript.remove();
    };
  }, []);
  return <div />;
};

export default ChatIcon;
