const Category=require('./../db/category');

// creae function for ad data in db

async function addCategory(model){
    let category = new Category({
        name:model.name
    })
 await category.save();
 return (category.toObject());
}

//get all data

async function getAllCategories(){
    let categories = await Category.find({});
    // res.send(categories);
    return categories;
}
async function getCategoryById(id){

    let category = await Category.findById(id);
    // res.send(categories);
    return category.toObject();
}
//get one data
//update

async function updateCategory(id,model){
       let category = await Category.findOneAndUpdate({_id:id},model);
    return;
}
//delete

async function deleteCategory(id){
       await Category.findByIdAndDelete(id);
    return;
}
 //export function for use in other files

//export function for use in other files
module.exports = {addCategory,getCategoryById,getAllCategories,updateCategory,deleteCategory};
