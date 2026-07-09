module.exports=(fn) =>{
    return (req,res,next)=>{
        fn(req,res,next).catch(next);
    };
};


//iska kaam hai ki koi server side se error aati hai to usko show kr dena lekin isko run krne ke liye is file to index.js me require krke function ke ander rakh dena for example data entry from client side and something error will appear

//const wrapAsync = require("./util/wrapAsync.js");
//posting new prop
// app.post("/", wrapAsync(async (req, res, next ) => {
//     //let { title, description, imageurl, price, location, country } = req.body;
//     let newlist = req.body.newlist;
//     const newlisting = new listing(newlist);
//     await newlisting.save();
//     res.redirect("/");
// }));

//aisa kuch scene rahega!!  