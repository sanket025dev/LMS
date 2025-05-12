import React, { useState } from 'react'

const LanguageSelect = () => {

    const files = {
        "Python":{
        name: 'Python',
        language:'Python',
        value:'print("Hello World")'
        },
        "Javascript":{
            name:'Javascript',
            language:'Javascript',
            value:'let print = 50'
        }
    }
    

    const [fileName, setFileName] = useState('Python')
    const file = files[fileName];

  return (
    <>
    <div className='w-1/2 flex flex-col ml-5 mt-3'>
      <div>
        <h3 className='text-xl'>Languages</h3>
      </div>
      <div className='mt-3'>
        <button onClick={() => setFileName('Python')}  className='bg-orange-600 py-2 px-3 mr-5 rounded text-sm text-white'>Python</button>
        <button onClick={() => setFileName('Javascript')} className='bg-blue-600 py-2 px-3 rounded text-sm text-white'>Javascript</button>
      </div>
    </div>
    </>
  );
}

export default LanguageSelect