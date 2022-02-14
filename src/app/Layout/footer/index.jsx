import React from 'react'
import './footer.scss'


const Footer = () => {
    return (
        <div className="footer global-page-padding-left-right global-flex-h-center-v-center">
        <div className="footer__copy-rights">©2022 ComeOn</div>
        <div className="dot global-flex-h-center-v-center">
            <span>.</span>
        </div>
        <div className="footer__policy">Privacy Policy</div>
    </div>
    )
}


export default Footer