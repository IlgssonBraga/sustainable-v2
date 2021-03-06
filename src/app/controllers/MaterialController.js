const Material = require('../models/Material');
const User = require("../models/User");
const { Op } = require("sequelize");

class MaterialController {
  async index(req, res) {
    const material = await Material.findAll({
      where: { user_id: { [Op.not]: req.userId } },
      include: User,
    });
    return res.json(material);
  }

  async show(req, res) {
    const id = req.params.id;
    const material = await Material.findByPk(id);
    if (!material){
      return res.status(404).json({message: "material not find"})
    }
    return res.json(material);
  }

  async store(req, res) {
    

    const { name, user_id } = req.body;
    const verificaName = await Material.findOne({ where: { name } });
    if (verificaName) {
      return res.status(400).json({ error: 'Name already exists.' });
    }

    const checkUser = await User.findByPk(user_id);
    if (!checkUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const material = await Material.create(
      req.body
    );
    return res.json(material);
  }

  async update(req, res) {
  

    const { name } = req.body;
    const material = await Material.findByPk(req.params.id);

    if (name && name !== material.name) {
      const verificaName = await Material.findOne({ where: { email } });
      if (verificaName) {
        return res.status(400).json({ error: 'Name already exists.' });
      }
    }

    await material.update(req.body);

    const materialUpdated = await Material.findByPk(req.params.id);

    return res.json(materialUpdated);
  }

  async delete(req, res) {
    const id = req.params.id;
    const material = await Material.findByPk(id);
    if (!material){
      return res.status(404).json({message: "material not find"})
    }

    material.destroy()
    return res.status(204).json();
  }
}

module.exports = MaterialController;