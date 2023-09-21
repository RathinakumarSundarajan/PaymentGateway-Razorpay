import React, { useState } from 'react'

const Payment = () => {
   const [amount, setAmount] = useState()


   const submitPayment = (e) =>{
    e.preventDefault();
    if(amount === ''){
        alert('please enter ur Amount');
    }else{
        alert('you entered the amount of'+amount);
        var options = {
            key:'enter your key',
            key_secret:'enter your s-key',
            amount:amount*100,
            currency:'INR',
            // order_id: order_id,
            Name:'Payment Gateway',
            Description:'Testing Purpose',
            handler:function(response){
                // alert(response.razorpay_payment_id);
                const data = {
                    // orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };
                // console.log(data)
            },
            prefill:{
                Name:'SRK',
                email:'srk91@gmail.com',
                Mobile:'9999955555'
            },
            notes:{
                Address:'Rpay office'
            },
            theme:{
                color:'#0892d0'
            }
        };
        var pay = new window.Razorpay(options);
        pay.open()
    }
   }

  return (
    <div className='card'>
      <h1>Payment</h1>
      <input type='number' placeholder='INR' value={amount} onChange={(e)=>setAmount(e.target.value)}/><br/>
      <button onClick={submitPayment}>Submit ur Payment</button>

    </div>
  )
}

export default Payment
