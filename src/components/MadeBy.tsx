import { Redirect } from "../icons/Redirect";

export const MadeBy = () => {
    return (
        <div className="text-md font-semibold flex">
            <div className="mr-1 text-white">Made by</div>
            <div
                onClick={() => {
                    window.open(
                        "https://shubhhere.vercel.app"
                    );
                }}
                className="text-blue-400 hover:underline cursor-pointer flex"
            >
                Shubhashish <Redirect />
            </div>
        </div>
    )
}