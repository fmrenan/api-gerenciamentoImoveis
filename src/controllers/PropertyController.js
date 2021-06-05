const Property = require('../models/Property');

module.exports = {
  async findAll(req, res){
      const properties = await Property.find();

      return res.json(properties);
  },

  async findById(req, res){
    const {property_id} = req.params;
    
    const property = await Property.findById(property_id);

    return res.json(property);
  },

  async insert(req, res){

    const { cep, number, complement, rentValue, rooms, available } = req.body;

    const property = await Property.create({
      cep,
      number,
      complement, 
      rentValue,
      rooms,
      available
    })

    return res.status(201).json(property);
  },

  async update(req, res){
    const {property_id} = req.params;
    const newProperty = req.body;
    
    const property = await Property.findByIdAndUpdate(property_id, newProperty, {new: true});
    
    return res.status(200).json(property);
  },

  async delete(req, res){

    const {property_id} = req.params;
    
    await Property.findByIdAndDelete(user_id);

    return res.status(204).json();
  },
}    