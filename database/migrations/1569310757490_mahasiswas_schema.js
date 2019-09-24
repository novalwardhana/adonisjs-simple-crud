'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MahasiswasSchema extends Schema {
  up () {
    this.create('mahasiswas', (table) => {
      table.increments()
      table.string('nama', 80).notNullable()
      table.string('nim', 20).notNullable().unique()
      table.string('prodi', 80)
      table.string('alamat', 100)
      table.integer('tahun_masuk', 4)
      table.integer('tahun_lulus', 4)
      table.timestamps()
    })
  }

  down () {
    this.drop('mahasiswas')
  }
}

module.exports = MahasiswasSchema
