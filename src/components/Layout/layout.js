import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const Layout = () => {
    return (
        <>
            <Box minW='350px' pt="2em" mt="4em">

                <Outlet />
            </Box>
        </>
    );
};

export default Layout;
