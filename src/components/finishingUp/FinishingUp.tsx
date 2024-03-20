import { useEffect, useState } from 'react'
import Tittle from '../title/Tittle'
import { Picks } from '../../interfaces/types'
import { useNavigate } from 'react-router-dom'
import useStoreFlag from '../../store/useStore'



const FinishingUp = () => {

const plan = JSON.parse(localStorage.getItem('plan')!) 
const picks = JSON.parse(localStorage.getItem('picks')!)
const [chagePrice, setChaguePrice] = useState(true)
const [totalPrice, setTotalPrice] = useState(0);
const countminus = useStoreFlag((state)=>state.setCounterMinus)
const navigate= useNavigate()

useEffect(() => {
  calculateTotal();
}, [chagePrice, picks, plan]);



const calculateTotal = () => {
  let total = 0;
  if (chagePrice) {
    total += plan.priceMo;
    picks.forEach((pick:Picks) => {
      total += pick.priceMo;
    });
  } else {
    total += plan.priceYear;
    picks.forEach((pick:Picks) => {
      total += pick.priceYr;
    });
  }
  setTotalPrice(total);
};

const change =()=>{
  if(chagePrice){
    setChaguePrice(false)
  }else{
    setChaguePrice(true)
  }
}

  return (
    <section className='w-[450px]  max-sm:w-full'>
    <Tittle
     title='Finishing up'
     description='Double-check everything looks OK before confirming.'
    />
 
<section className=' mt-10 bg-[#f8f9ff] flex flex-col justify-center p-5 rounded-lg mb-5'>
  
<div className='flex items-center justify-between  '>
  <div className='flex flex-col  mb-5'>

<p>{plan.title} {chagePrice? "(Monthly)" :"(Yearly)" }</p>
<button onClick={()=>change()} className='underline text-left text-[#9699aa] text-sm '>Change</button>
  </div>
  <span className='font-medium'>$ {chagePrice ? plan.priceMo : plan.priceYear}{chagePrice ? "/mo" : "/yr"}</span>
</div>

<hr className='mb-5' />
  <div className='flex flex-col gap-2'>
    {
      picks.map((pik:Picks)=>((
        <div className='flex justify-between'>
        <p className='text-[#9699aa]'>{pik.service}</p>
        <p className='text-[#022959] font-medium'>$ {chagePrice ?  pik.priceMo :  pik.priceYr }{chagePrice ? "/mo" : "/yr"}</p>
        </div>
      )))
    }
  </div>


</section>
<div className='flex justify-between px-5'>
  <p className='text-[#9699aa] text-sm'>Total (per month)</p>
  <p className='text-[#483eff] font-bold'>$ {totalPrice}{chagePrice ? "/mo" : "/yr"}</p>
</div>
<div className='mt-20 flex justify-between px-5'>
  <button onClick={()=>{
    countminus()
    navigate("/pick")}} className='font-bold text-[#9699aa]'>Go back</button>
  <button onClick={()=>{navigate("/thk")}} className='bg-[#483eff] w-fit font-bold text-white text-lg px-5 py-2 rounded-xl'>Confirm</button>
</div>

    </section>
  )
}

export default FinishingUp