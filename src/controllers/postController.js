
exports.create = async(req,res) =>{
    res.status(200).json({status:'success',data:'Post created'});
};

exports.read = async(req,res) =>{
    res.status(200).json({status:'success', data:'Post data'});
};

exports.delete = async(req,res)=>{
  res.status(200).json({status:'success',data:'Post deleted'});  
};

exports.update = async(req,res)=>{
res.status(200).json({status:'success', data:'Post updated'});
};