"use client";
import Link from "next/link";
import FormTitle from "@auth/form-title";
import AuthForm from "@auth/form";
import FormRow from "@auth/form-row";
import SubmitButton from "@auth/submit-button";
import GoogleButton from "@auth/google-button";
import formBg from "@public/bg-auth.png";
import Image from "next/image";

export default function Register() {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    return (
        <div className='flex justify-center items-center w-[80%] mx-auto'>
            {/* Image component */}
            <div className=' w-[50%]'>
                <Image src={formBg} alt='' />
            </div>
            {/* Form component */}
            <div className=' w-[50%] bg-[#0B0A1E] py-10 px-14 text-zinc-50'>
                <FormTitle
                    title='Let’s Get Started'
                    desc='Enter Your Details Below To Register'
                />
                <AuthForm handleSubmit={handleSubmit}>
                    <div className='grid gap-6 mt-4 w-full'>
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
                        <p></p>
                    </div>
                    <div className='grid gap-4 text-center'>
                        <SubmitButton text='Sign Up' />
                        <GoogleButton>Sign Up with Google</GoogleButton>
                        <p className='font-semibold'>
                            Already have an account?{" "}
                            <Link href='/login' className='text-purple'>
                                Sign in
                            </Link>
                        </p>
                        <p className='text-[12px]'>
                            By signing up, you agree to our{" "}
                            <Link
                                href='/terms-of-service'
                                className='text-purple'
                            >
                                Terms of Service
                            </Link>
                            ,{" "}
                            <Link href='privacy-policy' className='text-purple'>
                                Privacy Policy
                            </Link>{" "}
                            and{" "}
                            <Link
                                href='acceptable-use-policy'
                                className='text-purple'
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
