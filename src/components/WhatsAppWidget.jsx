import React, { useEffect } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../assets/images/site-logo.svg";

const WhatsAppWidget = () => {
  const phoneNumber = "917018158742";
  const message = "Hi, I'm from your company's website.";

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const chatBox = document.querySelector(".floating-whatsapp-chatbox");
      if (chatBox && !chatBox.querySelector(".custom-chat-btn")) {
        const btn = document.createElement("button");
        btn.innerText = "Chat Now";
        btn.className =
          "custom-chat-btn bg-green-500 text-white font-semibold py-5 px-5 rounded-lg mt-3 hover:bg-green-600 transition-all duration-300";
        btn.onclick = () => {
          window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
        };
        chatBox.appendChild(btn);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <FloatingWhatsApp
      phoneNumber={phoneNumber}
      accountName="Perfect Web Services"
      chatMessage="Hi there welcome to Perfect Web Services!"
      avatar= {logo}
      statusMessage="Online"
      placeholder="" 
      allowEsc
      allowClickAway
      notification
      notificationSound
      className="custom-whatsapp-popup"
    />
  );
};

export default WhatsAppWidget;
