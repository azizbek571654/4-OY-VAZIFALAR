import db from "../db/index.js";

export class Guruhlarcontroller {
  async crateGuruhlar(req, res) {
    try {
      const { name } = req.body;
      const result = await db.query(
        "Insert into guruhlar (name) VALUES($1) RETURNING *",
        [name]
      );
      
      return res.status(201).json({
        statusCode: 201,
        message: "grup created succesfull✅",
        data: result.rows[0],
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  }

  async getAllGuruxlar(req, res){
    try {
        const grups = await db.query("SELECT * FROM guruhlar");
        return res.status(200).json({
          statuCode: 200,
          message: "All grups finted succesfull✅",
          data: grups?.rows,
        });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  }
  
  async getGuruxlarById(req, res){
    try {
      const result = await db.query("SELECT * FROM guruhlar WHERE id = $1", [req.params.id]);
      // console.log(result);
      
      if (!result) {
        return res.status(404).json({
          error: 'gurux not found'
        })
      }
      return res.status(200).json({
        statuCode: 200,
        message: "succesfull✅",
        data: result?.rows[0],
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      }); 
    }
  }
  
  async updateGrupsById(req, res){
    try {
      const result = await db.query("UPDATE guruhlar SET name = $1 WHERE id = $2 RETURNING *", [req.body.name, req.params.id]);

      if (!result) {
        return res.status(400).json({
          error: 'error on updating grups'
        })
      }
      return res.status(200).json({
        statuCode: 200,
        message: "grups updated succesfull✅",
        data: result?.rows[0],
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      }); 
    }
  }

  async deleteGprubById(req, res){
    try {
      const result =  await db.query("DELETE FROM guruhlar WHERE id = $1 RETURNING *", [req.params.id]);

      if (result.rows.length === 0) {
        return res.status(404).json({
          error: "Guruh topilmadi yoki o‘chirilmagan",
        });
      }
      return res.status(200).json({
        statuCode: 200,
        message: "grups daleted succesfull✅",
        data: result?.rows[0],
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      }); 
    }
  }
}
