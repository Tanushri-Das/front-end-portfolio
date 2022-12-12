import React from 'react'

import MyProjects from '../MyProjects/MyProjects';

const projects = [
  {
      "id":"01",
      "project_name": "Ashley Homestore",
      "home_src":"https://i.ibb.co/nMjnVq5/sufa.jpg",
      "home1_src":"https://i.ibb.co/zhYr80Y/home.jpg",
      "sign":"https://i.ibb.co/HVRP2tc/signup.jpg",
      "login":"https://i.ibb.co/HG68GqN/login.jpg",
      "order":"https://i.ibb.co/Rh3S7TT/order.jpg" ,
      "add":"https://i.ibb.co/K57fyV2/Whats-App-Image-2022-12-11-at-21-30-42-1.jpg",
      "mypro":"https://i.ibb.co/rM2NZmh/add.jpg",
      "seller":"https://i.ibb.co/n3xhvZ4/seller.jpg" ,
      "buyer":"https://i.ibb.co/G0wCzrr/buyer.jpg",
      "short_description" : "This is a furniture reseal website,which provides some second hand products.",
      "livesite_href": "https://furniture-reseal.web.app/",
      "cilent_side": "https://github.com/Tanushri-Das/furniture-reseal-client-side",
      "server_side": "https://github.com/Tanushri-Das/furniture-reseal-server-side"
  },
  
  
]

const SingleProject = () => {
  
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center h-full lg:h-[900px] lg:ml-64 p-4">
      {
        projects.map(project => <MyProjects project={project}></MyProjects>)
      }
    </div>
  )
}

export default SingleProject