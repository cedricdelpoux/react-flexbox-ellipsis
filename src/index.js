import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: inline-block;
  flex: 1 1 auto;
  min-width: 0;
`

const Content = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const Ellipsis = ({children, ...props}) => (
  <Wrapper {...props}>
    <Content>{children}</Content>
  </Wrapper>
)

export default Ellipsis
