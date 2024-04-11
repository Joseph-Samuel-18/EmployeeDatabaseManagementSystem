import usermodel from "../models/User.js"
 const create=async(req,res)=>{
  try {
      const {empName,empAge,empState,empNo}=req.body
   const Newuser=  new usermodel({
    empName,empAge,empState,empNo
   })
   await Newuser.save()

   res.status(200).json({success:true,message:"Employee added successfully.", Newuser})
  } catch (error) {
    console.log(error)
  return  res.status(500).json({success:false,message:"Internal server eror"})
  }
}

//Read api
const get=async(req,res)=>{

   try {
     const users= await usermodel.find()
    if (!users) {
      return  res.status(404).json({success:false})
    }

    res.status(200).json({users})
} catch (error) {
    console.log(error)
    
    res.status(500).json({success:false})
   }

}

//update user api
const Updated=async(req,res)=>{
 try {
     const userId=req.params.id
 
 const updateuser=await usermodel.findByIdAndUpdate(userId,req.body,{new:true})
   if (!updateuser) {
      return res.status(404).json({ success: false, message: 'Employee details not found' });
    }
     res.status(200).json({ success: true, message: 'Employee details updated successfully', updateuser });
 } catch (error) {
     console.log(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
 }
}

//delete user api
const Delete=async(req,res)=>{
try {
       const userId=req.params.id
   const deletuser= await usermodel.findByIdAndDelete(userId)
   if (!deletuser) {
   return res.status(404).json({ success: false, message: 'Employee details not found' });
   }
   res.status(200).json({ success: true, message: 'Employee details deleted successfully' });
} catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal server error' });
}
}

export {create,get,Updated,Delete}



