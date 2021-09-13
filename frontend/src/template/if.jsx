import React from 'core-js/library/fn/reflect/es7/metadata'
export default props => {
   if(props.test) {
      return props.children
   } else {
      return false
   }
}