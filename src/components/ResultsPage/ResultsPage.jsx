import React from 'react'
import './ResultsPage.scss'
import { motion } from 'framer-motion';
import ResultsTabsCard from '../ResultsTabsCard/ResultsTabsCard';



export default function ResultsPage() {
  return (
    <motion.div>
         <div className='main'>
             <div className='main__container'>
                 <ResultsTabsCard />
             </div>
         </div>

    </motion.div>
  )
}
