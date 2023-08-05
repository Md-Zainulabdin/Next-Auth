import fs from 'fs';
import path from 'path';
import { compare, hash } from 'bcryptjs'

const filePath = path.join(process.cwd(), "data", "users.json")


export const getUsers = () => {
    const data = JSON.parse(fs.readFileSync(filePath));
    return data;
}

export const checkEmail = (email) => {
    let users = getUsers();
    return users.find((user) => user.email.toLowerCase() === email.toLowerCase());
}

export const saveUser = async ({ username, email, password }) => {
    let verifyEmail = Boolean(checkEmail(email));

    if (verifyEmail) {
        throw new Error("user already exist")
    }

        const hashedPassword = await hash(password, 8)

        let data = getUsers();
        data.push({
            id: data.length + 1,
            username,
            email,
            password: hashedPassword
        });

        fs.writeFileSync(filePath, JSON.stringify(data));
}


export const verifyPassword = async (hashedPassword, password) => {
    const isValid = await compare(password, hashedPassword);
    return isValid;
}
