import { useState } from "react";

export const useSingleSelect = (defaultIsOpen = false, defaultSelected?: string) =>{
    const [isOpen, setIsOpen] = useState(defaultIsOpen);
    const [selectedItem, setSelectedItem] = useState(defaultSelected);

    const toggle = () => setIsOpen(prevState => !prevState)

    return {
        isOpen,
        toggle,
        selectedItem,
        setSelectedItem
    }
}