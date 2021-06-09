const Material = require('../models/Material');
const Order = require('../models/Order');
const User = require('../models/User');

class OrderController {
  async index(req, res) {
    const order = await Order.findAll();
    return res.json(order);
  }

  async show(req, res) {
    const id = req.params.id;
    const order = await Order.findByPk(id);
    if (!order){
      return res.status(404).json({message: "order not found"})
    }
    return res.json(order);
  }

  async store(req, res) {

    const {user_id, material_id} = req.body

    const checkUser = await User.findByPk(user_id);
    if (!checkUser){
      return res.status(404).json({message: "User not found"})
    }

    const checkMaterial = await Material.findByPk(material_id);
    if (!checkMaterial){
      return res.status(404).json({message: "Material not found"})
    }

    const order = await Order.create(
      req.body
    );
    return res.json(order);
  }

  async update(req, res) {
    const order = await Order.findByPk(req.params.id);

   

    await order.update(req.body);

    const orderUpdated = await Order.findByPk(req.params.id);

    return res.json(orderUpdated);
  }

  async delete(req, res) {
    const id = req.params.id;
    const order = await Order.findByPk(id);
    if (!order){
      return res.status(404).json({message: "order not found"})
    }

    order.destroy()
    return res.status(204).json();
  }
}

module.exports = OrderController;