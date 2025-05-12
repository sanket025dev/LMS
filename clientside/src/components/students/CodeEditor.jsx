import React, { useRef, useState } from 'react'
import Editor from '@monaco-editor/react';
import OutputCode from './OutputCode';

const files = {
    "Python":{
    name: 'Python', language:'Python', value:'print("Hello World")'
    },
    "Javascript":{
    name:'Javascript', language:'Javascript', value:'let print = 50'
    }
}

const CodeEditor = () => {

    const [fileName, setFileName] = useState("Python")
    const [value, setValue] = useState("")
    const editorRef = useRef();
    const file = files[fileName];

    function onMount (editor, monaco){
        editorRef.current = editor;
    }

  return (
    <>
    <div className='flex flex-row'>
    <div className='w-1/2 flex-col ml-5 mt-3'>
      <div>
        <h3 className='text-xl'>Languages</h3>
      </div>
      <div className='mt-3 mb-3'>
        <button onClick={() => setFileName("Python")}  className='bg-orange-600 py-2 px-3 mr-5 rounded text-sm text-white'>Python</button>
        <button onClick={() => setFileName('Javascript')} className='bg-blue-600 py-2 px-3 rounded text-sm text-white'>Javascript</button>
      </div>
      <Editor
          height="75vh"
          theme='vs-dark'
          defaultLanguage={file.language}
          defaultValue={file.value}
          onMount={onMount}
          path={file.name}
          value={value}
          onChange={(value)=>setValue(value)}
        />
    </div>
      <OutputCode editorRef={editorRef} fileName={fileName}/>
      </div>
    </>
  );
}

export default CodeEditor