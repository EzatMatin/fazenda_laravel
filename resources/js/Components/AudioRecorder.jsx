import React, { useState } from 'react';
import { BiMicrophone, BiStopwatch, BiSend } from 'react-icons/bi';
import Recorder from 'recorder-js';

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);

  let recorder = null;

  const startRecording = async () => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const input = audioContext.createMediaStreamSource(stream);
      recorder = new Recorder(input);

      recorder.start();

      setIsRecording(true);
    } catch (error) {
      console.error('Error starting audio recording:', error);
    }
  };

  const stopRecording = () => {
    if (recorder) {
      recorder.stop();
      recorder.exportWAV((blob) => {
        setAudioBlob(blob);
      });
      recorder.clear();
      recorder.destroy();
      recorder = null;
    }

    setIsRecording(false);
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const handleSave = () => {
    // Save audioBlob to the database
    if (audioBlob) {
      // Implement your logic to save the audioBlob to the database
      console.log('Audio saved:', audioBlob);
    }
  };

  const buttonIcon = isRecording ? <BiStopwatch /> : audioBlob ? <BiSend /> : <BiMicrophone />;

  return (
    <div className="audio-recorder">
      <button onClick={toggleRecording}>{buttonIcon}</button>
      <button onClick={handleSave} disabled={!audioBlob}>
        Save
      </button>
    </div>
  );
};

export default AudioRecorder;
