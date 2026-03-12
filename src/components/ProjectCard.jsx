import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"

export default function ProjectCard({project, openModal}){

return(

<Tilt glareEnable={true} glareMaxOpacity={0.2}>

<motion.div
whileHover={{scale:1.05}}
className="bg-white/5 backdrop-blur-xl p-6 rounded-xl cursor-pointer"
onClick={()=>openModal(project)}
>

<h3 className="text-xl font-bold">
{project.title}
</h3>

<p className="text-gray-400 mt-2">
{project.desc}
</p>

<img
src={project.image}
className="mt-4 rounded-lg opacity-80 hover:opacity-100 transition"
/>

</motion.div>

</Tilt>

)

}