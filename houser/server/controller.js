module.exports={
    getAll:(req,res,next)=>{
        const dbInstance=req.app.get('db');
        dbInstance.get_houses()
        .then(houses=>res.status(200).send(houses))
        .catch(()=>res.status(500).send());
    },
    create:(req,res,next)=>{
        const dbInstance=req.app.get('db');
        const{name, address, city, state, zipcode,img, mortgage,rent }=req.body;
        dbInstance.create_house([name,address,city,state, zipcode, img, mortgage, rent])
        .then(()=>res.status(200).send())
        .catch((err)=>res.status(500).send(console.log(err)))
    },
    delete:(req,res,next)=>{
        const dbInstance=req.app.get('db');
        const{id}=req.params;
        dbInstance.delete_house([id])
        .then(()=>res.status(200).send())
        .catch(()=>res.status(500).send())
    }
}