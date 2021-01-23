const db = require("../config/db");

module.exports = async (req, res) => {
    try {
        let taskid = req.params.id;
        if(taskid) {
          let sql = "DELETE FROM todo WHERE id=?";
          let result = await db.query(sql, [taskid]);
          res.status(200).json({
            message: "Task Deleted",
          });
        } else {
            res.status(400).json({
              message: "Missing Required Field",
            });
          }
      } catch (err) {
        res.status(500).json({
          message: "Error occurred",
        });
      }
};