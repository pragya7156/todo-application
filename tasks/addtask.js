const db = require("../config/db");

module.exports = async (req, res) => {
    try {
        let task = req.body.task;
        
    if (task) {
        let taskid = req.body.taskid;
      let sql = "INSERT INTO todo(id, task) VALUES (?,?)";
      let result = await db.query(sql, [taskid, task]);
      res.status(200).json({
        message: "Task Added",
        taskId: taskid,
      });
    } else {
      res.status(400).json({
        message: "Missing Required Field",
      });
    }
    }
    catch(err) {
        console.log('error');
        res.status(500).json({
            message: "Error occurred",
        });
    }
};