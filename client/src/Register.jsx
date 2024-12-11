import { useState } from "react";
import axios from "axios";

export default function Register() {
    const [username, setUser] = useState("");
    const [password, setPassword] = useState("");
    async function register(ev) {
        ev.preventDefault();
        await axios.post('/register', {username, password})
    }
    return (
        <div className="bg-blue-50 h-screen flex items-center">
            <form className="w-64 mx-auto mb-12" onSubmit={register}>
                <input value={username} onChange={ev => setUser(ev.target.value)} type="text" placeholder="Username" className="block w-full rounded-sm p-2 mb-2 border"></input>
                <input value={password} onChange={ev => setPassword(ev.target.value)} type="password" placeholder="Password" className="block w-full rounded-sm p-2 mb-2 border"></input>
                <button className="bg-blue-500 text-white block w-full rounded-sm p-2">Register</button>
            </form>
        </div>
    );
}