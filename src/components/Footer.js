import React from 'react'
import {Rodape} from './stylesFooter.js'

export default function Footer(props) {
  return (
    <div>
      <Rodape>
        <p>{props.copyright}</p>
      </Rodape>
    </div>
  )
}
