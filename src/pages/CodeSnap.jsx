import React, { useState, useRef } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDark,
  docco,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import html2canvas from "html2canvas";
import macHeadImag from "../assets/codesnap/machead.png";
import SnapController from "../components/codesnap/SnapController";

const CodeSnap = () => {
  // Here you can change the background of the text by assigning an array of colors to this state
  const [snapBg, setSnapBg] = useState([
    {
      color1: "#9daeff",
      color2: "#7debd7",
    },
    {
      color1: "#22c1c3",
      color2: "#fdbb2d",
    },
    {
      color1: "#4cc9ae",
      color2: "#fff9bf",
    },
    {
      color1: "#ecd8d8",
      color2: "#af9da5",
    },
  ]);
  const [snapBgIndex, setsnapBgIndex] = useState(0);
  const [theme, setTheme] = useState("dark");
  const [padding, setPadding] = useState("16px")
  const [codeString, setCodeString] = useState(`Paste Your Code From the button above`);

  const codeContainerRef = useRef(null);

  // To create Image of the div that contains the code
  const handleScreenshotClick = () => {
    const codeContainer = codeContainerRef.current;

    html2canvas(codeContainer).then((canvas) => {
      // Convert canvas to an image file
      const dataURL = canvas.toDataURL();
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "code_screenshot.png";
      link.click();
    });
  };

  return (
    <>
    <style>
      
    </style>
      <div class="py-8 px-4 mx-auto max-w-screen-lg min-w-screen-lg lg:py-16 lg:px-6 ">
        <SnapController 
          setCodeString={setCodeString}
          setsnapBgIndex={setsnapBgIndex}
          setPadding={setPadding}
          setTheme={setTheme}
          theme={theme}
          handleScreenshotClick={handleScreenshotClick}
        />
        <div
          ref={codeContainerRef}
          style={{
            background: `linear-gradient(135deg,  ${snapBg[snapBgIndex].color1} 0%,${snapBg[snapBgIndex].color2} 100%)`,
            padding:padding
          }}
        >
          <div className={"rounded-lg p-4 text-white font-mono text-sm shadow-lg " + (theme === "dark" ? "bg-gray-800" : "bg-white")}>
            <div className="flex justify-start align-center mb-2 p-2">
              <img src={macHeadImag} width={"55px"} alt="" />
              <div
                style={{ width: "95%" }}
                className="text-center text-slate-400"
              >
                <p
                  contentEditable={true}
                  className="outline-none"
                  spellCheck={false}
                >
                  Untitled.js
                </p>
              </div>
            </div>
            <div className="flex">
              <pre className="flex-1 text-gray-400 my-2"
              >
                <SyntaxHighlighter
                  language="jsx"
                  style={theme === "dark" ? atomOneDark : docco}
                  wrapLongLines
                >
                  {codeString}
                </SyntaxHighlighter>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeSnap;
