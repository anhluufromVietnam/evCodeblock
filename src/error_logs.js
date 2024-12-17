const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

// Middleware để parse JSON body
app.use(express.json());

// Endpoint để nhận lỗi
app.post('/log-error', (req, res) => {
  const { message, stack } = req.body;

  // Lưu lỗi vào file log (log.txt)
  const logMessage = `Error Message: ${message}\nStack Trace: ${stack}\n\n`;
  const logPath = path.join(__dirname, 'error_logs', 'log.txt');

  fs.appendFile(logPath, logMessage, (err) => {
    if (err) {
      console.error("Không thể ghi lỗi vào file log:", err);
      return res.status(500).send("Có lỗi xảy ra khi lưu log");
    }
    res.status(200).send("Log đã được lưu");
  });
});

// Khởi động server trên cổng 8080 (hoặc cổng bạn đang sử dụng)
app.listen(8080, () => {
  console.log('Server đang chạy tại http://localhost:8080');
});
