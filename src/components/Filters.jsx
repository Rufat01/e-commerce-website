import { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const Filters = () => {
  const [item, setItem] = useState(null);

  const handleOption = (e) => {
    setItem(e.value);
  };

  console.log(item);

  return (
    <div className="flex items-center justify-center mb-10 mt-10 gap-20 sm:gap-5 sm:px-5 sm:flex-col">
      <Select className='w-40 sm:w-full' onChange={handleOption} options={options} />
      <Select className='w-40 sm:w-full' onChange={handleOption} options={options} />
      <Select className='w-40 sm:w-full' onChange={handleOption} options={options} />
    </div>
  );
};

export default Filters;
