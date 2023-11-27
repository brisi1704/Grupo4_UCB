
import { getConnection } from "../database/connection";

export const getPatients = async (req, res) => {
    const pool = await getConnection();
    const result =await pool.request().query("SELECT* FROM patients");
    console.log(result);

    res.json(result.recordset);

};


export const createNewPatient = (req, res) =>{
    const { name, description} = req.body
    console.log(name, description)
}