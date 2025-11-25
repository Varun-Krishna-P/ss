import { useAppConfig } from "../hooks/useAppConfig";
import Title from "../types/Title";
import React from 'react';


const HeadTitle = ({text}: Title) => {
    const {site_name} = useAppConfig();
    return <title>{`${site_name} - ${text}`}</title>
}

export default HeadTitle;