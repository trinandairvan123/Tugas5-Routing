import { NavLink } from "react-router-dom";

export default function NotFound() {

    // Func

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1>Halaman Tidak Ditemukan</h1>
            <NavLink to={'/'}>Kembali Ke Home</NavLink>
        </div>
    );
}