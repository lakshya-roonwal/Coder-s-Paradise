import React, { useState,useRef  } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import html2canvas from 'html2canvas';

const CodeSnap = () => {

  // Here you can change the background of the text by assigning an array of colors to this state
  const [snapBg, setSnapBg] = useState(["#93c5fd", "#1d4ed8"]);

  const [codeString, setCodeString] = useState(
    `Paste Your Code From the button above`
  );

  const codeContainerRef = useRef(null);

  // To create Image of the div that contains the code
  const handleScreenshotClick = () => {
    const codeContainer = codeContainerRef.current;

    html2canvas(codeContainer).then((canvas) => {
      // Convert canvas to an image file
      const dataURL = canvas.toDataURL();
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'code_screenshot.png';
      link.click();
    });
  };


  return (
    <>
      <div class="py-8 px-4 mx-auto max-w-screen-lg min-w-screen-lg lg:py-16 lg:px-6 ">
        <div
          className="bg-gray-800 rounded-lg p-4 flex justify-between text-white font-mono text-sm my-3 drop-shadow-xl"
          style={{ width: "60vw", margin: "1rem auto" }}
        >
          <button
            className="py-1 px-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 mx-2"
            onClick={async () => {
              const clipText = await navigator.clipboard.readText();
              setCodeString(clipText);
            }}
          >
            Paste Code
          </button>
          <button className="py-1 px-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 mx-2"
          onClick={handleScreenshotClick}
          >
            Export
          </button>
        </div>

        <div
          ref={codeContainerRef}
          className={`px-[4rem] p-4`}
          style={{
            background: `linear-gradient(135deg,  ${snapBg[0]} 0%,${snapBg[1]} 100%)`,
          }}
        >
          <div className="bg-gray-800 rounded-lg p-4 text-white font-mono text-sm">
            <div className="flex justify-start align-center mb-2 p-2">
              <div className="flex gap-1" style={{ width: "5%" }}>
                <div className="bg-red-500 w-[10px] h-[10.66px] rounded-full" />
                <div className="bg-yellow-500 w-[10px] h-[10.66px] rounded-full" />
                <div className="bg-green-500 w-[10px] h-[10.66px] rounded-full" />
              </div>
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
              <pre className="flex-1 text-gray-400 my-2">
                <SyntaxHighlighter
                  language="javascript"
                  style={atomOneDark}
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
