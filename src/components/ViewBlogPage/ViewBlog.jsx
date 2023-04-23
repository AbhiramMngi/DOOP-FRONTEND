import { useState } from "react";
import Header from "./components/Header";
import SidebarProfile from "./components/SidebarProfile";
import RelatedPosts from "./components/RelatedPosts";
import Editor from "../EditorPage/Components/Editor";
 
const ViewBlogPage = () => {
    const [initialData, setInitialData] = useState({  
        "time": 1682263346431,
    "blocks": [
        {
            "id": "f1lzZ0kJz5",
            "type": "header",
            "data": {
                "text": "Title",
                "level": 1,
                "alignment": "left"
            }
        },
        {
            "id": "obEZ2-0u0G",
            "type": "header",
            "data": {
                "text": "Subtitle",
                "level": 2,
                "alignment": "left"
            }
        },
        {
            "id": "PavFMxbieE",
            "type": "paragraph",
            "data": {
                "text": "A core memory for the rest of my life is going to be the absolute silence leaving the final performance of an otherwise incredible and upbeat music festival — the stunned disbelief of thousands and thousands of Frank Ocean fans leaving weekend 1 of Coachella 2023.",
                "alignment": "left"
            }
        },
        {
            "id": "-1SqFNAdpY",
            "type": "paragraph",
            "data": {
                "text": "The anticipation for Frank Ocean’s Coachella performance cannot be overstated. Since being announced as a headliner in 2020 (which fell through because of that whole pandemic thing), people had been speculating about new music (his last contributions to culture being 2016’s&nbsp;Blonde&nbsp;and a feature on&nbsp;The Life of Pablo) and what his stage show might bring. Many people also forget that while we were all at home isolated with (or without) loved ones, Frank was grieving the very sudden loss of his 18 year old younger brother Ryan who died in a car accident in August of the same year.",
                "alignment": "left"
            }
        }
    ],
    "version": "2.26.5"      
      });
  return (
    <div>
      <Header />
      <div className="flex h-screen pt-8">
        <div className="flex-1 ">
          <Editor blogContent={initialData}/>
        </div>
        <div className="w-1/4 bg-gray-100  max-h-full ">
          <SidebarProfile />
          <RelatedPosts />
        </div>
      </div>
    </div>
  );
};

export default ViewBlogPage;
