
exports.create = async(req,res) =>{
    res.status(200).json({status:'success',data:'Admin created'});
};

exports.read = async(req,res) =>{
    res.status(200).json({status:'success', data:'Admin data'});
};

exports.delete = async(req,res)=>{
  res.status(200).json({status:'success',data:'Admin deleted'});  
};

exports.update = async(req,res)=>{
res.status(200).json({status:'success', data:'Admin updated'});
};