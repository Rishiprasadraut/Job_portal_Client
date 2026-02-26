import React from 'react'

const Loading = () => {
  return (
   <div className="min-h-screen flex items-center justify-center" role="status">
      <div className="w-20 h-20 border-4 border-gray-300 border-t-4 border-t-blue-400 rounded-full animate-spin"></div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Loading;
