import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

const VocabularyRendered = () => {
    const [vocabulary, setVocabulary] = useState([])
    const { category } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/vocabulary/${category}`)
            .then(res => res.json())
            .then(({ data }) => setVocabulary(data))
    }, [])

    /*   console.log(voca)
      const vocabulary = [
          {
              category: "vegetables",
              vocabulary: [
                  { word: "cabbage", meaning: "বাঁধাকপি", image: cabbage, sentence: "", synonym: [], antonym: [] },
              ]
          }
  
      ] */
    const vocabulary2 = [
        {
            "category": "vegetables",
            "vocabulary": [
                { "word": "cabbage", "meaning": "বাঁধাকপি", "image": "cabbage", "sentence": "", "synonym": [], "antonym": [] }
            ]
        },
        {
            "category": "animals",
            "vocabulary": [
                { "word": "Cow", "meaning": "Ghoru", "image": "cabbage", "sentence": "", "synonym": [], "antonym": [] }
            ]
        }

    ];
    console.log(vocabulary)

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
        <div className="mt-12">
            <h1 className="main-title">{category} Vocabulary</h1>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-y-4 xl:gap-y-0">
                {
                    vocabulary?.map(({ word, meaning, image }) => <div className="flex flex-col items-center p-2">
                        <img className="w-16 h-auto mb-2" src={`http://localhost:5000/assets/vocabulary/${category + "/" + image}`} alt="" />

                        <div className="w-full flex flex-col items-center">
                            <span className="text-lg font-normal leading-6 ">{word}</span>
                            <span className="text-sm mt-0.5">{meaning}</span>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
export default VocabularyRendered;