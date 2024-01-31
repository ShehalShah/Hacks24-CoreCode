import React, { useState } from "react";

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log("Uploading file:", selectedFile);
    } else {
      console.warn("No file selected for upload.");
    }
  };
  return (
    <div className="flex h-screen">
      <div className="flex flex-col flex-1 w-full overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="container mx-auto mt-10">
            <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
              <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
              <div className="mb-4">
                <label
                  htmlFor="videoFile"
                  className="block text-sm font-medium text-gray-700"
                >
                  Choose a video file:
                </label>
                <input
                  type="file"
                  id="videoFile"
                  accept="video/*"
                  onChange={handleFileChange}
                  className="mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <button
                onClick={handleUpload}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Upload Video
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;