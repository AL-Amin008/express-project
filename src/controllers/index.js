
exports.create = async(req,res) =>{
    res.status(200).json({status:'success',data:'index created'});
};

exports.read = async(req,res) =>{
    res.status(200).json({status:'success', data:'index data'});
};

exports.delete = async(req,res)=>{
  res.status(200).json({status:'success',data:'index deleted'});  
};

exports.update = async(req,res)=>{
res.status(200).json({status:'success', data:'index updated'});
};