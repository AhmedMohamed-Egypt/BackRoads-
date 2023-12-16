import { tours } from "../data"
import Title from "./Title"

function Tours() {
    return (
        <section className="section" id="tours">
             <Title title={"featured"} subtitle={"tours"}/>
   

      <div className="section-center featured-center">
        {tours.map((item)=>{
          const {id,title,date,country,cost ,days,img} = item

          return        <article className="tour-card" key={id}>
          <div className="tour-img-container">
            <img src={img} className="tour-img" alt="" />
            <p className="tour-date">{date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{title}</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {c}
              </p>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
        </article>
        })}
 



      </div>
    </section>
    )
}

export default Tours
