import { registerUser } from "@firebase/actions/register-action";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request?.json();
        console.log("Email: ", email, "Password: ", password);
        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required." },
                { status: 400 }
            );
        }
        if (password && password.length < 6) {
            return NextResponse.json(
                { error: "Password must be at least 6 characters long." },
                { status: 400 }
            );
        }
        const registrationResult = await registerUser(email, password);
        if (registrationResult.success) {
            return NextResponse.json({
                message: "Registration successful",
                user: registrationResult.user,
            });
        } else {
            return NextResponse.json(
                { error: registrationResult.errorMessage },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("Error during registration:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
