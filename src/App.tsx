import { MadeBy } from "./components/MadeBy";
import { Toggle } from "./components/Toggle";

export default function App() {
    return (
        <div className="h-screen gap-y-20 bg-gray-800 flex flex-col items-center justify-center">
            <MadeBy/>
            <div className="text-cyan-300 bg-gray-700 p-4 rounded-full font-bold text-xl transition-all duration-500 md:hover:-translate-y-3 md:animate-none animate-bounce cursor-pointer md:text-4xl">
                Using the WIFI or not??
            </div>
            <Toggle/>
        </div>
    )
}