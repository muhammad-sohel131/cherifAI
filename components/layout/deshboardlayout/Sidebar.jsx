import logo from "@/public/logo_full.png";
import Link from "next/link";

import {
    Bot,
    Building2,
    ChartBarStacked,
    ChevronRight,
    FileText,
    Home,
    LineChart,
    Lock,
    PanelsTopLeft,
    Plus,
    Wallet,
    X
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMemo } from "react";


function Sidebar({ open, onClose }) {



    const pathname = usePathname();

    const items = useMemo(
        () => [
            { icon: PanelsTopLeft, label: "Dashboard", href: "/dashboard" },
            { icon: LineChart, label: "Deal Analyzer", href: "/dashboard/deals" },
            { icon: Plus, label: "Add Property", href: "/dashboard/addproperty" },
            { icon: Wallet, label: "Funding Finder", href: "/dashboard/funding" },
            { icon: FileText, label: "Blueprints", href: "/dashboard/blueprints" },
            { icon: Building2, label: "Properties", href: "/dashboard/properties" },
            { icon: ChartBarStacked, label: "Market Watch", href: "/dashboard/market" },
            { icon: Home, label: "Mortgage", href: "/dashboard/mortgage" },
            { icon: Bot, label: "CherifAI", href: "/dashboard/chat" },
            { icon: Lock, label: "Vault", href: "/dashboard/vault" },
        ],
        []
    );




    return (
        <>
            {/* Mobile drawer */}
            <div
                className={`fixed inset-0 z-40 bg-black/50 transition-opacity md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
                onClick={onClose}
            />
            <aside
                className={`fixed top-0 h-screen inset-y-0 left-0 z-50 w-72 transform myborderRight bg-neutral-950 p-3 transition-transform duration-200 md:sticky md:top-14 md:z-auto md:w-[260px] md:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"
                    }`}
                aria-hidden={!open}
            >
                <div className="mb-2 flex items-center justify-between px-1 md:hidden">
                    <Link href="/" className="w-[107px] h-full">
                        <Image className="" src={logo} alt="logo" width={1000} height={1000} />
                    </Link>
                    <button onClick={onClose} className="rounded-lg border border-neutral-800 bg-neutral-900 p-2 text-neutral-200 hover:border-neutral-700 hover:bg-neutral-800" aria-label="Close menu">
                        <X className="h-4 w-4" />
                    </button>
                </div>


                <nav className="mt-2">
                    {items.map(({ icon: Icon, label, href }, idx) => (
                        <Link
                            key={idx}
                            href={href}
                            className={`mb-2 flex items-center justify-between rounded-xl px-3 py-2 text-sm transition hover:bg-neutral-700 hover:text-cyan-400 ${href === pathname ? "bg-neutral-700 text-cyan-400" : "text-neutral-300"}`}
                            onClick={onClose}
                        >
                            <span className="flex items-center gap-3">
                                <Icon className="h-6 w-6 brandColor" />
                                <span className="text-lg font-normal">{label}</span>
                            </span>
                            <ChevronRight className="h-4 w-4 text-neutral-600" />
                        </Link>
                    ))}
                </nav>
            </aside>
        </>
    );
}


export default Sidebar;