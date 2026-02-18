import jwt from 'jsonwebtoken';

export default function checkToken(req, res, next){
    console.log(req.headers);
    
    const authHeader = req.headers['authorization'];
    const token = authHeader;
    if(!token){
        return res.status(401).json({message:'Token missing'});
    }
    jwt.verify(token, process.env.SECRET, (err, decode) =>{
        if (err){
            return res.status(403).json({message: 'Invalid or expired token'});

        }
        req.user =decode;
        next();
    });
}