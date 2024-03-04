"use client";
import Image from "next/image";
import FormTitle from "@auth/form-title";
import AuthForm from "@auth/form";
import FormRow from "@auth/form-row";
import SubmitButton from "@auth/submit-button";
import forgotPasswordBg from "@images/bg-forgot-password.png";

export default function Register() {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    return (
        <div className='flex justify-center items-center w-[80%] max-w-[66rem] mx-auto font-normal min-h-[95vh]'>
            <div className=' w-[50%] h-full relative'>
                <Image src={forgotPasswordBg} alt='' fill />
            </div>
            <div className=' w-[50%] h-full bg-[#0B0A1E] py-10 px-14 text-zinc-50 rounded-r-lg'>
                <FormTitle
                    title='Forgot Password?'
                    desc='No worries! Enter the email address associated with your account'
                />
                <AuthForm handleSubmit={handleSubmit}>
                    <div className='grid gap-6 pt-4 w-full'>
                        <FormRow
                            labelText='email'
                            type='email'
                            name='email'
                            placeholder='Email Address'
                        />
                        {/* error messages */}
                    </div>
                    <p className='text-[0.75rem] pt-1'></p>
                    <div className='grid gap-4 text-center pt-4 w-full'>
                        <SubmitButton text='Submit' />
                    </div>
                </AuthForm>
            </div>
        </div>
    );
}