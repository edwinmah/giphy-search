import { css } from 'styled-components'

export const media = {
  sm: (...args) => css`
    @media (min-width: 48em) {
      ${ css(...args) }
    }
  `,
  md: (...args) => css`
    @media (min-width: 62em) {
      ${ css(...args) }
    }
  `
}