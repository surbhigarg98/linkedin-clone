import { FiberManualRecord, Info } from '@material-ui/icons'
import React from 'react'
import './Widgets.css'
function Widgets() {
    const newsArticle =(heading,subtitle)=>(
        <div className="widgetsArticle">
            <div className="widgets__left">
                <FiberManualRecord/>
            </div>
            <div className="widgets__right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
               <h2>LinkedIn News</h2>
               <Info/>
            </div>
            {newsArticle('COVID-19','no.of covid-19 cases increasing day by day')}
            {newsArticle('Tesla hits new high','cars & auto -300 readers')}
            {newsArticle('Bitcoins break $22k','crypto -3000 readers')}
            {newsArticle('Is redux too good?','code - 287 readers')}
            {newsArticle('Is Automation replacing jobs','ml-600 readers')}
            {newsArticle('Tesla hits new high','cars & auto -300 readers')}
            {newsArticle('Bitcoins break $22k','crypto -3000 readers')}
            {newsArticle('Is redux too good?','code - 287 readers')}
            {newsArticle('Is Automation replacing jobs','ml-600 readers')}
        </div>
    )
}

export default Widgets
