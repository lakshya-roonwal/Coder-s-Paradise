import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeSnap = () => {
  const codeString = `import React from 'react'
    import { Link } from 'react-router-dom'
    const ToolCard = () => {
      return (
              <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

              </article> 
      )
    }
    
    export default ToolCard`;
  return (
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div className="bg-gray-900 rounded-lg p-4 text-white font-mono text-sm">
        <div className="flex justify-start align-center mb-2 p-2">
          <div className="flex gap-1">
            <div className="bg-red-500 w-3 h-3 rounded-full" />
            <div className="bg-yellow-500 w-3 h-3 rounded-full" />
            <div className="bg-green-500 w-3 h-3 rounded-full" />
          </div>
        </div>
        <div className="flex">
          <pre className="flex-1 text-gray-400 overflow-x-auto my-2">
            <code>
              <SyntaxHighlighter
                language="javascript"
                style={atomOneDark}
                showLineNumbers
                wrapLines
              >
                {codeString}
              </SyntaxHighlighter>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeSnap;
