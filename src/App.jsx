import Custom from "./components/Custom";
import Random from "./components/Random";

export default function App() {


  return (
    <div className="w-[100vw] h-[100vh] background ">
      <div className="bg-white text-center mt-4 w-11/12 mx-auto rounded-lg p-2 text-3xl font-bold">
      RANDOM GIFs
      </div>
      <Random/>
      <Custom/>
    </div>
  )
}
