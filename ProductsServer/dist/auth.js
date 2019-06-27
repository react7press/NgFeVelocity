const OktaJwtVerifier = require('@okta/jwt-verifier');
const oktaJwtVerifier = new OktaJwtVerifier({
    clientId: '0oasx9hruiMEQ2KRl356',
    issuer: 'https://dev-492138.okta.com/'
});
async;
function oktaAuth(req, res, next) {
    try {
        const token = (req), as = any, token;
        if (!token) {
            return res.status(401).send('Not Authorised');
        }
        const jwt = await, oktaJwtVerifier, verifyAccessToken = (token);
        req.user = {
            uid: jwt.claims.uid,
            email: jwt.claims.sub
        };
        next();
    }
    catch (err) {
        return res.status(401).send(err.message);
    }
}
