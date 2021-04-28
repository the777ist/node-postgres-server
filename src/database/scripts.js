const scripts = {

    getUnitsByName: `SELECT ut.id, ut.name, ut.details, ut.updated_at "updatedAt", us.id "userId", us.name "userName"
    FROM units ut
    FULL OUTER JOIN users us ON ut.user_id = us.id
    WHERE ut.name ilike $1;`,

    getUnits: `SELECT ut.id, ut.name, ut.details, ut.updated_at "updatedAt", us.id "userId", us.name "userName"
    FROM units ut
    FULL OUTER JOIN users us ON ut.user_id = us.id;`,

    getUnit: `SELECT ut.id, ut.name, ut.details, ut.updated_at "updatedAt", us.id "userId", us.name "userName"
    FROM units ut
    FULL OUTER JOIN users us ON ut.user_id = us.id
    WHERE ut.id = $1;`,

    createUnit: `INSERT INTO units 
    (name, details, updated_at, user_id) VALUES 
    ($1, $2, $3, $4);`,

    updateUnit: `UPDATE units set name=$1, details=$2, updated_at=$3, user_id=$4 WHERE id=$5`,

    deleteUnit: `DELETE FROM units WHERE id=$1;`
}

module.exports = scripts;