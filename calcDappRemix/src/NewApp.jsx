import { useState } from "react";
import "./App.css";
import Web3 from "web3";

const web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://sepolia.infura.io/v3/4e3461ff9766436abbbad5e8334dc6d2"
  )
);

const abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "storeResult",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "msg",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    name: "Success",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "num1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "num2",
        type: "uint256",
      },
    ],
    name: "addNum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "num1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "num2",
        type: "uint256",
      },
    ],
    name: "divNum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "num1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "num2",
        type: "uint256",
      },
    ],
    name: "mulNum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "result",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "num1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "num2",
        type: "uint256",
      },
    ],
    name: "subtractNum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];
//contract address
const address = "0x0b23234c4f742b58787afe7331e91e5c737a52d8";

const contract = new web3.eth.Contract(abi, address);

function NewApp() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  function add() {
    contract.methods
      .addNum(num1, num2)
      .call()
      .then((res) => {
        setResult(parseInt(res));
      });
  }
  function sub() {
    contract.methods
      .subtractNum(num1, num2)
      .call()
      .then((res) => {
        setResult(parseInt(res));
      });
  }
  function mul() {
    contract.methods
      .mulNum(num1, num2)
      .call()
      .then((res) => {
        setResult(parseInt(res));
      });
  }
  function div() {
    contract.methods
      .divNum(num1, num2)
      .call()
      .then((res) => {
        setResult(parseInt(res));
      });
  }

  //older return

// return (
//     <div
//         className="flex flex-col items-center justify-center min-h-screen bg-gray-600 bg-cover"
//         style={{ backgroundImage: "url('https://wallpapers.com/images/featured/attack-on-titan-logo-qib40rskdp9p813l.jpg')" }}
//     >
//         <div className="w-full max-w-sm bg-opacity-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6 m-4">
//             <div className=" bg-opacity-50 flex flex-col items-center">
//                 <h2 className="p-6 text-white font-bold text-3xl font-sans">
//                     My Simple Calculator Dapp
//                 </h2>
//                 <div className="p-6 bg-gray-700 shadow-lg rounded-lg w-full">
//                     <input
//                         type="text"
//                         value={num1}
//                         placeholder="Enter number 1"
//                         className="mb-4 p-2 border bg-gray-500 border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         onChange={(e) => setNum1(e.target.value)}
//                     />
//                     <input
//                         type="text"
//                         value={num2}
//                         placeholder="Enter number 2"
//                         className="mb-4 p-2 border bg-gray-500 border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         onChange={(e) => setNum2(e.target.value)}
//                     />

//                     <div className="flex justify-center space-x-4 mb-4">
//                         <button
//                             onClick={add}
//                             className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                         >
//                             +
//                         </button>

//                         <button
//                             onClick={sub}
//                             className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                         >
//                             -
//                         </button>

//                         <button
//                             onClick={mul}
//                             className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                         >
//                             *
//                         </button>

//                         <button
//                             onClick={div}
//                             className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                         >
//                             /
//                         </button>
//                     </div>

//                     <h3 className="text-lg font-semibold text-white py-4">
//                         Result: {result != null ? result : "not calculated yet"}
//                     </h3>
//                 </div>
//             </div>
//         </div>
//     </div>
// );


//improved ui hit and trial
// return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-600" style={{ backgroundImage: "url('https://shorturl.at/90UXE')", backgroundSize: 'cover' }}>
//       <div className="w-full max-w-sm bg-white bg-opacity-20 backdrop-blur-md border border-gray-200 rounded-lg shadow-lg  p-6 m-4">
//         <div className="flex flex-col items-center">
//           <h2 className="p-6 text-white font-bold text-3xl font-sans">
//             My Simple Calculator Dapp
//           </h2>
//           <div className="p-6  bg-opacity-30 backdrop-blur-md shadow-lg rounded-lg w-full">
//             <input
//               type="text"
//               value={num1}
//               placeholder="Enter number 1"
//               className="mb-4 p-2 border  bg-opacity-40 border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//               onChange={(e) => setNum1(e.target.value)}
//             />
//             <input
//               type="text"
//               value={num2}
//               placeholder="Enter number 2"
//               className="mb-4 p-2 border  bg-opacity-40 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//               onChange={(e) => setNum2(e.target.value)}
//             />
  
//             <div className="flex justify-center space-x-4 mb-4">
//               <button
//                 onClick={add}
//                 className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 +
//               </button>
  
//               <button
//                 onClick={sub}
//                 className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 -
//               </button>
  
//               <button
//                 onClick={mul}
//                 className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 *
//               </button>
  
//               <button
//                 onClick={div}
//                 className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 /
//               </button>
//             </div>
  
//             <h3 className="text-lg font-semibold text-gray-700 py-4">
//               Result: {result != null ? result : "not calculated yet"}
//             </h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
  
  //gradient ui
  return (
    <div className="flex flex-col items-center justify-center min-h-screen" style={{ backgroundImage: "url('https://shorturl.at/90UXE')", backgroundSize: 'cover' }}>
    {/*  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500"> */}
      <div className="w-full max-w-sm bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg p-6 m-4">
        <div className="flex flex-col items-center">
          <h2 className="p-6 text-white font-bold text-3xl font-sans">
            My Simple Calculator Dapp
          </h2>
          <div className="p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg w-full">
            <input
              type="text"
              value={num1}
              placeholder="Enter number 1"
              className="mb-4 p-2 border bg-white bg-opacity-20 border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300"
              onChange={(e) => setNum1(e.target.value)}
            />
            <input
              type="text"
              value={num2}
              placeholder="Enter number 2"
              className="mb-4 p-2 border bg-white bg-opacity-20 border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300"
              onChange={(e) => setNum2(e.target.value)}
            />
  
            <div className="flex justify-center space-x-4 mb-4">
              {[
                { op: '+', func: add },
                { op: '-', func: sub },
                { op: '*', func: mul },
                { op: '/', func: div }
              ].map(({ op, func }) => (
                <button
                  key={op}
                  onClick={func}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all duration-300"
                >
                  {op}
                </button>
              ))}
            </div>
  
            <h3 className="text-lg font-semibold text-white py-4">
              Result: {result != null ? result : "not calculated yet"}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}


export default NewApp;
