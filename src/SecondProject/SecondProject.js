import React from 'react';
import MySecond from '../MySecond/MySecond';

const myProject =[
    {
        "id":"02",
        "project_name": "Tanu Eye Care",
         "home1":"https://i.ibb.co/hBBVhML/1.jpg",
         "home2":"https://i.ibb.co/whLnSKP/2.jpg",
         "home3":"https://i.ibb.co/0DrK69b/3.jpg",
         "home4":"https://i.ibb.co/KwcMrVx/4.jpg",
         "sign":"https://i.ibb.co/1LMc6mw/5.jpg",
         "log":"https://i.ibb.co/mzvd84K/6.jpg",
         "details":"https://i.ibb.co/bzqwPWp/7.jpg",
         "see1":"https://i.ibb.co/vZsTmsC/8.jpg",
         "see2":"https://i.ibb.co/TvrhX4f/9.jpg",
          "blog":"https://i.ibb.co/CtmTVGn/10.jpg",
          "mine":"https://i.ibb.co/FJCYW2K/11.jpg",
          "add":"https://i.ibb.co/f8BvX1q/13.jpg",
          "short_description" : "This is a furniture reseal website,which provides some second hand products.",
          "livesite_href": "https://doctor-personal-website.web.app/",
          "cilent_side": "https://github.com/Tanushri-Das/doctor-personal-website",
          "server_side": "https://github.com/Tanushri-Das/doctor-personal-server-side"
    },
   
]

// mb-[2200px]
const SecondProject = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:h-[1050px] lg:mb-28 lg:ml-96 p-4">
      {
        myProject.map(project => <MySecond project={project}></MySecond>)
      }
    </div>
  )
}

export default SecondProject