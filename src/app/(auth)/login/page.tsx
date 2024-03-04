"use client";
import Image from "next/image";
import Link from "next/link";
import FormTitle from "@auth/form-title";
import AuthForm from "@auth/form";
import FormRow from "@auth/form-row";
import SubmitButton from "@auth/submit-button";
import GoogleButton from "@auth/google-button";
import registerBg from "@images/bg-register.png";
import googleIcon from "@icons/google.svg";

export default function Register() {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    return (
        <div className='flex justify-center items-center w-[80%] max-w-[66rem] mx-auto font-normal min-h-[95vh]'>
            <div className=' w-[50%] h-full relative'>
                <Image src={registerBg} alt='' fill />
            </div>
            <div className=' w-[50%] h-full bg-[#0B0A1E] py-12 px-14 text-zinc-50 rounded-r-lg'>
                <FormTitle
                    title='Welcome Back!'
                    desc='Enter your details below to sign in'
                />
                <AuthForm handleSubmit={handleSubmit}>
                    <div className='grid gap-6 pt-4 w-full'>
                        <FormRow
                            labelText='email'
                            type='email'
                            name='email'
                            placeholder='Email Address'
                        />
                        <FormRow
                            labelText='password'
                            type='password'
                            name='password'
                            placeholder='Password'
                        />
                        {/* error messages */}
                    </div>
                    <p className='text-[0.75rem] pt-1'></p>
                    <div className='flex justify-between items-center w-full text-sm pt-2 pb-4'>
                        <div className='flex gap-2 items-center'>
                            <input
                                type='checkbox'
                                name='remember-me'
                                id='remember-me'
                                className='rounded-sm border border-zinc-50 p-2  accent-purple w-4 h-4 '
                            />
                            <label htmlFor='remember-me' className=''>
                                Remember me
                            </label>
                        </div>
                        <Link href='/forgot-password' className="text-purple hover:opacity-70">Forgot Password?</Link>
                    </div>
                    <div className='grid gap-4 text-center pt-4'>
                        <SubmitButton text='Sign Up' />
                        <GoogleButton>
                            <span>
                                <Image src={googleIcon} alt='' />
                            </span>
                            <span> Sign In with Google</span>
                        </GoogleButton>
                        <p>
                            Don&apos;t have an account?{" "}
                            <Link
                                href='/register'
                                className='text-purple font-semibold hover:underline'
                            >
                                Sign Up
                            </Link>
                        </p>
                        <p className='text-[12px]'>
                            By signing in, you agree to our{" "}
                            <Link
                                href='/terms-of-service'
                                className='text-purple hover:underline'
                            >
                                Terms of Service
                            </Link>
                            ,{" "}
                            <Link
                                href='privacy-policy'
                                className='text-purple hover:underline'
                            >
                                Privacy Policy
                            </Link>{" "}
                            and{" "}
                            <Link
                                href='acceptable-use-policy'
                                className='text-purple hover:underline'
                            >
                                Acceptable Use Policy
                            </Link>
                            .
                        </p>
                    </div>
                </AuthForm>
            </div>
        </div>
    );
}
