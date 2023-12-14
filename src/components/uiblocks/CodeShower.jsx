import { useEffect, useRef, useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FaRegClipboard } from "react-icons/fa6";
import { MdDone } from "react-icons/md";

const CodeShower = ({code}) => {
    const [isCopied, setIsCopied] = useState(false)
    console.log(atomOneDark)
    const codeRef = useRef(null);
    const handleCopyCode=(code)=>{
        navigator.clipboard.writeText(code);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false)
        }, 2000);
    }
  return (
    <div className={`bg-gray-800 rounded-lg p-2`}>
    <div className='flex justify-between p-2'>
    <p className='text-gray-400'>HTML</p>
      <button  
      className='text-white'
        onClick={()=>{
            handleCopyCode(code);
        }}>
        {isCopied?
        <div className="flex items-center">
            <MdDone/>Copied
        </div>
        :<div className="flex items-center"><FaRegClipboard/>Copy</div>
        }
      </button>
    </div>
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeShower;
