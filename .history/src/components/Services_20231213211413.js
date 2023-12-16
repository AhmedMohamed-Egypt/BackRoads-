import { services } from "../data"
import Title from "./Title"

function Services() {
    return (
       
    <section className="section services" id="services">

    <Title title={"our"} subtitle={"services"}/>

  
    <div className="section-center services-center">
   

    {services.map((item)=>{
      const {id,icon,title,text} = item
      return    <article className="service" key={id}>
      <span className="service-icon"><i className={icon}></i></span>
      <div className="service-info">
        <h4 className="service-title">saving money</h4>
        <p className="service-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Asperiores, officia.
        </p>
      </div>
    </article>
    })}
 

   

    </div>
  </section>
    )
}

export default Services
