const pool = require('../database/index')

const driversController = {

    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query(
                `SELECT *
                FROM motorista`
            )
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: 'error'
            })
        }
    },

    getById: async (req, res) => {
        try {
            const { cnh } = req.params

            const [rows, fields] = await pool.query(
                `SELECT *
                FROM motorista
                WHERE cnh = ?`,
                [cnh]
            )
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: 'error'
            })
        }
    },

    create: async (req, res) => {
        try {
            const { cnh, nome, data_nascimento, endereco_id } = req.body

            const [rows, fields] = await pool.query(
                `INSERT INTO motorista
                (cnh, nome, data_nascimento, endereco_id)
                VALUES
                (?, ?, ?, ?)`,
                [ cnh, nome, data_nascimento, endereco_id ]
            )
            res.json({
                data: rows
            })
        } catch(error) {
            console.log(error)
            res.json({
                status: 'error'
            })
        }
    },

    update: async (req, res) => {
        try {
            const { cnh } = req.params
            const { nome, data_nascimento, endereco_id } = req.body

            const [rows, fields] = await pool.query(
                `UPDATE motorista
                SET nome = ?, data_nascimento = ?, endereco_id = ?
                WHERE cnh = ?`,
                [ nome, data_nascimento, endereco_id, cnh ]
            )
            res.json({
                data: rows
            })
        } catch(error) {
            console.log(error)
            res.json({
                status: 'error'
            })
        }
    },

    delete: async (req, res) => {
        try {
            const { cnh } = req.params

            const [rows, fields] = await pool.query(
                `DELETE FROM motorista
                WHERE cnh = ?`,
                [ cnh ]
            )
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: 'error'
            })
        }
    }

}

module.exports = driversController