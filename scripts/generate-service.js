#!/usr/bin/env node

import fs from 'fs'
import path from 'path'

const serviceName = process.argv[2]

if (!serviceName) {
  console.error('⚠️  Uso: npm run generate:service <nome-da-service>')
  process.exit(1)
}

function toPascalCase(str) {
  return str
    .replace(/[_-]+/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
}

function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase()
}

const pascalName = toPascalCase(serviceName)
const kebabName = toKebabCase(serviceName)
const camelName = pascalName.charAt(0).toLowerCase() + pascalName.slice(1)

const basePath = path.join('src', 'services', kebabName+"-service")
fs.mkdirSync(basePath, { recursive: true })

// index.ts content
const indexContent = `import { IPagination } from 'src/models/types'
import { IHttpInstance } from '../types'
import { I${pascalName}Request, I${pascalName}Response, I${pascalName}SearchParams } from './types'

export const ${pascalName}Service = (instance: IHttpInstance) => {
  const get${pascalName} = async (params: I${pascalName}SearchParams) =>
    instance.get<IPagination<I${pascalName}Response>>('/${kebabName}', {
      params
    })

  const get${pascalName}ById = async (id: string) => instance.get<I${pascalName}Response>(\`/${kebabName}/\${id}\`)

  const create${pascalName} = async (data: I${pascalName}Request) => instance.post<I${pascalName}Request, I${pascalName}Response>('/${kebabName}', data)

  const update${pascalName} = async (id: string, data: I${pascalName}Request) =>
    instance.put<I${pascalName}Request, I${pascalName}Response>(\`/${kebabName}\`, data)

  const delete${pascalName} = async (id: string) => instance.delete<void>(\`/${kebabName}/\${id}\`)

  return {
    get${pascalName},
    get${pascalName}ById,
    create${pascalName},
    update${pascalName},
    delete${pascalName}
  }
}
`

// types.ts content
const typesContent = `export interface I${pascalName}Request {
  nome: string
}

export interface I${pascalName}Response {
  nome: string
}

export interface I${pascalName}SearchParams {
  nome: string
}
`

// Write files
try {
  fs.writeFileSync(path.join(basePath, 'index.ts'), indexContent, 'utf8')
  fs.writeFileSync(path.join(basePath, 'types.ts'), typesContent, 'utf8')

  console.log(`✅ Service '${serviceName}' gerada com sucesso em ${basePath}`)

  // Update main index.ts
  const mainIndexPath = path.join('src', 'services', 'index.ts')
  let mainIndexContent = ''

  // If main index exists, read it; if not, initialize
  if (fs.existsSync(mainIndexPath)) {
    mainIndexContent = fs.readFileSync(mainIndexPath, 'utf8')
  } else {
    mainIndexContent = `import api from '@providers/api'\n\n`
  }

  const importLine = `import { ${pascalName}Service } from './${kebabName}-service'`
  const clientLine = `const ${camelName}Client = ${pascalName}Service(api)`

  // Add import if not exists
  if (!mainIndexContent.includes(importLine)) {
    mainIndexContent = importLine + '\n' + mainIndexContent
  }

  // Add client initialization if not exists
  if (!mainIndexContent.includes(clientLine)) {
    const exportIndex = mainIndexContent.lastIndexOf('export {')
    if (exportIndex !== -1) {
      // Insert before export block
      mainIndexContent =
        mainIndexContent.slice(0, exportIndex) + clientLine + '\n\n' + mainIndexContent.slice(exportIndex)
    } else {
      // Append at end
      mainIndexContent += clientLine 
    }
  }

  // Update export block
  const exportRegex = /export\s*{\s*([\s\S]*?)}/m
  if (exportRegex.test(mainIndexContent)) {
    // Append to existing export
    mainIndexContent = mainIndexContent.replace(exportRegex, (match, p1) => {
      const exports = p1.split(',').map(e => e.trim())
      if (!exports.includes(`${camelName}Client`)) {
        exports.push(`${camelName}Client`)
      }
      return `export { ${exports.join(', ')} }`
    })
  } else {
    // Add export block
    mainIndexContent += `\nexport { ${camelName}Client }\n`
  }

  fs.writeFileSync(mainIndexPath, mainIndexContent, 'utf8')

  console.log(`✅ Service '${serviceName}' adicionada ao index principal com sucesso.`)
} catch (err) {
  console.error('Erro ao criar a service:', err)
}
