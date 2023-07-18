import FormItem from "./FormItem";
import Button from "./Button";

const AccountForm = () => {
    return (
        <div>
            <form
                className=" 
                    flex flex-col 
                "
            >
                <div className="flex w-full h-56 gap-20">
                    <FormItem label="Username" id="username" type="text" placeholder="namikazenakiri" />
                    <FormItem label="Email" id="email" type="email" placeholder="namikazenakiri@gmail.com"/>
                </div>
                
                <div className="flex w-full h-56 gap-20">
                    <FormItem label="Password" id="password" type="password"/>
                    <FormItem label="Confirm Password" id="confirmPassword" type="password"/>
                </div>

                <div className="flex flex-col w-full h-56 gap-20">
                    <Button label="Save changes" className="rounded-3xl"/>

                    <div className="w-full flex flex-col items-center gap-2">
                        <p className="text-sm text-red-500 font-bold tracking-wide"> This action cant be undone! </p>
                        <Button label="Delete account" className="rounded-3xl bg-red-500 hover:bg-red-300 hover:ring-offset-2 hover:ring-2 hover:ring-red-500 w-full"/>
                    </div>

                </div>

            </form>
        </div>
    )
};

export default AccountForm;