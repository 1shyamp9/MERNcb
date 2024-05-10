import jwt from "jsonwebtoken"

export const createCookie = async (res,user) => {
    try {
        const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRATE);
        res.status(200).cookie("token", token, {
            httpOnly: true,
            maxAge: 20 * 60 * 1000,
            sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
            secure: process.env.NODE_ENV === "Development" ? false : true,
        }).json({
            success: true,
            message : "Login Successfully",
            user
        })
    } catch (error) {
        console.log(error);
    }
}