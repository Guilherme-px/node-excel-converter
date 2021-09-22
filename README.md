# Excel converter
  

This system converts excel **.csv** tables to **html** and **PDF**.

  
## Project setup

```

npm install

```


### Run project


use the example excel table or save your own excel table with the **.csv** extension.

in the **app.js** file add the path of your excel file in:

```

var  data = await  reader.Read("./excel/myExcel.csv")

```

to run the project use the command:

```

node app.js

```