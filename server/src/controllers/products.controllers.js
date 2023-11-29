
import { getConnection,sql, queries } from "../database";



export const getPatients = async (req, res) => {

    try{

    const pool = await getConnection();
    const result =await pool.request().query(queries.getAllProducts);
    console.log(result);

    res.json(result.recordset);

    }catch(error){
        res.status(500);
        res.send(error.mesage);
    }
    

};


export const createNewPatient = async (req, res) =>{

    
    const { name, description} = req.body ;
    let {number} = req.body;

    if(name == null || description == null)
    {
        return res.status(400).json( { msg: 'bad request. LLENA TODOS LOS DATOS' })
    }
    
    if(number == null) number = 0;

    try {

    const pool = await getConnection();

    await pool.request()
    .input("name", sql.VarChar, name)
    .input("description", sql.Text,description)
    .input("number", sql.Int,number)
    .query( queries.addNewPatient
    );

    res.json({name, description, number });

    } catch (error) {

        res.status(500);
        res.send(error.mesage);
    }
};

export const getPatientsById = async (req, res) => {
 
    const {id} = req.params;

    const pool = await getConnection()
    const result = await pool.request()
    .input('id', id).query(queries.getPatientsById)

   

    res.send(result.recordset[0]);
};

export const deletePatientsById = async (req, res) => {
 
    const {id} = req.params;

    const pool = await getConnection()
    const result = await pool.request()
    .input('id', id)
    .query(queries.deletePatients)


    res.sendStatus(204);
};

export const getTotalPatients = async (req, res) => {
 

    const pool = await getConnection()
    const result = await pool.request()
    .query(queries.getTotalPatients);

    res.json(result.recordset[0][" "]);
};

export const updatePatientsById = async (req, res) => {
 
    const { name, description, number} = req.body ;
   
    const {id} = req.params;

    if(name == null || description == null  || number == null)
    {
        return res.status(400).json( { msg: 'bad request. LLENA TODOS LOS DATOS' })
    }
    
    const pool = await getConnection()

    await pool
    .request()
    .input("name", sql.VarChar, name)
    .input("description", sql.Text,description)
    .input("number", sql.Int,number)
    .input("number", sql.Int,number)
    .input("id", sql.Int,id)
    .query( queries.updatePatientsById);


    res.json({ name, description, number });
};