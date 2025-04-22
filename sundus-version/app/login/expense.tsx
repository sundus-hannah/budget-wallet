import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

//these hold empty strings that get filled when user enters information
export default function Expense() {
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState("")
    const [date, setDate] = useState("")

    //when login button is clicked send the request to the backend link
    const sendResetLink = async () => {
        const url = "http://localhost:8080/expense";
        const expenseInfo = { "Expense Amount": amount }
        console.log(expenseInfo)
        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(expenseInfo),
            });
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            } 3

            const json = await response.json();
            console.log(json);
            //if login successfull got redirect to home page
        } catch (error) {
            console.error(error.message);
        }
    }


    return (
        //background
        <Box sx={{ height: '1024px', width: '1440px', margin: 'auto', display: 'flex', gap: 2, flexDirection: 'column', justifyContent: 'center', backgroundColor: "#8A93B4", }}>



            <Box sx={{ width: "1440px", height: "131px", backgroundColor: "#F5F4F4", display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 4 }}>

                <Button
                    variant="contained"

                    sx={{
                        backgroundColor: "#3B4471", borderRadius: "20px",
                        width: "172px",
                        height: "87px",
                        fontSize: "20px",
                        fontFamily: "Kaisei Decol",
                        color: "#000000",
                        textTransform: "none",


                    }}
                    onClick={sendResetLink}>
                    Manage Financials
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#BCC0CF", borderRadius: "20px",
                        width: "172px",
                        height: "87px",
                        fontSize: "20px",
                        fontFamily: "Kaisei Decol",
                        color: "#000000",
                        textTransform: "none",

                    }}
                    onClick={sendResetLink}>
                    Reports
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#BCC0CF", borderRadius: "20px",
                        width: "172px",
                        height: "87px",
                        fontSize: "20px",
                        fontFamily: "Kaisei Decol",
                        color: "#000000",
                        textTransform: "none",

                    }}
                    onClick={sendResetLink}>
                    Financial Goals
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#BCC0CF", borderRadius: "20px",
                        width: "172px",
                        height: "87px",
                        fontSize: "20px",
                        fontFamily: "Kaisei Decol",
                        color: "#000000",
                        textTransform: "none",

                    }}
                    onClick={sendResetLink}>
                    Account
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#BCC0CF", borderRadius: "20px",
                        width: "172px",
                        height: "87px",
                        fontSize: "20px",
                        fontFamily: "Kaisei Decol",
                        color: "#000000",
                        textTransform: "none",

                    }}
                    onClick={sendResetLink}>
                    Logout
                </Button>


            </Box>







            <Box sx={{ width: "963px", height: "715px", backgroundColor: "#F5F4F4", borderRadius: "30px", margin: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'left', alignItems: 'left', gap: 3 }}>
                <Typography sx={{ fontFamily: "Kaisei Decol", color: "#000000", fontSize: "48px" }}>
                    Expense Entries
                </Typography>

                <Box sx={{ width: "662px", height: "425px", backgroundColor: "#D9D9D9", borderRadius: "30px", margin: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
                    <TextField
                        id="amount"
                        label="Amount"
                        variant="standard"
                        margin="none"
                        slotProps={{
                            input: {
                                disableUnderline: true,
                            },
                        }}
                        sx={{
                            backgroundColor: "#FFFFFF", borderRadius: "20px",
                            width: "565px",
                            // height: "36px",

                            // fontSize: "20px",
                            fontFamily: "Kaisei Decol",
                            color: "#DFDADA",
                            textTransform: "none",

                            // '& .MuiInputBase-root': {
                            //     borderRadius: "30px", // Rounded edges for the input itself
                            // },
                            // '& .MuiOutlinedInput-notchedOutline': {
                            //     border: "none", // Removes the outline (the border)
                            // },
                            // '& .MuiInputLabel-root': {
                            //     fontSize: "36px", // Larger label font size
                            //     color: "#DFDADA", // Label color
                            // },
                            // '& .MuiInputBase-input': {
                            //     padding: "18px", // Adjust padding for input text
                            // }
                        }}


                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setAmount(event.target.value);
                        }}
                    />


                    <TextField
                        id="category"
                        label="Category"
                        variant="outlined"

                        sx={{
                            backgroundColor: "#FFFFFF", borderRadius: "20px",
                            width: "565px",
                            height: "36px",

                            fontSize: "20px",
                            fontFamily: "Kaisei Decol",
                            color: "#DFDADA",
                            textTransform: "none",
                            '& .MuiInputBase-root': {
                                borderRadius: "30px", // Rounded edges for the input itself
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: "none", // Removes the outline (the border)
                            },
                            '& .MuiInputLabel-root': {
                                fontSize: "36px", // Larger label font size
                                color: "#DFDADA", // Label color
                            },
                            '& .MuiInputBase-input': {
                                padding: "18px", // Adjust padding for input text
                            }
                        }}


                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setAmount(event.target.value);
                        }}
                    />

                    <TextField
                        id="date feilds"
                        label="Date"
                        variant="outlined"

                        sx={{
                            backgroundColor: "#FFFFFF", borderRadius: "20px",
                            width: "565px",
                            height: "36px",

                            fontSize: "20px",
                            fontFamily: "Kaisei Decol",
                            color: "#DFDADA",
                            textTransform: "none",
                            '& .MuiInputBase-root': {
                                borderRadius: "30px", // Rounded edges for the input itself
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: "none", // Removes the outline (the border)
                            },
                            '& .MuiInputLabel-root': {
                                fontSize: "36px", // Larger label font size
                                color: "#DFDADA", // Label color
                            },
                            '& .MuiInputBase-input': {
                                padding: "18px", // Adjust padding for input text
                            }
                        }}


                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setAmount(event.target.value);
                        }}
                    />


                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#FFFFFF", borderRadius: "20px",
                            width: "106px",
                            height: "36px",
                            fontSize: "20px",
                            fontFamily: "Kaisei Decol",
                            color: "#000000",
                            textTransform: "none",

                        }}
                        onClick={sendResetLink}>
                        Save
                    </Button>

                </Box>
            </Box>

        </Box>


    )

}
