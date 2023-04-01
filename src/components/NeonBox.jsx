import React from 'react';

const NeonBox = ({ number, name }) => {
  return (
    <div className=" flex items-center justify-center px-4">
      <div className="bg-black p-8 rounded-lg text-center font-bold border-4 border-pink-500 border-solid shadow-neon">
        <div class="text-[#12c0f1] text-6xl">{number}</div>
        <div class="text-[#12c0f1] text-2xl pt-4">{name}</div>
      </div>
    </div>
  );
};

export default NeonBox;