import './Project.scss';

function Project( { tab }) {

  const goToViolation=(id)=>{
    const violation = document.getElementById(id);
    
    window.scrollTo({
      top:violation.offsetTop,
      behavior:"smooth"
    });
  };

  const DisplayList = () => {
    return tab.map((item,index)=> {
      const i = index;
      return <li className="project__item" key={index}>
        <img alt="icon" src={item.icon} />
        <p onClick={() => goToViolation(i)}>{item.title}</p>
      </li>
    })
  }
  
  return (
    <div className="project">
      <div className="project__center">
        <h1>Mes projets web en 2021</h1>
        <DisplayList />
      </div>
    </div>
  );
}


export default Project;