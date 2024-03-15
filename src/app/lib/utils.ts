export function generateRating(num: number) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(i);
    }
    return arr;
}

export function validateFormFields(
    name?: string,
    email?: string,
    password?: string,
    newPassword?: string
) {
    let error = "";
    if (!name || !email || !password) {
        return { error: "Name, Email and password are required." };
    }
    if (password && password.length < 6) {
        return { error: "Password must be at least 6 characters long." };
    }
    return error;
}
