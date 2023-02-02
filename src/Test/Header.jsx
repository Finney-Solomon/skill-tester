import { Card } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <div>
       <Card
        variant="outlined"
        color="text.secondary"
        style={{
          height: 73,
          backgroundSize: "cover",
          backgroundColor: "#003060",
        }}
      >
        <h3 className="text">TEST</h3>
      </Card>
    </div>
  )
}

export default Header
