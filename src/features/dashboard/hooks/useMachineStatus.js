import { useState } from "react";

export const MACHINE_STATUS = ["Not Started", "In Progress", "Completed"];

const loadMachineStatus = () => {
    try {
        const data = JSON.parse(localStorage.getItem('machineStatus'))
        return MACHINE_STATUS.includes(data) ? data : "Not Started"
    } catch (error) {
        return "Not Started"
    }
}

export const useMachineStatus = () => {
    const [machineStatus, setMachineStatus] = useState(loadMachineStatus);

    const handleMechineStatus = (status) => {
        setMachineStatus(status);
        localStorage.setItem('machineStatus', JSON.stringify(status));
    };

    return {
        machineStatus,
        handleMechineStatus,
        MACHINE_STATUS,
    };
};