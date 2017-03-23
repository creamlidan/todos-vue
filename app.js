////应用程序入口
//建立http服务
//1.将client文件夹中文件可以作为静态文件访问
//2.提供数据服务
const express = require('express')

//构建web应用程序对象 用来处理请求
 const app = express()

//将固定文件夹作为静态资源访问
 app.use(express.static('./client'))
 app.use(express.static('app.js'))
 app.use('/node_modules',express.static('./node_modules'))
 app.use('/server',express.static('./server'))

 //监听一个端口
 app.listen(8080,function(error){
 	if(error){
 		throw error
 	}
 	console.log("server is ready")
 })
  //向本地写入文件
  var fs = require("fs");
  var data = '菜鸟教程官网地址：www.runoob.com';
  // 创建一个可以写入的流，写入到文件 output.txt 中
  var writerStream = fs.createWriteStream('plan.json');
  // 使用 utf8 编码写入数据
  writerStream.write(data,'UTF8');
  // 标记文件末尾
  writerStream.end();
  // 处理流事件 --> data, end, and error
  writerStream.on('finish', function() {
      console.log("写入完成。");
  });
  writerStream.on('error', function(err){
     console.log(err.stack);
  });

