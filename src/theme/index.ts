// src/theme/index.ts
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
import { tokens } from "./tokens"
import { semanticTokens } from "./semantic-tokens"
import { foundations } from "./foundations"
import { styles } from "./styles"
import { buttonRecipe } from "./recipe/button"

const customConfig = defineConfig({
  cssVarsPrefix: "ck",
  
  globalCss: styles.globalCss,

  theme: {
    ...foundations,
    tokens,
    semanticTokens,
    textStyles: styles.textStyles,
    layerStyles: styles.layerStyles,
    slotRecipes: {
      button: buttonRecipe
    }
  },
})

export const system = createSystem(defaultConfig, customConfig)

// Export individual pieces for direct usage
export { tokens } from "./tokens"
export { semanticTokens } from "./semantic-tokens"
export { foundations } from "./foundations"
export { styles } from "./styles"