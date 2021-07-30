import './View.scss';
import { useState } from 'react';

function View({ tab }) {

  const [state, setstate] = useState(0);

  const DisplayScreen = ({item}) => {
    return <img src={item.image} />
  }

  const DisplayTab = ({ project, index }) => {
    return (
      <div id={index} className="view__item">
        <div className="view__item__head">
          <img src={project.icon} alt=""/>
          <h2>{project.title}</h2>
        </div>
        <div className="view__item__description">
          <p>{project.description}</p>
        </div>
        

        <div className="view__item__preview">

          <div className="view__item__total">
            <img src={project.screen[project.current].image} />
            <h2>{project.screen[project.current].title}</h2>
          </div>

            <div className="view__item__minia">
              {project.screen.map((item,index) => {
                  return <div style={{filter: project.current !== index ? 'brightness(0.6)' : ""}} onClick={() => {
                    project.current = index;
                    setstate(state+1);
                    console.log(index)
                  }}>
                  <DisplayScreen key={index} item={item}/>
                </div>
              })}
            </div>
        </div>

      </div>
    );
  }

  return <div className="view">
    {tab.map((item, index) => {
      return <DisplayTab project={item} index={index} key={index} />
    })}
  </div>
}

/*
            {() => project.screen.map((item,index) => {
              return <DisplayScreen key={index} item={item}/>
            })}

*/
export default View;