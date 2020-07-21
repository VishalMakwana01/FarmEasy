import React from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import LibraryBooks from "@material-ui/icons/LibraryBooks";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

import CardIcon from "components/Card/CardIcon.js";
import { useGetHttp } from "../../Hooks/getHttp";
import MUIDataTable from "mui-datatables";

const useStyles = makeStyles(styles);

const columns = ["Common Name", "Indigenous manufacturers (M/s)"];

const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
];

const options = {
    filterType: 'checkbox',
};

export default function Pesticides() {
    const classes = useStyles();

    const [messageGet, fetchGetCall] = useGetHttp();

    React.useEffect(() => {
        fetchGetCall(`/graph/dealer`);
        console.log(messageGet);
    }, []);
    return (
        <div>
            {messageGet && <MUIDataTable
                title={"Insecticides and Pesticides List"}
                data={messageGet.data}
                columns={columns}
                options={options}
            />}
        </div>
    );
}
