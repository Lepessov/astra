import CroudFundingView from "./_components/croud-funding-view";
import PopularProject from "./_components/popular";
import QAView from "./_components/qa-view";
import SkillSwapView from "./_components/skill-swap-view";

const MainPage = () => {
    return (
        <div className="h-full overflow-auto flex flex-col bg-[#EBECF1] ">
            <PopularProject/>
            <CroudFundingView/>
            <SkillSwapView/>
            <QAView/>
        </div>
    )
}

export default MainPage;