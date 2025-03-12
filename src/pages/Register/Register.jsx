import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [error, setError] = useState(null);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
        const user = await createUser(formData.email, formData.password, formData.name);
        
        if (!user) {
            throw new Error("User creation failed. No user data returned.");
        }

        // Send user data to backend
        const userData = {
            uid: user.uid, // Ensure uid exists
            name: formData.name, 
            email: formData.email,
            photoURL: user.photoURL || "", 
            createdAt: new Date().toISOString(),
            role: "user" 
        };

        const response = await fetch("http://localhost:5000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error("Failed to save user to database.");
        }

        Swal.fire("Success!", "Registration successful!", "success");
        navigate('/');
    } catch (error) {
        console.error("Registration Error:", error.message);
        setError(error.message);
        Swal.fire("Error!", error.message, "error");
    }
};

  

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold text-[#242a56]">Register now!</h1>
                </div>
                <div className="bg-white w-full max-w-sm shrink-0 shadow-lg">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="input"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <label className="fieldset-label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="input"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <label className="fieldset-label">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="input"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                {error && <p className="text-red-500">{error}</p>}
                                <button type="submit" className="btn text-white mt-4 bg-[#6878d6] hover:bg-blue-800">
                                    Register
                                </button>
                            </fieldset>
                        </form>
                        <p className="text-red-500">Already have an account? 
                            <span className="text-blue-500 cursor-pointer" onClick={() => navigate('/login')}>
                                Login
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
