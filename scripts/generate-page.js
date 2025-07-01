#!/usr/bin/env node

import fs from 'fs'
import path from 'path'

const pageName = process.argv[2]

if (!pageName) {
  console.error('⚠️  Uso: npm run generate:page <nome-da-pagina>')
  process.exit(1)
}

const basePath = path.join('src', 'pages', pageName)

const structure = {
  components: ['index.tsx'],
  data: ['index.ts'],
  hooks: ['index.tsx'],
  view: ['index.tsx', 'types.ts'],
  '': ['index.tsx']
}

function toPascalCase(str) {
  return str
    .replace(/[_-]+/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
}

try {
  // cria pastas e arquivos
  Object.entries(structure).forEach(([folder, files]) => {
    const folderPath = path.join(basePath, folder)
    fs.mkdirSync(folderPath, { recursive: true })

    files.forEach(file => {
      const filePath = path.join(folderPath, file)

      let content = ''
      if (folder === 'view' && file === 'index.tsx') {
        console.log("Entrou")
        const componentName = toPascalCase(pageName) + 'View'
        const interfaceName = `I${toPascalCase(pageName)}View`

        content = `import React from 'react'\nimport { ${interfaceName} } from './types'\n\nexport const ${componentName}: React.FC<${interfaceName}> = () => {\n  return <div></div>\n}\n`
      } else if (folder === 'view' && file === 'types.ts') {
        const interfaceName = `I${toPascalCase(pageName)}View`
        content = `export interface ${interfaceName} {\n  nome: string\n}\n`
      } else if (file === 'index.tsx' && folder === '') {
        const componentName = toPascalCase(pageName)

        content = `import { ${componentName}View } from './view'

export const ${componentName} = () => {
  return <${componentName}View nome={'${componentName}'} />\n}
`
      } else {
        console.log(folder, file)

        content = `// ${file} de ${pageName}`
      }

      fs.writeFileSync(filePath, content, 'utf8')
    })
  })

  console.log(`✅ Página '${pageName}' gerada com sucesso em ${basePath}`)
} catch (err) {
  console.error('Erro ao criar a página:', err)
}
