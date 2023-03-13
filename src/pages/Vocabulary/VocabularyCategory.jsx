import { useNavigate } from "react-router-dom";
import { categories } from "../Vocabulary/categories";

const VocabularyCategory = () => {

    const navigate = useNavigate()
    const handleNavigate = (category) => {
        const removeSpace = category.split(' ').join('')
        navigate(`/vocabulary/${removeSpace}`)
    }

    return (
        <div className="p-14 pt-12">
            <h1 className="main-title">Categories of vocabulary</h1>

            <div className="grid grid-cols-4 gap-6">
                {
                    categories.map((item, index) => <div key={index} className="flex items-center gap-1.5 cursor-pointer v_card pl-1">
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

