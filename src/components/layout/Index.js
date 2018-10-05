import React from 'react'
import Tracks from '../tracks/Tracks'
import Search from '../search/Search'

const Index = () => {
  return (
    <React.Fragment>
      <Search className="mb-5"/>
      <Tracks />
    </React.Fragment>
  )
}
export default Index
