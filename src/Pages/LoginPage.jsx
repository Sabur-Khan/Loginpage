import { useState } from 'react';
import loginvideos from '../assets/Video/login video.mp4';
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle login logic here (e.g., API call)
      console.log('Email:', email);
      console.log('Password:', password);
    };

    <video autoPlay loop muted>
        <source src={loginvideos} type="video/mp4" />
    </video>
  
    return (

        <div className="lg:relative md:relative relative">

            <video autoPlay loop muted className="lg:relative md:relative relative inset-0 w-full h-screen object-cover">
                <source src={loginvideos} type="video/mp4" />
            </video>

            <div className="lg:absolute md:absolute absolute lg:left-[40%] md:left-[1%] left-[5%] lg:top-[30%] md:top-[40%] top-[28%]">
                <div className=" bg-slate-950/40 p-8 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold text-white mb-4">Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-white mb-2">Email</label>
                            <input
                                type="email"
                                className="lg:w-[400px] md:w-1/2 w-[280px] px-3 py-2 border rounded-md"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white mb-2">Password</label>
                            <input
                                type="password"
                                className="lg:w-[400px] md:w-1/2 w-[280px] px-3 py-2 border rounded-md"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button
                        type="submit"
                        className="lg:w-[400px] md:w-1/2 w-[280px]  bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
                        >
                        Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
  };
  
export default LoginPage;