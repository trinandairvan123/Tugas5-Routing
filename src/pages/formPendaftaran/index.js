/** Libs */
import { useForm } from "react-hook-form";

export default function FormPendaftaran() {
    // Hooks
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onSubmit' });

    // Handler
    const handleLogin = (e) => {
        console.log(e);
        alert(`Data Peserta Bootcamp"` + e.nama + `" Berhasil Diterima`);
        reset();
    }
    const handleError = (errors, e) => {
        console.log(errors);
        alert('Data Pendaftar Tidak Sesuai')
    };

    return (
        <div className="App">
            <h1 className="mb-5">Daftar Segera Bootcamp</h1>
            <form onSubmit={handleSubmit(handleLogin, handleError)}>
                <div className="mb-3">
                    <label htmlFor="namaPeserta" className="form-label">Nama Lengkap Anda:</label>
                    <input className="form-control" id="namaPeserta" {...register("nama", {
                        required: { value: true, message: 'Nama Lengkap Gak boleh Kosong' },
                        minLength: { value: minLengthName, message: `Nama Lengkap Gak boleh kurang dari ${minLengthName} karakter` },
                        pattern: {
                            value: /^[a-zA-Z ]*$/,
                            message: 'Nama Lengkap Harus Berupa Huruf',
                        }
                    })} type={'text'} />
                    {errors?.nama && <div className="text-danger">{errors?.nama?.message}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="emailPeserta" className="form-label">Email:</label>
                    <input className="form-control" id="emailPeserta"  {...register("email", {
                        required: { value: true, message: 'Email Gak boleh Kosong' },
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Email tidak sesuai',
                        }
                    })} type={'email'} />
                    {errors?.email && <div className="text-danger">{errors?.email?.message}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="phonePeserta" className="form-label">No Handphone:</label>
                    <input className="form-control" id="phonePeserta" {...register("phonePeserta", {
                        required: { value: true, message: 'No Handphone Gak boleh Kosong' },
                        minLength: { value: phoneLength.min, message: `No Handphone Gak boleh kurang dari ${phoneLength.min} karakter` },
                        maxLength: { value: phoneLength.max, message: `No Handphone Gak boleh lebih dari ${phoneLength.max} karakter` },
                        pattern: {
                            value: /^(0|[1-9]\d*)(\.\d+)?$/,
                            message: 'No Handphone tidak sesuai',
                        },
                    })} type={'text'} />
                    {errors?.phonePeserta && <div className="text-danger">{errors?.phonePeserta?.message}</div>}
                </div>
                <div className="row mb-3">
                    <label htmlFor="formRadioBackground" className="form-label">Fakultas :</label>
                    <div>
                        <div className="form-check form-check-inline" id="formRadioBackground">
                            <input {...register('backgroundPendidikan', { required: { value: true, message: 'Latar Belakang Pendidikan Harus Pilih Salah Satu' } })}
                                type="radio"
                                name="backgroundPendidikan"
                                value="Ilmu Komputer"
                                className="form-check-input"
                                id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Fakultas Ilmu Komputer
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input {...register('backgroundPendidikan', { required: { value: true, message: 'Latar Belakang Pendidikan Harus Pilih Salah Satu' } })}
                                type="radio"
                                name="backgroundPendidikan"
                                value="Fakultas Lainnya"
                                className="form-check-input"
                                id="flexRadioDefault2" />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Fakultas Lainnya
                            </label>

                            

                        </div>
                    </div>
                    {errors?.backgroundPendidikan && <div className="text-danger">{errors?.backgroundPendidikan?.message}</div>}
                </div>
                <div className="row mb-3">
                    <label htmlFor="formSelectClass" className="form-label">Bootcamp yang dipilih:</label>
                    <div>
                        <select className="form-select" aria-label="Default select example" {...register("pilih", {
                            required: { value: true, message: 'Kelas Coding Harus Pilih Salah Satu' }
                        })}>
                            <option value="">Pilih Bootcamp yang ingin diikuti</option>
                            <option value="UI/UX Designer">UI/UX Designer</option>
                            <option value="React Js">React Js</option>
                            <option value="Spring Boot">Spring Boot</option>
                        </select>
                    </div>
                    {errors?.pilih && <div className="text-danger">{errors?.pilih?.message}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Foto Surat Kesungguhan:</label>
                    <input className="form-control" type="file" id="formFile" {...register("suratKesungguhan", { required: { value: true, message: 'Kelas Coding Harus Pilih Salah Satu' } })} />
                    {errors?.suratKesungguhan && <div className="text-danger">{errors?.suratKesungguhan.message}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Harapan Untuk Coding Bootcamp Ini:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" {...register("harapan")}></textarea>
                </div>
                <div className="row gap-3">
                    <button type="submit" className="btn btn-success col-auto">Submit</button>
                    <button type="reset" className="btn btn-danger col-auto">Reset</button>
                </div>
            </form>
        </div>
    );
}

const minLengthName = 3;
const phoneLength = {
    min: 9,
    max: 14
};