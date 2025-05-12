import React, {useState} from 'react'
// import { executeCode } from './api';

const OutputCode = () => {
// {editorRef, fileName}
  // const [output, setOutput] = useState(null)

  // const runCode = async() => {
  //     const sourceCode = editorRef.current.getValue();
  //     if (!sourceCode) return;
  //     try {
  //       const {run:result} = await executeCode(fileName,sourceCode)
  //       setOutput(result.output)
  //     }catch (error){ }
  // };

  return (
    <>
      <div className="h-75 w-1/2 bg-gray-800 flex flex-col">
        <h3 className='text-xl bg-white pt-3'>Output</h3>
        <div className='bg-white py-3'>
          {/* onClick={runCode} */}
          <button  className= 'border border-orange-500 text-orange-500 py-2 px-4 mr-5 rounded hover:underline'>Run Code</button>
        </div>
        <div className='text-gray-400 px-2'>
            <p>
              Click Run Code for the output
            </p>
        </div>
      </div>
        
    </>
  );
}

export default OutputCode