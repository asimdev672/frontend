import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillChatDotsFill } from "react-icons/bs";
import CompA5 from "./components/CompA5";
import CompA6 from "./components/CompA6";
import CompA7 from "./components/CompA7";
import CompA8 from "./components/CompA8";
import { useState } from "react";
import Chat from "./components/Chat";
function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <ToastContainer />
      <div className="">
        <h1>Annex A</h1>
        <CompA5 />
        <br />
        <CompA6 />
        <br />
        <CompA7 />
        <br />
        <CompA8 />
      </div>
      {show ? (
        <div className="chatBox">
          <Chat />
        </div>
      ) : (
        ""
      )}
      <div className="chat-main">
        <BsFillChatDotsFill
          className="chat-ico"
          onClick={() => setShow(!show)}
        />
      </div>
    </>
  );
}

export default App;
