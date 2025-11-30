import UI_IMG from "../../assets/hero.jpg";

function AuthLayout({ children }) {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] pt-8 pb-12 px-10">
        <h2 className="text-lg font-medium text-black">Task Manager</h2>
        {children}
      </div>
      <div className="hidden md:flex w-[45vw] h-screen items-center justify-center bg-blue-100">
        <img src={UI_IMG} className="" alt="" />
      </div>
    </div>
  );
}

export default AuthLayout;
