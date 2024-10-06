import React from 'react'
import HostelHeader from '../../components/Hostel/HostelHeader'
import QualityHostel from '../../components/Hostel/QualityHostel'
import QualityHostelService from '../../components/Hostel/QualityHostelService'
import HostelMap from '../../components/Hostel/HostelMap'

const HostelPage = () => {
    return (
        <>
            <HostelHeader />
            <QualityHostel />
            <QualityHostelService />
            <HostelMap />
        </>
    )
}

export default HostelPage