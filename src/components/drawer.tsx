import { Dispatch, SetStateAction } from 'react';
import NavHomeMobilePage from './nav.home.mobile';
interface DrawerProps {
    show: boolean;
}
const Drawer = ({ show }: DrawerProps) => {
    return (
        <div className={`fixed top-[72px] left-0 w-screen z-10 transition-all duration-300 transform ${show ? 'translate-x-[0] bg-[#101014]' : '-translate-y-[0]'}`}>
            <NavHomeMobilePage shows={show} />
        </div>
    );
};

export default Drawer;
