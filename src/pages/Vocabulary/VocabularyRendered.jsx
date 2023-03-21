import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from "../../assets/others/Bust2.png"
import baseURL from "../../api/api";
import { Loading, LoadingTwo } from "../../components/Loading/Loading";

const VocabularyRendered = () => {
    const [vocabulary, setVocabulary] = useState([]);
    const [loading, setLoading] = useState(false)
    const { category } = useParams();

    useEffect(() => {
        AOS.init({ duration: 600 });
        const url = `${baseURL}/api/v1/vocabulary/${category}`

        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await fetch(url);
                const data = await response.json();
                setVocabulary(data.data);
                setLoading(false)
            } catch (error) {
            }
        }
        fetchData()


    }, [])


    /*  const vegetables = [
         { word: "cabbage", meaning: "বাঁধাকপি", image: cabbage, sentence: "", synonym: [], antonym: [] },
         { word: "carrot", meaning: "গাজর", image: carrot, sentence: "", synonym: [], antonym: [] },
         { word: "cucumber", meaning: "শসা", image: cucumber, sentence: "", synonym: [], antonym: [] },
         { word: "tomato", meaning: "টমেটো", image: tomato, sentence: "", synonym: [], antonym: [] },
         { word: "cauliflower", meaning: "ফুলকপি", image: cauliflower, sentence: "", synonym: [], antonym: [] },
         { word: "potato", meaning: "আলু", image: potato, sentence: "", synonym: [], antonym: [] },
         { word: "mushroom", meaning: "মাশরুম", image: mushroom, sentence: "", synonym: [], antonym: [] }
     ]
  */


    return (
        <>
            {loading ? <LoadingTwo /> :
                <div className="mt-10">
                    <div>
                        <div data-aos="zoom-in-up" >
                            <img className="max-w-[130px] h-auto mx-auto" src={image} />
                        </div>
                        <h1 className="main-title">{category} Vocabulary</h1>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-y-4 xl:gap-y-0 mt-11">
                        {
                            vocabulary?.map(({ word, meaning, image }) => <div className="flex flex-col items-center p-2">
                                <img className="w-16 h-auto mb-2" src={`${baseURL}/assets/vocabulary/${category + "/" + image}`} alt="" />

                                <div className="w-full flex flex-col items-center">
                                    <span className="text-lg font-normal leading-6 ">{word}</span>
                                    <span className="text-[15px] mt-0.5 font-['Hind_Siliguri'] font-medium text-[#334155]">{meaning}</span>
                                </div>
                            </div>)
                        }
                    </div>
                </div>}
        </>
    )
}
export default VocabularyRendered;