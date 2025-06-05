// The code can be written using both try catch and promises. Both of the methods are shown below
const asyncHandler = (requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err) => next(err))
    }
}







export {asyncHandler}


// const asyncHandler = (fn) => async (req,res,next) => {             // same code using try catch 
//     try{
//         await fn(req,res,next)
//     }
//     catch(error){
//         req.status(error.code || 500).json({
//             success:false,
//             message: error.message
//         })
//     }
// }