var Guid = require("guid");

var sessionStore = {};
/**
 * Todo
 * 1. What if the server crashes (user request has the sessionid, but the sessionStore doesnot have the corresponding session object)?
 * 2. Implement session timeout (if the user has not accessed the app for the past [session timeout] period, the session object in the sessionStore has to be destroyed. Make the session-timeout configurable
 */
module.exports = function(req, res, next){
    var sessionid = null;
    if (!req.cookies["sessionid"]){
        sessionid = Guid.raw();
        sessionStore[sessionid] = {};
        res.cookie("sessionid", sessionid);
    } else {
        sessionid = req.cookies["sessionid"]
    }
    req.session = sessionStore[sessionid];
    next();
}
