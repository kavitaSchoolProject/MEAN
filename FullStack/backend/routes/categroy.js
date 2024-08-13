const express= require('express');
const router=express.Router();
const Category=require('./../db/category');
 const{ addCategory,getCategoryById,deleteCategory,getAllCategories,updateCategory }=require('./../handler/category-handler')
//add data in db
// store data db using addCategory funcion
router.post("",async (req,res)=>{
    let model=req.body;
  let result=  await addCategory(model);
    res.send({msg:"add"});
 
})
// router.post("",async (req, res) => {
//     let model=req.body;
//     let category = new Category({
//         name:model.name
//     })
//  await category.save();
//  res.send(category.toObject());
  
// })
// get data

// router.get("",async (req, res) => {
//     let categories = await Category.find({});
//     res.send(categories);
// })
router.get("",async (req, res) => {
    let results = await getAllCategories()
    res.send({msg:'og'});
})
router.get("/:id",async (req, res) => {
    let id=req.params['id'];
    let result = await getCategoryById(id);
    res.send({msg:'og'});
})


//update data

router.put("/:id",async (req, res) => {
    let model=req.body; 
    let id=req.params['id'];
    await updateCategory(id,model)

    res.send({message:"ok"});
})
// router.put("/:id",async (req, res) => {
//     let model=req.body; 
//     let id=req.params['id'];
//     let category = await Category.findOneAndUpdate({_id:id},model);
//     res.send({message:"ok"});
// })

//delete

router.delete("/:id",async (req, res) => {
    let id=req.params['id'];
    await deleteCategory(id);
    res.send({message:"ok"});
})
// router.delete("/:id",async (req, res) => {
//     let id=req.params['id'];
//     await Category.findOneAndDelete({_id:id});
//     res.send({message:"ok"});
// })
module.exports = router; 