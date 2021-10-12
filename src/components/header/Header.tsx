import React, {FC, memo} from 'react'
import {AppBar, Toolbar, Typography} from "@mui/material";

export const Header:FC= memo(() => {
    return (
        <AppBar position="static">
            <Toolbar style={{justifyContent: "space-between"}}>
                <Typography variant="h6">
                    Products
                </Typography>
            </Toolbar>
        </AppBar>
    )
})
