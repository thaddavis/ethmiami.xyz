import timelessLogo from '../assets/timeless.png'

export const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.25] justify-center items-center">
        {/* <img src={timelessLogo} alt="logo" className="w-32" /> */}
        <span className="text-[#e32970]">ETHMiami.xyz</span>
      </div>

      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-4 w-full">
        <p className="text-[#e32970] text-base text-center mx-2 cursor-pointer">
          Market
        </p>
        <p className="text-[#e32970] text-base text-center mx-2 cursor-pointer">
          Artists
        </p>
      </div>

      <div className="flex flex-[0.25] justify-center items-center mt-4 sm:mt-0">
        <p className="text-[#e32970] text-right text-xs">
          &copy;&nbsp;2023
        </p>
      </div>
    </div>
  </div>
)

// export default Footer