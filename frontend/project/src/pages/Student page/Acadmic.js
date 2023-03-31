import { useContext, useEffect } from "react"
import { ThemeContext } from "../../ThemeContext";
// Componets
import IntroCards from "../../Compoents/Cards/IntroCards";
import CircleProgress from "../../Compoents/charts/CircleProgress";
import Notifications from "../../Compoents/Cards/Notifications";
import TasksCards from "../../Compoents/Cards/TasksCards";
import StuMarks from "../../Compoents/Tables/StuMarks";
import Barchart from "../../Compoents/charts/BarChart.js";
import AnimatepagesDashboards from "../../AnimatepagesDashboards";

function Acadmic() {
    let Theme = useContext(ThemeContext).Theme
    let data_level = 50
    return (
            <AnimatepagesDashboards>
                <div className="Acadmic">
                    <section>
                        <IntroCards />
                    </section>
                    <section className="student-process bg-transparent">
                        <div className="rows align-items-start d-flex flex-wrap flex-lg-nowrap justify-content-lg-between justify-content-center  gap-2">
                            <CircleProgress />
                            <TasksCards data={data_level} />
                        </div>
                    </section>
                    <section className="activity bg-transparent">
                        <div className="rows d-flex d-flex flex-wrap flex-lg-nowrap justify-content-between align-items-start  gap-2">
                            <Barchart />
                            <Notifications />
                        </div>
                    </section>
                    <section className="Marks bg-transpaernt">
                        <div className="row d-flex justify-content-center">
                            <StuMarks />
                        </div>
                    </section>
                </div >
            </AnimatepagesDashboards>
    )
}
export default Acadmic


