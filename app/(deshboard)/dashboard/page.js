import AnalysesAndAlerts from "@/components/dashboard/dashboard/AnalysesAndAlerts";
import Card from "@/components/dashboard/dashboard/Card";
import InsightBanner from "@/components/dashboard/dashboard/InsightBanner";
import StatRow from "@/components/dashboard/dashboard/StatRow";



const Deshboard = () => {
    return (
        <div className="h-fit">



            <InsightBanner />
            <StatRow />
            <Card className="mt-6 h-56 bg-neutral-950/60 flex items-center justify-center text-neutral-400 text-sm">
                Chart placeholder
            </Card>


            <AnalysesAndAlerts />


        </div>
    )
}

export default Deshboard;


