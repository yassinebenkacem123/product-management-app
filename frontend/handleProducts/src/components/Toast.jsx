import React, { useEffect, useContext } from 'react';
import { ProductContext } from '../App';

const Toast = () => {
  const { serverMessage, setServerMessage } = useContext(ProductContext);

  useEffect(() => {
    let timer;
    if (serverMessage.message) {
      timer = setTimeout(() => {
        setServerMessage({ message: '', success: false });
      }, 1500); 
    }
    
    return () => clearTimeout(timer);
  }, [serverMessage.message, setServerMessage]);
  return (
    serverMessage.message && (
      <div 
        className={`p-4 absolute top-24 right-6 w-64 min-h-[4rem] flex items-center justify-between 
          rounded-lg border border-opacity-20 text-white shadow-lg backdrop-blur-sm
          transition-all duration-300 transform
          ${serverMessage.success 
            ? 'bg-gradient-to-br from-green-600 to-green-500 border-green-200' 
            : 'bg-gradient-to-br from-red-600 to-red-500 border-red-200'
          }
          animate-slide-in-right`}
      >
        <div className="w-6 h-6 mr-3 flex items-center justify-center">
          {serverMessage.success ? (
            <svg className="w-5 h-5 text-green-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
            </svg>
          ) : (
            <svg className="w-5 h-5 text-red-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
          )}
        </div>
  
        <p className="flex-1 text-sm font-medium text-gray-50">
          {serverMessage.message}
        </p>
  
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black/10">
          <div className={`h-full ${serverMessage.success ? 'bg-green-200' : 'bg-red-200'} 
            animate-progress`} 
          />
        </div>
      </div>
    )
  );
};

export default Toast;