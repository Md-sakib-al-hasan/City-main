import Card from "../card/Card"
 

export default function Courscards() {
    const cards = [{path:"textile" ,price:55,title:"Textile Technology",discription:"Learn about the latest advancements and techniques in textile manufacturing, including sustainable practices.",user:78,message:2,image:"https://i.ibb.co.com/T0Q7LtP/portrait-businesswoman-owner.jpg"}
        ,{path:"electronic" ,price:56,title:" Electronic Technology",discription:"Explore cutting-edge innovations in electronic systems and devices, from microchips to smart gadgets.",user:78,message:2,image:"https://i.ibb.co.com/r2CY6yf/top-view-wires-tech-background.jpg"} 
        ,{path:"computer" ,price:77,title:" Computer Technology",discription:" Dive into the world of computing, covering topics like programming, AI, and hardware development.",user:78,message:2,image:"https://i.ibb.co.com/R31y1xM/2232237.jpg"}
        
        ,{path:"Mechanical" ,price:88,title:"Mechanical Technology",discription:"Understand the fundamentals of mechanical systems and how they drive modern engineering solutions.",user:78,message:2,image:"https://i.ibb.co.com/kqnDzsV/29021.jpg"}
        ,{path:"civil" ,price:88,title:"Civil Technology",discription:"Discover the principles of civil engineering and infrastructure development, from construction to urban planning.",user:78,message:2,image:"https://i.ibb.co.com/vhCtkh2/5096384.jpg"}
    ]
    
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 w-11/12 max-w-[1280px]  mx-auto mt-10 gap-2 ">
       {
        cards.map((card,id) => <Card card={card} key={id}></Card> )
       }
    </div>
  )
}
