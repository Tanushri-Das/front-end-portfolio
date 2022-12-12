import React from 'react';
import MyThirdProject from '../MyThirdProject/MyThirdProject';

const myThird = [
  {
      "id":"03",
      "project_name": "Dream CSE",
      "home_src1":"https://i.ibb.co/yW1N9FJ/a.jpg",
      "home_src2":"https://i.ibb.co/4R4QT7Q/b.jpg",
      "home_src3":"https://i.ibb.co/jk9N0rP/c.jpg",
      "home_src4":"https://i.ibb.co/LQVkVJH/d.jpg",
      "sign":"https://i.ibb.co/12jmKPJ/e.jpg",
      "log":"https://i.ibb.co/3rCKkF5/f.jpg",
      "courses_1" :"https://i.ibb.co/T12SDyb/g.jpg",
      "courses_2" :"https://i.ibb.co/D7480M2/h.jpg",
      "courses_3":"https://i.ibb.co/hZZMdKR/i.jpg",
      "courses_4":"https://i.ibb.co/1ndFXMF/j.jpg",
      "pre_1":"https://i.ibb.co/kD654rB/k.jpg",
      "pre_2":"https://i.ibb.co/LNv62Hc/l.jpg",
      "dawn_1":"https://i.ibb.co/N3qNzPM/m.jpg",
      "dawn_2":"https://i.ibb.co/DCB2wkZ/n.jpg",
      "blog":"https://i.ibb.co/fSPfnbD/bl.jpg",
      "livesite_href": "https://learning-platform-da97f.web.app/",
      "cilent_side": "https://github.com/Tanushri-Das/learning-platform-client-side",
      "server_side": "https://github.com/Tanushri-Das/learning-platform-server-side"
  }
]

const ThirdProject = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center h-full lg:h-[1230px] lg:ml-64 p-4">
      {
        myThird.map(project => <MyThirdProject project={project}></MyThirdProject>)
      }
    </div>
  )
}

export default ThirdProject