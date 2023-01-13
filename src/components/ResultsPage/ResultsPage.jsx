import React from 'react'
import './ResultsPage.scss'
import { motion } from 'framer-motion';
import ResultsTabsCard from '../ResultsTabsCard/ResultsTabsCard';



export default function ResultsPage() {
  return (
    <motion.div>
         <div className='results'>
             <div className='results__container'>

                 <div className='results__tabs-card-container'>

                 </div>
                 <ResultsTabsCard />
             </div>
         </div>

    </motion.div>
  )
}
