import { useState } from "react"

// Styling


// Types



// SignUp
const SignUp = () => {

    // Variables
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
    })

    // Functions
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formData)
    }

    // Page
    return (
        <main>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={formData.username}
                        name="username"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        value={formData.email}
                        name="email"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={formData.password}
                        name="password"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password_confirmation">Confirm password:</label>
                    <input
                        type="password"
                        id="password_confirmation"
                        value={formData.password_confirmation}
                        name="password_confirmation"
                        onChange={handleChange}
                    />
                </div>
                <button>Sign up</button>
            </form>
        </main>
    )
}

export default SignUp