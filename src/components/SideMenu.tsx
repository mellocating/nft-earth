import React from 'react'
import { Box, Drawer } from '@mui/material'
import Connect from './Connect'

function SideMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
      <Box sx={{ padding: '0.5rem', paddingTop: '2rem' }}>
        <Connect />
      </Box>
    </Drawer>
  )
}

export default SideMenu
