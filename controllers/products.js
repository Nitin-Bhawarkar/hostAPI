
const Product = require("../models/product");

//------------------------------------------------------------------------------
// Real

const getAllProducts = async(req , res) =>{
        const {company , name , featured , sort , select} = req.query;
        const queryObject = {};

        if(company){
                queryObject.company = company;
        }
        
        if(featured){
                queryObject.featured = featured;
        }

        if(name){
                queryObject.name = {$regex:name , $options:"i"};
        }

// Sorting in ascending , descending
 // (sort=name,price) in browser writing.

        let apiData = Product.find(req.queryObject);

        if(sort){
                let sortFix = sort.replace(","," ");
                apiData = apiData.sort(sortFix);
        }

 // Select .. it means particular parameters.
  // (select=name,price) in browser search. 
  
         if(select){
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
        }

// Pagination
//(page=1,2,3)
let page = Number(req.query.page) || 1;
let limit = Number(req.query.limit)|| 10;

let skip = (page -1)*limit;

apiData = apiData.skip(skip).limit(limit);

        console.log(req.queryObject);

        const Products = await apiData;

        res.status(200).json({Products , nbHits:Products.length});
};

//--------------------------------------------------------------------------------

// Testing

const getAllProductsTesting = async(req , res) =>{

        const {company , name , featured} = req.query;
        const queryObject = {};

        if(company){
                queryObject.company = company;
        }
        
        if(featured){
                queryObject.featured = featured;
        }

        if(name){
                queryObject.name = {$regex:name , $options:"i"};
        }

        console.log(queryObject);

        let apiData = Product.find(req.queryObject);

    const Products = await apiData;

    res.status(200).json({Products , nbHits:Products.length});

   //res.status(200).json({ msg : "I am getAllProductsTesting"});
};

module.exports = {getAllProducts , getAllProductsTesting};









