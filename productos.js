const { Console } = require('console');
const fs= require('fs');

class Contenedor {
    constructor(){
        this.route= './package.json';
        this.id= 1;
    }

    save(x){
    let array=[];
    let object=x;
        object.id= this.id;
            try{
                
                let data = fs.readFileSync(this.route,'utf-8');
                array = JSON.parse(data);
                console.log("Ingreso por TRY");
                
                // aca el array deberia estar completo 
                // con los objetos parseados del archivo
            }
            catch{
                console.log("catch error"); 
            }
    // console.log(array);
        
    array.push(object);
    //    console.log(array);
    //    console.log("-----")
            
    fs.writeFileSync(this.route,JSON.stringify(array));
    this.id++;
    }

    getById(x){
        let array= [];
        let y = x;
        try{
            let data = fs.readFileSync(this.route,'utf-8');
            array = JSON.parse(data);
            console.log("Ingreso por TRY");
        }
        catch{
            console.log("catch error"); 
        }
        
        let object= null
        // console.log(object);

        array.forEach(element => {
            // console.log(element.id);
                if(element.id == y){
                object = element;
                }
            });
        
        console.log(object);
        return object;
    }

    getAll(){
        let array= [];
        try{
            let data = fs.readFileSync(this.route,'utf-8');
            array = JSON.parse(data);
            console.log("Ingreso por TRY");
        }
        catch{
            console.log("catch error"); 
        }
        console.log(array);
        return array;
    }

    deleteById(x){
        let array= [];
        let y = x;
        try{
            let data = fs.readFileSync(this.route,'utf-8');
            array = JSON.parse(data);
            console.log("Ingreso por TRY");
        }
        catch{
            console.log("catch error"); 
        }
        
        
        array.forEach(element => 
            {
           
                if(element.id == y)
                {
                    // console.log(element.id);
                    let id = element.id - 1
                    // console.log(id);
                    let removed = array.splice(id, 1);
                    console.log("ELEMENTO ELIMINADO: " + JSON.stringify(removed));
                    fs.writeFileSync(this.route,JSON.stringify(array))  
                    console.log(array);  
                }
            });
    }

    deletAll(){
        let array= []
        
        try{
            let data = fs.readFileSync(this.route,'utf-8');
            array = JSON.parse(data);
            console.log("Ingreso por TRY");
        }
        catch{
            console.log("catch error"); 
        }
        console.log(array);
        array =[]
        console.log(array);
        fs.writeFileSync(this.route,JSON.stringify(array));

    }

}

const contenedor= new Contenedor();
const producto1 = {title:"Heladera", price:2000};
const producto2 = {title:"Cocina", price:3000};
const producto3 = {title:"Lavarropas", price:3000};

// contenedor.save(producto1);
// contenedor.save(producto2);
// contenedor.save(producto3);
// contenedor.save(producto2);

// contenedor.getById(2);
// contenedor.getById(4);
// contenedor.getById(10);

// contenedor.getAll();

// contenedor.deleteById(1);

//contenedor.deletAll();



