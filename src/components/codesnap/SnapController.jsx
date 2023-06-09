import React from 'react'

const SnapController = ({setCodeString,setsnapBgIndex,setPadding,setTheme,handleScreenshotClick,theme}) => {
  return (
    <div
    className="bg-gray-800 rounded-lg p-4 flex justify-between text-white font-mono text-sm my-3 drop-shadow-xl flex-wrap gap-2"
    style={{ width: "40vw", margin: "1rem auto" }}
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
    
    <select
      name="theme"
      id="theme"
      className="py-1 px-3 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 outline-none"
      onChange={(e) => {
        setsnapBgIndex(parseInt(e.target.value));
      }}
    >
      <option className="text-gray-500" value={0}>
        Theme 1
      </option>
      <option className="text-gray-500" value={1}>
        Theme 2
      </option>
      <option className="text-gray-500" value={2}>
        Theme 3
      </option>
      <option className="text-gray-500" value={3}>
        Theme 4
      </option>
    </select>

    <select
      name="padding"
      id="padding"
      className="py-1 px-3 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 outline-none"
      onChange={(e) => {
        setPadding(e.target.value);
      }}
    >
      <option className="text-gray-500" value={"16px"}>
        16
      </option>
      <option className="text-gray-500" value={"32px"}>
        32
      </option>
      <option className="text-gray-500" value={"64px"}>
        64
      </option>
      <option className="text-gray-500" value={"128px"}>
        128
      </option>
    </select>

      <div className="flex items-center justify-center gap-2 text-base">
      <p>Light Mode</p>
      <input value={''} type="checkbox" name="darkmodecheck" id="darkmodecheck"  cclassName="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 outline-none" onChange={(e)=>{
            theme==="dark"?setTheme("light"):setTheme("dark")
      }}/>
      </div>


    <button
      className="py-1 px-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 mx-2"
      onClick={handleScreenshotClick}
    >
      Export
    </button>
  </div>
  )
}

export default SnapController