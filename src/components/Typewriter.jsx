import React, { useState, useEffect } from "react";

const Typewriter = ({
  staticText,
  words,
  typeSpeed = 100,
  pauseTime = 1500,
}) => {
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => { 
    let timer;
      const currentWord = words[loopNum % words.length];
      const handleTyping = () => {
      setText((prev) => currentWord.substring(0, prev.length + 1));
      if (text === currentWord) {
          timer = setTimeout(() => {
            setText(""); 
            setLoopNum((prev) => prev + 1);
          }, pauseTime);
        } else {
          timer = setTimeout(handleTyping, typeSpeed);
        }
    };

    timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  },
  [text, loopNum, words, typeSpeed, pauseTime]);
  return (
    <span className="typewriter">
      {staticText} <span>{text}</span>
      <span className="typewriter-cursor">|</span>
    </span>
  );
};

export default Typewriter;
