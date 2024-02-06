import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const Layout = () => {
    return (
        <>
            <Box minW='350px' pt="2em" mt="4em">
                <img
                    src="https://i.liadm.com/s/81303?locationId=c1by6u2tTkBaf8eekpx1&formId=&url_path=&cbust=&gclid=&utm_source=&utm_medium=&utm_campaign=&s1=&s2=&s3=alt"
                    style={ { display: 'none', important: 'true' } }
                    alt="Description of the image"
                />
                <Outlet />
            </Box>
        </>
    );
};

export default Layout;
