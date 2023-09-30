
exports.create = async(req,res) =>{
    res.status(200).json({status:'success',data:'User created'});
};

exports.read = async(req,res) =>{
    res.status(200).json({status:'success', data:'User data'});
};

exports.delete = async(req,res)=>{
  res.status(200).json({status:'success',data:'User deleted'});  
};

exports.update = async(req,res)=>{
res.status(200).json({status:'success', data:'User updated'});
};