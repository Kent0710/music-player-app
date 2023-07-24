import SignInButton from "@/components/SignInButton";
import { RiMusic2Fill } from 'react-icons/ri'

const Login = () => {
    return (
        <div className="flex h-full bg-neutral-900 text-white">
            <div className="flex flex-col items-center justify-around w-full">

                <div className="flex flex-col items-center gap-2">
                    <p> 75121108101. Project #2 </p>
                    <small> 16/7/23 </small>
                </div>

                <div className="flex flex-col items-center gap-5">
                    <div className="flex flex-col sm:flex-row gap-5 items-center">
                        <RiMusic2Fill size={70}/>
                        <h1 className="text-5xl font-bold tracking-wide"> Music Player App </h1>
                    </div>
                    <SignInButton />
                </div>

                <div className="flex flex-col items-center gap-2">
                    <h2> Developed by : </h2>
                    <h3 className="font-bold"> nami </h3>
                </div>

            </div>

        </div>
    )
};

export default Login;