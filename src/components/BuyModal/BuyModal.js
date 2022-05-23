import React from 'react';

const BuyModal = () => {
    return (
        <>
        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
          <label for="my-modal-6" class="btn btn-sm btn-circle btn-secondary absolute right-2 top-2">✕</label>
            <h3 class="font-bold text-lg mb-5">Conform Your Order Please </h3>
          <form>
          <input type="text" placeholder="Name" class="input mb-3 input-bordered input-secondary w-full " />
          <input type="text" placeholder="Email" class="input mb-3 input-bordered input-secondary w-full" />
          <input type="text" placeholder="Address" class="input mb-3 input-bordered input-secondary w-full " />
          <input type="text" placeholder="Phone Number" class="input mb-3 input-bordered input-secondary w-full " />
            <button className='btn-secondary text-white btn '>Purchase</button>
          </form>
          
          </div>
        </div>
        </>
    );
};

export default BuyModal;