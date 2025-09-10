import React, { useState } from "react";

function Contact() {
    const [form, setForm] = useState ({
        firstName: "",
        lastName: "",
        email:"",
        comments:"",
    });
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted! Thank You" );
    };
    const handleDelete =() => {
        setForm({
           firstName:"",
           lastName:"",
           email: "",
           comments:"", 
        });
    };

    return (
        <div>
            <h2 className="luckiest-guy-regular">Contact Us </h2>
            <form onSubmit={handleSubmit} className="mt-3">
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input 
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input 
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input 
                        type="email"
                        className="form-control"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Comments</label>
                    <textarea 
                        className="form-control"
                        name="comments"
                        value={form.comments}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-secondary me-2">Send</button>
                <button type="button" className="btn btn-secondary" onClick={handleDelete}>Clear</button>
            </form>
        </div>
    );
}

export default Contact;