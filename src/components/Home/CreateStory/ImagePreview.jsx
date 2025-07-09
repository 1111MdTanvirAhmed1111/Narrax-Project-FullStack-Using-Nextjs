import React, { useState } from 'react';

const ImagePreview = () => {
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImageSrc(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-white shadow-md w-full max-w-md mx-auto mt-10">
      <label
        htmlFor="imageInput"
        className="cursor-pointer bg-gradient-to-r from-red-500 to-pink-500 text-white px-5 py-2 rounded-lg shadow hover:scale-105 transition duration-300 ease-in-out"
      >
        {imageSrc ? 'Change Image' : 'Upload Image'}
      </label>
      <input
        type="file"
        id="imageInput"
        accept="image/*"
        name="image"
        onChange={handleImageChange}
        className="hidden"
      />
      {imageSrc && (
        <div className="mt-6">
          <img
            src={imageSrc}
            alt="Preview"
            className="max-w-full max-h-80 rounded-lg border border-gray-200 shadow"
          />
        </div>
      )}
    </div>
  );
};

export default ImagePreview;