import cookie from "cookie";

const handler = (req, res) => {
    if(req.method == "POST"){
        const {username, password} = req.body;

        if(username === process.env.USER_NAME && password === process.env.PASS_WORD)
        {
            res.setHeader("Set-Cookie", 
                            cookie.serialize("token", process.env.TOKEN, 
                            {
                                maxAge: 60 * 60,
                                sameSite: "strict",
                                path: "/",
                            })
                            );
            res.status(200).json("Successfull");
        }
        else{
            res.status(400).json("Wrong Credentials");
        }
    }
};  

export default handler;