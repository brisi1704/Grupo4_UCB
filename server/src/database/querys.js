
export const queries = {
    getAllProducts: 'SELECT* FROM patients',

    addNewPatient: 
    "INSERT INTO PATIENTS (name, description, number) VALUES (@name, @description, @number)",

    getPatientsById: 'SELECT* FROM patients where id = @id',

    deletePatientsById: 'DELETE FROM [webstore].[dbo].[patients] WHERE id = @id',

    getTotalPatients: 'SELECT COUNT(*) FROM patients',
    
    updatePatientsById: 'UPDATE patients SET NAME = @name, Description = @description, Number = @number WHERE id = @id'
}