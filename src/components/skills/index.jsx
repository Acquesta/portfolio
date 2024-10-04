import Icon from "./Icon";

import JavaScript from '../../assets/icons/JavaScript.svg'
import Firebase from '../../assets/icons/Firebase.svg'
import MongoDB from '../../assets/icons/MongoDB.svg'
import Python from '../../assets/icons/Python.svg'
import React from '../../assets/icons/React.svg'
import Tailwind from '../../assets/icons/Tailwind.svg'
import TypeScript from '../../assets/icons/TypeScript.svg'

const icons = [JavaScript, Firebase, MongoDB, Python, React, Tailwind, TypeScript]

function Skills() {
  return (
    <div className="pb-10 bg-azulClaro">
      <h2 className="text-brancoTexto text-center text-xl">Skills</h2>
      <div className="grid grid-cols-4 m-5 gap-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7">
        {
          icons.map(icon => <Icon icon={icon} />)
        }      
      </div>
    </div>
  );
}

export default Skills;
