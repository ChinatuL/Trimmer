import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";

export async function registerUser(email: string, password: string) {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;
        console.log("User Registered: ", user);
        return { success: true, user };
    } catch (error: any) {
        console.error("Error during registration:", error);
        let errorMessage = "Registration Failed";
        if (error.code === "auth/email-already-in-use") {
            errorMessage = "Email already in use";
        } else if (error.code === "auth/invalid-email") {
            errorMessage = "Invalid email";
        } else if (error.code === "auth/weak-password") {
            errorMessage = "Weak password";
        }
        return { success: false, errorMessage };
    }
}
