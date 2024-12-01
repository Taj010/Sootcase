
import React from 'react';
import InteractivePacking from './PackingList';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="bg-blue-500 text-white p-4 text-center">
            <h1 className="text-3xl font-bold">🧳 Pack Like a Pro 🌍</h1>
          </div>
          <InteractivePacking />
        </div>
      </div>
    </div>
  );
}

export default App;
