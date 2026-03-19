// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from "react"
// import { motion } from "framer-motion"
// import { Trophy, Flame } from "lucide-react"

// const username = "dhritigupta"

// const Leetcode = () => {

//   const [stats, setStats] = useState(null)

//   useEffect(() => {

//     fetch(`https://leetcode-api-faisalshohag.vercel.app/${username}`)
//       .then(res => res.json())
//       .then(data => setStats(data))
//       .catch(() => setStats(null))

//   }, [])

//   if(!stats) return null

//   const total = stats.totalSolved
//   const easy = stats.easySolved
//   const medium = stats.mediumSolved
//   const hard = stats.hardSolved

//   const percent = (value, max) => (value / max) * 100

//   return (
//     <section id="leetcode" className="py-24 px-6 sm:px-10 md:px-24">

//       <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 italic">
//         LeetCode <span className="text-accent">Progress</span>
//       </h2>

//       <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

//         {/* Circular Progress */}

//         <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white/80 dark:bg-[#0f1b3d]/80 backdrop-blur-xl border border-gray-200 dark:border-white/10">

//           <div className="relative w-40 h-40">

//             <svg className="w-40 h-40 transform -rotate-90">

//               <circle
//                 cx="80"
//                 cy="80"
//                 r="70"
//                 stroke="gray"
//                 strokeWidth="10"
//                 fill="transparent"
//                 opacity="0.2"
//               />

//               <motion.circle
//                 cx="80"
//                 cy="80"
//                 r="70"
//                 stroke="#10b981"
//                 strokeWidth="10"
//                 fill="transparent"
//                 strokeDasharray={440}
//                 initial={{ strokeDashoffset: 440 }}
//                 animate={{ strokeDashoffset: 440 - (total / 500) * 440 }}
//                 transition={{ duration: 1 }}
//               />

//             </svg>

//             <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold">

//               {total}

//             </div>

//           </div>

//           <p className="mt-4 text-theme-secondary">
//             Problems Solved
//           </p>

//         </div>


//         {/* Stats */}

//         <div className="space-y-6">

//           {/* Easy */}

//           <div className="p-6 rounded-xl bg-white/80 dark:bg-[#0f1b3d]/80 border border-gray-200 dark:border-white/10">

//             <p className="text-green-500 font-semibold mb-2">
//               Easy
//             </p>

//             <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded">

//               <motion.div
//                 className="bg-green-500 h-2 rounded"
//                 initial={{ width: 0 }}
//                 animate={{ width: `${percent(easy, stats.totalEasy)}%` }}
//                 transition={{ duration: 1 }}
//               />

//             </div>

//             <p className="text-sm mt-1">{easy}</p>

//           </div>


//           {/* Medium */}

//           <div className="p-6 rounded-xl bg-white/80 dark:bg-[#0f1b3d]/80 border border-gray-200 dark:border-white/10">

//             <p className="text-yellow-500 font-semibold mb-2">
//               Medium
//             </p>

//             <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded">

//               <motion.div
//                 className="bg-yellow-500 h-2 rounded"
//                 initial={{ width: 0 }}
//                 animate={{ width: `${percent(medium, stats.totalMedium)}%` }}
//                 transition={{ duration: 1 }}
//               />

//             </div>

//             <p className="text-sm mt-1">{medium}</p>

//           </div>


//           {/* Hard */}

//           <div className="p-6 rounded-xl bg-white/80 dark:bg-[#0f1b3d]/80 border border-gray-200 dark:border-white/10">

//             <p className="text-red-500 font-semibold mb-2">
//               Hard
//             </p>

//             <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded">

//               <motion.div
//                 className="bg-red-500 h-2 rounded"
//                 initial={{ width: 0 }}
//                 animate={{ width: `${percent(hard, stats.totalHard)}%` }}
//                 transition={{ duration: 1 }}
//               />

//             </div>

//             <p className="text-sm mt-1">{hard}</p>

//           </div>

//         </div>

//       </div>


//       {/* Extra Stats */}

//       <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mt-10">

//         {/* Contest Rating */}

//         <div className="p-6 rounded-2xl bg-white/80 dark:bg-[#0f1b3d]/80 border border-gray-200 dark:border-white/10 flex items-center gap-4">

//           <Trophy className="text-yellow-500"/>

//           <div>

//             <p className="text-theme-secondary text-sm">
//               Global Rating
//             </p>

//             <h3 className="text-xl font-bold">
//               {stats.ranking}
//             </h3>

//           </div>

//         </div>


//         {/* Streak */}

//         <div className="p-6 rounded-2xl bg-white/80 dark:bg-[#0f1b3d]/80 border border-gray-200 dark:border-white/10 flex items-center gap-4">

//           <Flame className="text-orange-500"/>

//           <div>

//             <p className="text-theme-secondary text-sm">
//               Contribution Point
//             </p>

//             <h3 className="text-xl font-bold">
//               {stats.contributionPoint}
//             </h3>

//           </div>

//         </div>

//       </div>

//     </section>
//   )
// }

// export default Leetcode
