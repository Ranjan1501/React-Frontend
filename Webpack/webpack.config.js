const path= require('path')  // node  import syntax

module.exports={
    entry:"./src/index.js",
    output:{
        path:path.join(__dirname,"build"), // folder name as build
        filename:"bundle.js",
    },
    mode:"development",
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          //Image Loader 
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ],
      },
      
      

};