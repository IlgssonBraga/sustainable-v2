const Order = require('../models/Order');

class OrderController {
  async index(req, res) {
    const order = await Order.findAll();
    return res.json(order);
  }

  async show(req, res) {
    const id = req.params.id;
    const order = await Order.findByPk(id);
    if (!order){
      return res.status(404).json({message: "order not find"})
    }
    return res.json(order);
  }

  async store(req, res) {

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
      return res.status(404).json({message: "order not find"})
    }

    order.destroy()
    return res.status(204).json();
  }
}

module.exports = OrderController;