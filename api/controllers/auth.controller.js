import bcrypt from "bcrypt";

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(hashedPassword);

    const newUser = await 
};

export const login = (req, res) => {
    console.log("login endpoint");
};

export const logout = (req, res) => {
    console.log("logout endpoint");
};