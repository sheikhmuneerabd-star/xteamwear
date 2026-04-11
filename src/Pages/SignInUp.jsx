import xteamwear from '../assets/logo.svg';
import { FaGoogle } from "react-icons/fa";

function SignInUp() {
  return (
    <div>
        <div className="bg-slate-50 flex justify-center items-center">
            <div className='bg-gray-100'>
                <div className='flex justify-center'>
                    <img className='w-[280px]' src={xteamwear} alt="xteamwear" />
                </div>
                <div>
                    <p className='text-2xl font-medium'>Sign in</p>
                    <p className='text-gray-600'>Sign in or create an account</p>
                    <button className='w-full bg-blue-500 font-medium text-white'>Continue with shop</button>
                    <button><FaGoogle /> Continue With Google</button>
                </div>
                <div>
                    <div></div>
                    <div>or</div>
                    <div></div>
                </div>
                <div>
                    <input type="text" placeholder='Email' />
                    <button>Continue</button>
                    <label>
                        <input type="checked" />
                        Email me with news and offers
                    </label>
                </div>
                <div>
                    <p>By continuing, you agree to our</p>
                    <p>Terms of service</p>
                </div>
            </div>
        </div>
        <p>Pravacy policy</p>
    </div>
  )
}

export default SignInUp