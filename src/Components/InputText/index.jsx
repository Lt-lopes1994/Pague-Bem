import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function InputText({ name }) {
    return (
        <Box
            component="form"
            sx={{
                "& > :not(style)": { m: 1, width: "34.4rem" },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label={name} variant="outlined" />
        </Box>
    );
}