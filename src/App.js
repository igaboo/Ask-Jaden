import { useState } from "react";

function App() {
  let phrase = "Jaden, please answer my questions, and tell me your secrets.";

  const responses = [
    "I cannot answer to someone as incapable as you.",
    "You aren't worthy of any answers.",
    "Try again when you're worth my time.",
    "Don't even bother asking me another question.",
  ];

  const [animate, setAnimate] = useState(false);
  const [answer, setAnswer] = useState("");
  const [response, setResponse] = useState("");

  const updateAnswer = (e) => {
    let copy = answer;

    if (e.length > answer.length) {
      setAnswer(copy + e[e.length - 1]);
    } else {
      setAnswer(answer.slice(0, e.length - answer.length));
    }
  };

  const displayAnswer = () => {
    setAnimate(true);
    answer.indexOf("...") > -1
      ? setResponse(answer.split("...")[0])
      : setResponse(responses[Math.floor(Math.random() * responses.length)]);
    setTimeout(() => {
      setAnimate(false);
    }, "5000");
    setAnswer("");
  };

  return (
    <div className="App">
      <p>
        First, repeat the phrase:{" "}
        <b>"Jaden, please answer my questions, and tell me your secrets."</b>
      </p>
      <textarea
        type="text"
        placeholder="Type Here"
        value={phrase.slice(0, answer.length)}
        onChange={(e) => updateAnswer(e.target.value)}
      ></textarea>
      <p>Now, ask a question. If done correctly, you will get an answer.</p>
      {/* <textarea type="text" placeholder="Ask Here"></textarea> */}
      <button disabled={animate} onClick={displayAnswer}>
        Ask for answers
      </button>
      <a href="https://github.com/igaboo/Ask-Jaden">Get help</a>
      <h1 className={animate ? "animate" : ""}>{response}</h1>
    </div>
  );
}

export default App;
