import React, { useState, useEffect } from 'react';

const useTypewriter = (phrases, baseTypingSpeed = 150, pauseDelay = 1500) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(baseTypingSpeed);

  const handleTyping = React.useCallback(() => {
    const i = loopNum % phrases.length;
    const fullPhrase = phrases[i];

    if (!isDeleting) {
      // Typing
      setText(fullPhrase.substring(0, text.length + 1));
      setTypingSpeed(baseTypingSpeed);
      if (text === fullPhrase) {
        // Pause at end of text
        setTimeout(() => setIsDeleting(true), pauseDelay);
      }
    } else {
      // Deleting
      setText(fullPhrase.substring(0, text.length - 1));
      setTypingSpeed(baseTypingSpeed / 2); // delete faster
      if (text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    }
  }, [text, isDeleting, loopNum, phrases, baseTypingSpeed, pauseDelay]);

  useEffect(() => {
    let timer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [handleTyping, typingSpeed]);

  return text;
};

export default useTypewriter;
