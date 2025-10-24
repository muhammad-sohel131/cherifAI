import logo from "@/public/logo_full.png";
import {
    Bell,
    Menu,
    Settings,
    User2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function TopNav({ onMenu }) {
    return (
        <nav className="sticky top-0 z-40 w-full myborderBottom overflow-hidden bg-neutral-900 ">
            <div className="mx-auto flex h-14 items-center justify-between px-3 sm:px-4">
                <div className="flex items-center gap-2">
                    <button
                        onClick={onMenu}
                        className="inline-flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 p-2 text-neutral-200 hover:border-neutral-700 hover:bg-neutral-800 md:hidden"
                        aria-label="Open menu"
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                    <Link href="/" className="w-[107px] h-full">
                        <Image className="" src={logo} alt="logo" width={1000} height={1000} />
                    </Link>
                </div>



                <div className="flex items-center gap-2">

                    <span className="hidden rounded-lg myborder bg-neutral-950 px-2.5 py-1 text-[10px] font-semibold text-emerald-300 md:inline-block">● LIVE</span>
                    <button className="hidden rounded-lg myborder bg-neutral-950 px-3 py-1.5 text-xs font-medium text-neutral-200 hover:border-neutral-700 hover:bg-neutral-800 md:inline-flex">
                        <Settings className="mr-1 h-3.5 w-3.5" /> Settings
                    </button>
                    <button className="rounded-lg myborder bg-neutral-950 p-2 hover:border-neutral-700 hover:bg-neutral-800" aria-label="Notifications">
                        <Bell className="h-4 w-4" />
                    </button>


                    <button className="hidden w-[35px] h-[35px] border rounded-full border-2 border-gray-100 bg-neutral-900  text-neutral-200 hover:bg-neutral-800 md:flex items-center justify-center cursor-pointer">
                        <User2 className="h-5 w-5" />
                    </button>

                </div>
            </div>
        </nav>
    );
}

export default TopNav;