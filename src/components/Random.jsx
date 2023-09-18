import Spinner from './Spinner';
import Gif from '../hooks/Gif';

const Random = () => {
  const {gif,loading,getData}=Gif();
  
  
  return (
    <div className='bg-green-500 justify-around items-center w-1/2 mx-auto text-center p-6 min-w-[670px] mt-8 border-white border-solid border-[1px] rounded-lg flex flex-col '>
      <h2 className='text-[20px] underline font-bold mb-4'>A Random Gif</h2>
      {
        loading ? <Spinner/>:(<img src={gif} alt=""  className='w-[384px] mb-8'/>)
      }
      <button onClick={()=>{getData()}} className='bg-white w-[70%] opacity-70 hover:opacity-100 transition-all p-2 rounded-lg' >GENERATE</button>
    </div>
  )
}

export default Random
