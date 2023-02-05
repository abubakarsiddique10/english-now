import { useParams } from "react-router-dom";
import cabbage from "../../assets/vocabulary/vegetables/cabbage.png";
import carrot from "../../assets/vocabulary/vegetables/carrot.png";
import cucumber from "../../assets/vocabulary/vegetables/cucumber.png";
import tomato from "../../assets/vocabulary/vegetables/tomato.png";
import cauliflower from "../../assets/vocabulary/vegetables/cauliflower.png";
import potato from "../../assets/vocabulary/vegetables/potato.png";
import mushroom from "../../assets/vocabulary/vegetables/mushroom.png";

const VocabularyRendered = () => {
    const { category } = useParams();
    const vocabulary = [
        {
            category: "vegetables",
            vocabulary: [
                { name: "cabbage", meaning: "বাঁধাকপি", image: cabbage },
                { name: "carrot", meaning: "গাজর", image: carrot },
                { name: "cucumber", meaning: "শসা", image: cucumber },
                { name: "tomato", meaning: "টমেটো", image: tomato },
                { name: "cauliflower", meaning: "ফুলকপি", image: cauliflower },
                { name: "potato", meaning: "আলু", image: potato },
                { name: "mushroom", meaning: "মাশরুম", image: mushroom }
            ]
        }

    ]


    const vegetables = [
        { name: "cabbage", meaning: "বাঁধাকপি", image: cabbage },
        { name: "carrot", meaning: "গাজর", image: carrot },
        { name: "cucumber", meaning: "শসা", image: cucumber },
        { name: "tomato", meaning: "টমেটো", image: tomato },
        { name: "cauliflower", meaning: "ফুলকপি", image: cauliflower },
        { name: "potato", meaning: "আলু", image: potato },
        { name: "mushroom", meaning: "মাশরুম", image: mushroom }
    ]

    return (
        <div className="mt-12">
            <h1 className="main-title">{category} Vocabulary</h1>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-y-4 xl:gap-y-0">
                {
                    vegetables.map(({ name, meaning, image }) => <div className="flex flex-col items-center p-2">
                        <img className="w-16 h-auto mb-2" src={image} alt="" />
                        <div className="w-full flex flex-col items-center">
                            <span className="text-lg font-normal leading-6 ">{name}</span>
                            <span className="text-sm mt-0.5">{meaning}</span>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
export default VocabularyRendered;