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
        <div className='flex justify-center items-center w-full h-full lg:w-[80%] max-w-[66rem] mx-auto font-normal lg:min-h-[95vh]'>
            <div className='hidden lg:block lg:w-[50%] lg:h-full lg:relative'>
                <Image src={registerBg} alt='' fill />
            </div>
            <div className='lg:w-[50%] h-full bg-[#0B0A1E] px-8 py-10 md:px-14 text-zinc-50 rounded-r-lg'>
                <FormTitle
                    title='Let’s Get Started'
                    desc='Enter your details below to register'
                />
                <AuthForm handleSubmit={handleSubmit}>
                    <div className='grid gap-6 pt-4 w-full'>
                        <FormRow
                            labelText='full name'
                            type='text'
                            name='fullName'
                            placeholder='Full Name'
                        />
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
                    <div className='grid gap-4 text-center pt-4'>
                        <SubmitButton text='Sign Up' />
                        <GoogleButton>
                            <span>
                                <Image src={googleIcon} alt='' />
                            </span>
                            <span> Sign Up with Google</span>
                        </GoogleButton>
                        <p>
                            Already have an account?{" "}
                            <Link
                                href='/login'
                                className='text-purple font-semibold hover:underline'
                            >
                                Sign in
                            </Link>
                        </p>
                        <p className='text-[12px]'>
                            By signing up, you agree to our{" "}
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
