import React, { useState } from 'react';
import { AiOutlineMessage } from 'react-icons/ai'; // Importing the react icon for the button
import Robotimage from './Robotimage'; // Assuming Robotimage is a component rendering the robot image

const App = () => {
  const [name, setName] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showLoveMessage, setShowLoveMessage] = useState(false);
  const [showOnceAgainMessage, setShowOnceAgainMessage] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false); // New state variable to control the visibility of the final message

  const handleNameSubmit = () => {
    if (name.toLowerCase() === 'laiza') {
      setShowConfirmation(true);
    } else {
      alert('What a waste, get out of this link and delete it!!!');
    }
  };

  const handleConfirmation = (response) => {
    if (response === 'yes') {
      setShowLoveMessage(true);
    } else {
      alert('Oi dear, click yes gud oii!! I love you!');
    }
  };

  const handleYesButtonClick = () => {
    setShowLoveMessage(false); 
    setShowOnceAgainMessage(true);
  };

  const handleFinalMessageClick = () => {
    setShowFinalMessage(true); // Show the final message when the button is clicked
  };

  const handleNoButtonClick = () => {
    alert("You said 'No', but I won't take that for an answer!");
  };

  return (
    <div className="container mx-auto mt-10 flex flex-col justify-center items-center h-screen text-3xl">
      <Robotimage />
      {!showConfirmation && !showLoveMessage && (
        <div>
          <p>Hi, I'm <strong>hikarubot</strong>. What is your <strong>first name?</strong></p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-400 p-2 mt-2"
          />
          <button
            onClick={handleNameSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded mx-2"
          >
            Submit
          </button>
        </div>
      )}
      {showConfirmation && !showLoveMessage && (
        <div>
          <p>My goshhh!! Your name is <strong>Laiza</strong>, right?</p>
          <div className="mt-2">
            <button
              onClick={() => handleConfirmation('yes')}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-4 rounded"
            >
              Yes
            </button>
            <button
              onClick={() => handleConfirmation('no')}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              No
            </button>
          </div>
        </div>
      )}
    {showLoveMessage && (
  <div className="flex flex-col justify-center items-center">
    <p>Ohh my gosh, are you my <strong> master's Girlfriend?</strong></p>
    <div className="mt-2">
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-4 rounded"
        onClick={handleYesButtonClick}
      >
        Yes
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleNoButtonClick}
      >
        No
      </button>
    </div>
  </div>
)}

{showOnceAgainMessage && (
  <div className="flex flex-col justify-center items-center">
    <p className="mt-4">
      Once again our master wife the <strong>Queen of beauty</strong>, I am <strong>hikarubot</strong> the master lovely system. This is my last mission. 
      A message that my master gives to me. <span className='italic text-red-600 text-[20px]'>"click the icons message"</span>
      <br /><br />
      <button className="mt-4 text-black font-bold py-2 px-4 rounded ml-[500px]" onClick={handleFinalMessageClick}>
        <AiOutlineMessage size={100} className="mr-2" />
      </button>
    </p>
  </div>
)}
      {showFinalMessage && (
        <div className="flex flex-col justify-center items-center">
          <p className="mt-4 italic font-bold">
            "Hi Dear, I just wanted to take a moment to thank you for all the love and support you've given me. You mean the world to me, and I'm so grateful to have you by my side. 
            Let's keep building our beautiful journey together, one step at a time. I love you endlessly."
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
