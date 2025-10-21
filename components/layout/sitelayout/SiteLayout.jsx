import Header from "@/components/layout/sitelayout/Header";

const Sitelayout = ({ children }) => {
    return (
        <div className="">
            <Header />
            <div className="py-16">
                {children}
            </div>
        </div>
    )
}

export default Sitelayout;
