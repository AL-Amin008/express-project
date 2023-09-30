const mongoose = require('mongoose');


exports.createCollection = async (collectionName)=>{
    try {
        await mongoose.connection.createCollection(collectionName);
        console.log(`Collection '${collectionName}' created successfully`);
    } catch (error) {
        console.error(`Error creating collection '${collectionName}':`,error)
    }
};

exports.removeCollection = async (collectionName)=>{
    try {
        await mongoose.connection.dropCollection(collectionName);
        console.log(`Collection '${collectionName}' removed successfully`);
    } catch (error) {
        console.error(`Error removing collection '${collectionName}':`,error);
    }
};

exports.insertDocument = async(collectionName,documentData) =>{
  try {
    const model =mongoose.model(collectionName, new mongoose.Schema([]));
    const document = new model(documentData);
    await document.save();
    console.log(`Document inserted into '${collectionName}' successfully.`);
  } catch (error) {
    console.error(`Error inserting document into '${collectionName}'`,error);
  }
};

exports.deleteDocument = async(collectionName,documentId)=>{
    try {
        await mongoose.model(collectionName).findByIdAndDelete(documentId);
        console.log(`Document with ID '${documentId}' deleted from '${collectionName}' successfully.`);
    } catch (error) {
        console.error(`Error deleting document from '${collectionName}'`,error);
    }
};