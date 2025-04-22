import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitLogin = async () => {
        const url = "http://localhost:8080/login";
        const loginInfo = { "email": email, "password": password }
        console.log(loginInfo)
        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(loginInfo),
            });
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            console.log(json);
            //if login successfull got home page
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <Box sx={{ width: '250px', margin: 'auto', marginTop: '100px', display: 'flex', gap: 2, flexDirection: 'column', justifyContent: 'center' }}>

            <TextField
                id="email"
                label="Email"
                variant="outlined"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(event.target.value);
                }}
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(event.target.value);
                }}
            />
            <Button variant="contained" onClick={submitLogin}>Login</Button>

        </Box>
    )

}
