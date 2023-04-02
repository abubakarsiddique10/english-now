import { useNavigate } from "react-router-dom";
import { categories } from "../Vocabulary/categories";
import image from "../../assets/others/Bust1.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const VocabularyCategory = () => {

    const navigate = useNavigate()
    const handleNavigate = (category) => {
        const removeSpace = category.split(' ').join('')
        navigate(`/vocabulary/${removeSpace}`)
    }
    useEffect(() => {
        AOS.init({ duration: 600 });
    }, [])

    return (
        <div className="md:p-14 pt-10">
            <div className=".category-img">
                <img data-aos="zoom-in-up" className="max-w-[110px] h-auto mx-auto" src={image} />
                <h1 className="main-title" >Categories of vocabulary</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 mt-11">
                {
                    categories.map((item, index) => <div key={index} className="flex items-center gap-1.5 cursor-pointer v_card px-2 md:pl-1">
                        <div className={`w-[50px] h-[50px] flex items-center justify-center rounded`}>
                            <img src={item.icon} />
                        </div>
                        <h3 onClick={() => handleNavigate(item.category)} className="sub_title capitalize">{item.category}</h3>
                    </div>)
                }
            </div>
        </div>
    )
}
export default VocabularyCategory

