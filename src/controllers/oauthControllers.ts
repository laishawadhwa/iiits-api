const oauthPing = async (req, res) => {
    res.send({ message: 'it works' })
};
/**
 * 
 * @param req has body which has cilentId, username and password
 * @param res will send callbackurl and token
 */
const oauthLogin = async (req, res) => {
    console.log(req.body);
    // TODO authentication

    // TODO find the callback url using clientId
    
    // TODO create token using clientsecret + salt
    
    res.send({
        callbackurl: "http://localhost:4200/docs",
        token: "thiswillbeyourtoken"
    });
};

export { oauthPing, oauthLogin };