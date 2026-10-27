import { RxCross2 } from "react-icons/rx";

function HubReceiptEmailErrorMessage({setIsShowEmailError,emailErrorMessage}) {
  return (
    <div
      onClick={() => setIsShowEmailError(false)}
      className="overflow-hidden fixed top-0 left-0 h-screen w-full backdrop-brightness-50 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white p-15 rounded-md shadow-(--shadow-md) w-1/2 text-lg"
      >
        <button
          className="absolute top-3 right-3 hover:cursor-pointer hover:bg-gray-200 p-2 rounded-md"
          onClick={(e) => setIsShowEmailError(false)}
        >
          <RxCross2 />
        </button>
        <p>{emailErrorMessage}</p>
      </div>
    </div>
  );
}

export default HubReceiptEmailErrorMessage;
