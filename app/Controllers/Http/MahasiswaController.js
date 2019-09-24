'use strict'

const Mahasiswa = use('App/Models/Mahasiswa')

class MahasiswaController {

  async index({response}) {
    let data_mahasiswa = await Mahasiswa.all()
    return response.status(200).json(data_mahasiswa)
  }

  async show({params, response}) {
    let id = params.id
    let data_mahasiswa = await Mahasiswa.find(id)
    return response.status(200).json(data_mahasiswa)
  }

  async add({request, response}) {
    let new_mahasiswa = new Mahasiswa()
    new_mahasiswa.nama = request.input('nama')
    new_mahasiswa.nim = request.input('nim')
    new_mahasiswa.prodi = request.input('prodi')
    new_mahasiswa.alamat = request.input('alamat')
    new_mahasiswa.tahun_masuk = request.input('tahun_masuk')

    await new_mahasiswa.save()
    return response.status(200).json(new_mahasiswa)
  }

  async update({request, response, params}) {
    let data_mahasiswa = await Mahasiswa.find(params.id)
    data_mahasiswa.nama = request.input('nama')
    data_mahasiswa.nim = request.input('nim')
    data_mahasiswa.prodi = request.input('prodi')
    data_mahasiswa.alamat = request.input('alamat')
    data_mahasiswa.tahun_masuk = request.input('tahun_masuk')

    await data_mahasiswa.save()

    return response.status(200).json(data_mahasiswa)
  }

  async delete({params, response}) {
    let data_mahasiswa = await Mahasiswa.find(params.id)

    await data_mahasiswa.delete()
    return response.status(200).json({"message": "Data berhasil dihapus"})
  }

}

module.exports = MahasiswaController
