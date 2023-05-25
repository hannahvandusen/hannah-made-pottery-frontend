import React from 'react'
import hannah from '../images/hannah.JPG'
import flowers from '../images/flowers.jpg'
import delft from '../images/delft.jpg'

function About() {
  return (
    <div>
        <section style={{height: "20vh", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "3em"}}>
            <header>Meet the Potter</header>
        </section>
        <section style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "1%"}}>
            <img src={hannah} style={{width: "48vw"}} /> 
            <p style={{padding: "2%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et, incidunt in dolorem culpa optio est necessitatibus dolore magni eius ipsa reiciendis quo ab dicta! Nulla nihil voluptas quas eum?
            Repellendus esse, doloribus nesciunt ab qui debitis quod eligendi deleniti animi aliquid odit. Suscipit aspernatur esse consequatur consequuntur optio reprehenderit sequi inventore, rerum ex harum, sit ullam vero ab sint.
            Cupiditate porro totam doloribus culpa fugit aliquid quae itaque debitis suscipit cum! Nesciunt saepe officia, animi rem vitae reprehenderit voluptate voluptates maiores nam vero. Nostrum similique deserunt quaerat! Ducimus, dolor?
            Temporibus quisquam dolorum, modi velit ipsa in doloribus omnis ex incidunt aperiam delectus at. Illo, tenetur. Impedit aut adipisci nam dolor nisi, eaque recusandae, unde est assumenda sit commodi in!
            Amet saepe labore libero ullam molestias doloremque voluptatibus officia non quos voluptatum, veritatis magnam fuga cumque fugit mollitia, nisi repellat, nihil voluptate optio incidunt enim vero eos cum? Commodi, doloribus.</p>
        </section>

        <section style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "1%"}}>
            <p style={{padding: "2%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et, incidunt in dolorem culpa optio est necessitatibus dolore magni eius ipsa reiciendis quo ab dicta! Nulla nihil voluptas quas eum?
            Repellendus esse, doloribus nesciunt ab qui debitis quod eligendi deleniti animi aliquid odit. Suscipit aspernatur esse consequatur consequuntur optio reprehenderit sequi inventore, rerum ex harum, sit ullam vero ab sint.
            Cupiditate porro totam doloribus culpa fugit aliquid quae itaque debitis suscipit cum! Nesciunt saepe officia, animi rem vitae reprehenderit voluptate voluptates maiores nam vero. Nostrum similique deserunt quaerat! Ducimus, dolor?
            Temporibus quisquam dolorum, modi velit ipsa in doloribus omnis ex incidunt aperiam delectus at. Illo, tenetur. Impedit aut adipisci nam dolor nisi, eaque recusandae, unde est assumenda sit commodi in!
            Amet saepe labore libero ullam molestias doloremque voluptatibus officia non quos voluptatum, veritatis magnam fuga cumque fugit mollitia, nisi repellat, nihil voluptate optio incidunt enim vero eos cum? Commodi, doloribus.</p>
            <img src={delft} style={{width: "48vw"}} /> 
        </section>
        <section style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "1%"}}>
            <img src={flowers} style={{width: "48vw"}} /> 
            <p style={{padding: "2%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et, incidunt in dolorem culpa optio est necessitatibus dolore magni eius ipsa reiciendis quo ab dicta! Nulla nihil voluptas quas eum?
            Repellendus esse, doloribus nesciunt ab qui debitis quod eligendi deleniti animi aliquid odit. Suscipit aspernatur esse consequatur consequuntur optio reprehenderit sequi inventore, rerum ex harum, sit ullam vero ab sint.
            Cupiditate porro totam doloribus culpa fugit aliquid quae itaque debitis suscipit cum! Nesciunt saepe officia, animi rem vitae reprehenderit voluptate voluptates maiores nam vero. Nostrum similique deserunt quaerat! Ducimus, dolor?
            Temporibus quisquam dolorum, modi velit ipsa in doloribus omnis ex incidunt aperiam delectus at. Illo, tenetur. Impedit aut adipisci nam dolor nisi, eaque recusandae, unde est assumenda sit commodi in!
            Amet saepe labore libero ullam molestias doloremque voluptatibus officia non quos voluptatum, veritatis magnam fuga cumque fugit mollitia, nisi repellat, nihil voluptate optio incidunt enim vero eos cum? Commodi, doloribus.</p>
        </section>

    </div>
  )
}

export default About