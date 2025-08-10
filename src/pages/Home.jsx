import { useEffect, useRef, useState } from "react"

import { Helmet } from "react-helmet-async"
import Messenger from '../shared/components/MessengerHomeButton'

const HomePage = () =>{
    return(
        <>
        {/* - <MessengerChat /> */}
      <Messenger />

        <Helmet>
            <title>School | Home</title>
        </Helmet>

        </>
    )
}

export default HomePage