import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import './index.css'

import MainMenu from '../components/Menu/MainMenu'

const TemplateWrapper = ({ children,  data }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
        <MainMenu />
      {children}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

