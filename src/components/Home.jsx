import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Home = (props) => {
   const style ={
        icons:{
            fontSize: '40px',
            
        
        }
    }
    console.log(props)
  return (
    <div>
        <div className="cart-container w-full ">
        <AddShoppingCartIcon style={style.icons} className='float-right mr-7 mt-3' />
        </div>
       <div className="card-wrapper roundend-md  hover:shadow-lg md:max-w-[270px] max-w-[200px] border shadow-md m-3 p-2">
        <div className="img-wrapper">
            <img className='w-full'  src="https://images.unsplash.com/photo-1537589376225-5405c60a5bd8?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>
        <div className="text-wrapper flex justify-around my-3">
    <span className='font-bold tracking-tight text-slate-600'>
        I Phone
    </span>
    <span className='font-bold tracking-tight text-slate-600'>
        Price : $1000
    </span>
        </div>
        <div className="btn-wrapper grid place-content-center mt-7 mb-2">
    <button onClick={()=> props.addToCardHandler({price:1000,name:'I Phone 11 Pro Max'})} type="button" className='bg-sky-700 text-white p-1 rounded-sm hover:bg-sky-600 font-semibold  '>Add To Card</button>
        </div>
       </div>
      
    </div>
  )
}

export default Home
