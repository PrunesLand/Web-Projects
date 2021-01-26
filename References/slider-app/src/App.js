import React,{ useState } from "react";
import {SkillData} from "./SkillData";

function App() {
  const [skill, setSkill] = useState(SkillData);
  const [index,setIndex] = useState(0);

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span> skills
        </h2>
      </div>
      <div className='section-center'>
        {skill.map((item, itemIndex ) => {
          const {id, image , title, text} = item;

          return (
            <article key={id}>
              <img src={image} alt={title} className='person-img' />
            </article>
          )
        })}
      </div>
    </section>
  );
}

export default App;
