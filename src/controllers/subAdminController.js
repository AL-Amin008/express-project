
exports.create = async(req,res) =>{
    res.status(200).json({status:'success',data:'SubAdmin created'});
};

exports.read = async(req,res) =>{
    res.status(200).json({status:'success', data:'SubAdmin data'});
};

exports.delete = async(req,res)=>{
  res.status(200).json({status:'success',data:'SubAdmin deleted'});  
};

exports.update = async(req,res)=>{
res.status(200).json({status:'success', data:'SubAdmin updated'});
};