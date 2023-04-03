import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUp(props) {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "", RecommendationOptions: "" })
    let history = useNavigate();

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, RecommendationOptions: credentials.RecommendationOptions })
        });

        const json = await response.json();
        console.log(json);

        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authToken);
            // Redirect
            history(`/${json.RecommendationOptions}`);
            props.showAlert("Account Created Successfully", "success");
        } else {
            props.showAlert("Invalid Details", "danger");
        }
    }

    return (
        <div className='container mt-3'>
            <h2 className="" style={{
                marginTop: '5rem'
            }}
            >Create an Account to use NewsMedia</h2>
            <form onSubmit={handleSubmit}>
                <div className="my-2">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input required minLength={5} type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input required type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input required minLength={5} type="password" className="form-control" id="password" name="password" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input required minLength={5} type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} />
                </div>

                {/* Recommendation */}
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="RecommendationOptions" id="General" value="General" checked onChange={onChange} />
                    <label className="form-check-label" htmlFor="inlineRadio1">General</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="RecommendationOptions" id="Business" value="Business" onChange={onChange} />
                    <label className="form-check-label" htmlFor="inlineRadio2">Business</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="RecommendationOptions" id="Entertainment" value="Entertainment" onChange={onChange} />
                    <label className="form-check-label" htmlFor="inlineRadio1">Entertainment</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="RecommendationOptions" id="Health" value="Health" onChange={onChange} />
                    <label className="form-check-label" htmlFor="inlineRadio2">Health</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="RecommendationOptions" id="Science" value="Science" onChange={onChange} />
                    <label className="form-check-label" htmlFor="inlineRadio1">Science</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="RecommendationOptions" id="Sports" value="Sports" onChange={onChange} />
                    <label className="form-check-label" htmlFor="inlineRadio2">Sports</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="RecommendationOptions" id="Technology" value="Technology" onChange={onChange} />
                    <label className="form-check-label" htmlFor="inlineRadio1">Technology</label>
                </div>



                <div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>

        </div>
    )
}
