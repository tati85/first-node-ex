// console.log("Is this my first node project?")

const myChalk=require("chalk");
const myHttp=require("http");
require('dotenv').config();




console.log(myChalk.blue("Hello blue"));
console.log(myChalk.green("Hello green"));

const myServer=myHttp.createServer((request,response)=>{
    console.log(`Requested URL is ${request.url}`);
    if (request.url==="/")
    {
        response.write("You enter in localhost: 3000");
        response.end();
    }

});
myServer.listen(precess.env.PORT,()=>console.log("I'm in port 3000"));
