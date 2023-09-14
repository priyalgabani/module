const fs=require('fs')

let opr=process.argv[2]
let filename=process.argv[3]
let data=process.argv[4]
let newfile=process.argv[5]

const write=()=>{
    fs.writeFile(filename,data,(err)=>{
        if(err)throw err;
        console.log(`file written successfully,${filename}`);
    });
};
const read=()=>{
    fs.readFile(filename,"utf-8",(err,data)=>{
        if(err)throw err;
        console.log(`file read success,${filename}\n${data}`);
    });
};
const rename=()=>{
    fs.rename(filename,newfile,(err)=>{
        if(err)throw err;
        console.log(`rename sucessfull\n,${filename}`);
    });
};

const delet=()=>{
    fs.unlink(filename,(err)=>{
        if(err)throw err
        console.log(`file successful\n${filename}`);
    });
};

const append=()=>{
    fs.appendFile(filename,data,(err)=>{
        if(err)throw err
        console.log(`file successfull`);
    });
};

if(opr=="create"){
    write();
}
else if(opr=="read"){
    read();
}
else if(opr=="rename"){
    rename();
}
else if(opr=="delete"){
    delet();
}
else if(opr=="append"){
    append();
}