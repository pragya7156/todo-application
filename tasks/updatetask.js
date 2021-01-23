const db = require("../config/db");

module.exports = async (req, res) => {
    try {
        let taskid = req.params.id;
    let task = req.body.task;
    if (taskid && task) {
      let check_sql = "SELECT * FROM todo WHERE id=?";
      let [check_result] = await db.query(check_sql, [taskid]);
      if (check_result) {
        let sql = "UPDATE todo set task=? WHERE id=?";
        let result = await db.query(sql, [task, taskid]);
        res.status(200).json({
          message: "Task Edited",
        });
      } else {
        res.status(400).json({
          message: "Task Doesn't Exist",
        });
      }
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