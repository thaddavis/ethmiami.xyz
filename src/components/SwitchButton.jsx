import React, { useState } from 'react';
import Toggle from './Toggle';

const SwitchButton = ({ onToggle }) => {
  const [isProduction, setIsProduction] = useState(false);

  const handleToggle = (event) => {
    setIsProduction(event.target.checked);
    onToggle(event.target.checked);
  };

  return (
    <div className="flex items-center py-6">
      <p className="mr-2 text-[#e32970]">Goerli Testnet</p>
      <Toggle checked={isProduction} onChange={handleToggle} />
      <p className="ml-2 text-[#e32970]">Ethereum Mainnet</p>
    </div>
  );
};

export default SwitchButton;
