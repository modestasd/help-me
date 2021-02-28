export interface ISingleSelectActions {
    isOpen: boolean;
    toggle: () => void;
    selectedItem: string;
    setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
};

export interface ISingleSelectContext extends ISingleSelectActions {

}
