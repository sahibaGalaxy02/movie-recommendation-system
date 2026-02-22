 export const getUser=async(req,res)=>{
    try{
         returnres.status(200).json({
        message:"User data",
        success:true
    })
    }catch(err){
        res.send('error',err);
    }
}