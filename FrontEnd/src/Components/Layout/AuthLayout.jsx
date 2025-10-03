import React from "react";
import CARD_2 from "@/assets/images/card2.png";
import { LuTrendingUpDown } from "react-icons/lu";

// NOTE: This assumes you have a 'StatsInfoGrid' component defined elsewhere in your project.
// const StatsInfoGrid = ({ icon, label, value, color }) => { ... };

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* Left Side: Form Content */}
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black">Expense Tracker</h2>
        {children}
      </div>

      {/* Right Side: Decorative Panel */}
      <div className="hidden md:block w-[40vw] h-screen bg-violet-50 bg-auth-bg-img relative overflow-hidden">
        {/* Decorative Shapes */}
        <div className="w-48 h-48 rounded-[40px] bg-purple-600 absolute -top-7 -left-12"></div>
        <div className="w-48 h-56 rounded-[40px] border-[20px] border-fuchsia-600 absolute top-24 -left-20"></div>
        <div className="w-48 h-48 rounded-[40px] bg-violet-500 absolute -bottom-7 -right-12"></div>

        <div className="relative z-20 flex flex-col items-center justify-start h-full w-50% pt-24 gap-6">
            <StatsInfoGrid
              icon={<LuTrendingUpDown />}
              label="Track Your Income & Expenses"
              value="430,000"
              color="bg-primary"
            />
        </div>

        <img
          src={CARD_2}
          alt="Financial Overview Card"
          className="w-64 lg:w-[90%] absolute bottom-10 left-1/2 -translate-x-1/2 shadow-lg shadow-blue-400/20"
        />
      </div>
    </div>
  );
};

export default AuthLayout;

const StatsInfoGrid = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-puple-400/10 border border-gray-200/50 z-10">
    <div className={`w-12 h-12 flex items-center justify-center text-[26px] text-white rounded-full ${color} drop-shadow-xl`}>
      {icon}
    </div>
    <div>
      <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
      <span className="text-[20px]">${value}</span>
    </div>
    </div>
  );
}