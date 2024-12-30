import bg from "../../assets/Header/pantagon.jpg"

const Login = () => {
  return (
       <div className="relative h-screen">
        <img src={bg} alt="" />
         <div
      className=" absolute inset-0 flex items-center justify-center bg-cover bg-center bg-pantagon"
    
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#131d3b]"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#131d3b]"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#ff4f01] text-white font-bold py-2 rounded-md hover:bg-[#131d3b] focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account? <a href="#" className="text-[#ff4f01]">Sign up</a>
        </p>
      </div>
    </div>
       </div>
  );
};

export default Login;
