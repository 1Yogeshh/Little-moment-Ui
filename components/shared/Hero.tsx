import React from 'react';

const Hero = () => {
  return (
    <div className='w-4/5'>

    <div className='h-[2px] w-full bg-zinc-300'></div>

    <div className="w-full pl-6 pr-64 pt-4">

      {/* Book Ticket Heading */}
      <h1 className="text-2xl font-bold mb-6">Book tickets</h1>

      {/* Customer and Booking Details */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2">Customer Name</label>
          <input
            type="text"
            placeholder="Enter Customer Name"
            className="w-full p-2 border rounded-md outline-none border-zinc-100 bg-zinc-100 "
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Booking Amount</label>
          <input
            type="text"
            value="₹ 4999"
            disabled
            className="w-full p-2 border border-zinc-100 rounded-md bg-zinc-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Customer Phone Number</label>
          <input
            type="text"
            placeholder="Enter Customer Phone Number"
            className="w-full p-2 border rounded-md border-zinc-100 bg-zinc-100 outline-none "
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Discount</label>
          <input
            type="text"
            value="₹ 499"
            disabled
            className="w-full p-2 border border-zinc-100 rounded-md bg-zinc-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Source</label>
          <select className="w-full p-2 border rounded-md text-gray-400 outline-none border-zinc-100 bg-zinc-100">
            <option>Select Discovery source from list</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Tax Amount</label>
          <input
            type="text"
            value="₹ 99"
            disabled
            className="w-full p-2 border border-zinc-100 rounded-md bg-zinc-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Product</label>
          <select className="w-full p-2 border rounded-md text-gray-400 outline-none border-zinc-100 bg-zinc-100">
            <option>Select Product from list</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Total Amount to be Paid</label>
          <input
            type="text"
            value="₹ 4599"
            disabled
            className="w-full p-2 border border-zinc-100 rounded-md bg-zinc-100"
          />
        </div>
      </div>

      {/* Venue and Date Section */}
      <div className="w-1/2">
        <div>
          <label className="block text-sm font-medium mb-2">Venue</label>
          <select className="w-full p-2 mb-4 border rounded-md outline-none text-gray-400 border-zinc-100 bg-zinc-100">
            <option className=''>Select Venue from list</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Date & Time</label>
          <select className="w-full p-2 mb-4 border rounded-md outline-none text-gray-400 border-zinc-100 bg-zinc-100">
            <option>Select Date & Time from list</option>
          </select>
        </div>
      </div>

      {/* Product List Section */}
      <div className="mb-6 w-1/2">
        <label className="block text-sm font-medium mb-4">Product</label>
        <div className="bg-white p-4 border rounded-md mb-4 flex justify-between items-center">
          <div>
            <p className="font-bold mb-2">Package 1</p>
            <p className="text-sm text-black mb-2">These include Wi-Fi, <br></br>laundry/dry cleaning, travel<br></br> desk, and room service.</p>
            <p className="font-bold mt-2">₹ 499</p>
          </div>
          <input
            type="number"
            min="0"
            className="w-12 h-12 pl-3 text-center flex  border rounded-md bg-[#35e3a4] text-black items-center justify-center"
            value="0"
          />
        </div>

        <div className="bg-white p-4 border rounded-md flex justify-between items-center">
          <div>
            <p className="font-bold mb-2">Package 2</p>
            <p className="text-sm text-black mb-2">These include Wi-Fi,<br></br> laundry/dry cleaning, travel<br></br> desk, and room service.</p>
            <p className="font-bold mt-2">₹ 499</p>
          </div>
          <input
            type="number"
            min="0"
            className="w-12 h-12 pl-3 text-center border rounded-md bg-[#35e3a4] text-black"
            value="0"
          />
        </div>
      </div>

      {/* Payment Mode Section */}
      <div className="mb-6 w-1/2">
        <label className="block text-sm font-medium mb-2">Payment Mode</label>
        <select className="w-full p-2 border text-gray-400 rounded-md border-zinc-100 bg-zinc-100">
          <option>Select Payment Mode from list</option>
        </select>
      </div>

      {/*Save Bill Button*/}
      <div className='w-1/2 mb-8'>
        <p className='bg-[#35e3a4] w-1/2 flex justify-center items-center h-[40px] font-medium rounded-md'>Save Bill</p>
      </div>


    </div>
    </div>
  );
};

export default Hero;
